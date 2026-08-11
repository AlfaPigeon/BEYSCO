/** Returns a root-relative public-folder asset path. */
export function asset(path: string): string {
  return `/${path.replace(/^\//, '')}`;
}
