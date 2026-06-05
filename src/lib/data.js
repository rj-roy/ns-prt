export const getProjects = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://royjibononline.vercel.app/'}/api/projects`);

        if (!res.ok) {
            throw new Error('Failed to fetch projects');
        }

        return await res.json();
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}