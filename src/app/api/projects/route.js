export async function GET() {
  const projects = [
    {
      id: 1,
      title: 'Medi Queue',
      slug: 'medi-queue',
      description: 'A Tutor Booking Website',
      image: 'https://i.ibb.co.com/CsXRD6wg/image.png',
      tags: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: 'https://medi-queue-by-rj.vercel.app/',
      githubUrl: 'https://github.com/rj-roy/medi-queue-client',
      featured: false,
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      slug: 'e-commer-platform',
      description: 'Full-stack shopping experience',
      image: 'https://ibb.co.com/tPNVFzHg',
      tags: ['Node.js', 'MongoDB', 'React'],
      liveUrl: 'https://example.com/ecommerce',
      githubUrl: 'https://github.com/example/ecommerce',
      featured: false,
    },
    {
      id: 3,
      title: 'Task Manager',
      slug: 'task-manager',
      description: 'Productivity application',
      image: 'https://ibb.co.com/tPNVFzHg',
      tags: ['TypeScript', 'Redux', 'Firebase'],
      liveUrl: 'https://example.com/taskmanager',
      githubUrl: 'https://github.com/example/taskmanager',
      featured: false,
    },
  ];

  return Response.json(projects);
}
