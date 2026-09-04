/**
 * Host single-instance guard shared by the plugin family.
 *
 * Without this guard a dual-sourced plugin would re-register the same
 * webserver routes, tools, settings namespaces, and system-prompt sections
 * and fail the boot. mountOnce makes the second host apply a no-op for the
 * lifetime of the first instance (the browser half is already deduped by
 * package name in the client module host).
 *
 * The registry rides a global symbol so two module instances of the same
 * package (npm copy vs repository link) still share one verdict.
 */

const MOUNTED = Symbol.for('dsh-plugins.mounted-plugins')

interface MountRegistry {
  [MOUNTED]?: Set<string>
}

function mountedSet(): Set<string> {
  const registry = globalThis as MountRegistry
  return (registry[MOUNTED] ??= new Set())
}

/**
 * Wrap a cordis plugin apply so the package runs at most once per process.
 * The first mount registers normally and unmarks when its fiber disposes;
 * any later mount of the same package name is a no-op.
 * @param packageName - npm package identity shared by every install source.
 * @param fn - the original plugin apply.
 * @returns an apply of the same shape.
 */
export function mountOnce<T extends (...args: any[]) => unknown>(packageName: string, fn: T): T {
  return ((...args: unknown[]) => {
    const mounted = mountedSet()
    if (mounted.has(packageName)) return
    mounted.add(packageName)
    const ctx = args[0] as { effect?: (effect: () => unknown) => unknown } | undefined
    ctx?.effect?.(() => () => {
      mounted.delete(packageName)
    })
    return fn(...args)
  }) as T
}