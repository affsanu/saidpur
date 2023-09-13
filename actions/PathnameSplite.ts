export function PathnameSplite(pathname: string): string {
    const pathParts = pathname.split('/');
    // Find the index of 'dashboard' in the pathParts array
    const dashboardIndex = pathParts.indexOf('dashboard');

    // Get the value after 'dashboard' or use 'dashboard' as a fallback
    const newpath = dashboardIndex !== -1 && dashboardIndex + 1 < pathParts.length ? pathParts[dashboardIndex + 1] : 'dashboard';
    return newpath;
}