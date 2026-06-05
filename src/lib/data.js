export const getProjects = async () => {
    try {
        const isClient = typeof window !== 'undefined';
        const url = isClient ? '/api/projects' : 'https://www.royjibon.online/api/projects';
        
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error('Failed to fetch projects');
        }

        return await res.json();
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}