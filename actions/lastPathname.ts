export function LastPathname(pathname: string): string {
    const segments = pathname.split("/").filter(Boolean); // Split and remove empty segments
    const lastPathname = segments[segments.length - 1];

    return lastPathname;
}