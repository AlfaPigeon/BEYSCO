/** Prepends BASE_URL to public-folder asset paths. */
export function asset(path: string): string {
  return import.meta.env.BASE_URL + path.replace(/^\//, '');
}
