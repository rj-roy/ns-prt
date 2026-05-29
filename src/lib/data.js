export const getProjects = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/projects`, {
            cache: 'no-store',
        });
        
        if (!res.ok) {
            throw new Error('Failed to fetch projects');
        }
        
        return await res.json();
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}