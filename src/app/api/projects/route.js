export async function GET() {
  const projects = [
    {
      id: 1,
      title: 'Medi Queue',
      slug: 'medi-queue',
      stack: 'Full Stack',
      image: 'https://i.ibb.co.com/CsXRD6wg/image.png',
      tags: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Express', 'REST API', 'Vercel'],
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Express', 'Tailwind', 'Vercel'],
      liveUrl: 'https://medi-queue-by-rj.vercel.app/',
      githubUrl: 'https://github.com/rj-roy/medi-queue-client',

      description: 'A full-stack education platform connecting rural classrooms.',
      projectDetails: "Tutor Booking Platform is a full-stack web application that connects students with qualified tutors through an intuitive booking system. Users can browse available tutors, view detailed profiles including expertise and experience, book tutoring sessions, manage their bookings, and leave reviews. Tutors can create and manage their profiles, while authenticated users can track their booked sessions through a personalized dashboard. The platform provides a seamless experience for discovering educational support and scheduling learning sessions online.",
      keyFeatures: [
        "Browse and search tutors by subject or expertise",
        "View detailed tutor profiles with qualifications and experience",
        "Book tutoring sessions with available tutors",
        "User authentication and protected routes",
        "Add and manage tutor listings",
        "View and manage booked sessions",
        "Personal dashboard for users and tutors",
        "Tutor reviews and ratings system",
        "Responsive design for mobile, tablet, and desktop devices",
        "Secure backend API with database integration",
        "Real-time booking count and session tracking",
        "Dynamic tutor management with CRUD operations"
      ]
    },
    {
      id: 2,
      title: 'Medi Queue',
      slug: 'medi-queue',
      stack: 'Full Stack',
      image: 'https://i.ibb.co.com/CsXRD6wg/image.png',
      tags: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Express', 'REST API', 'Vercel'],
      technologies: ['TypeScript', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
      liveUrl: 'https://medi-queue-by-rj.vercel.app/',
      githubUrl: 'https://github.com/rj-roy/medi-queue-client',

      description: 'A full-stack education platform connecting rural classrooms.',
      projectDetails: "Tutor Booking Platform is a full-stack web application that connects students with qualified tutors through an intuitive booking system. Users can browse available tutors, view detailed profiles including expertise and experience, book tutoring sessions, manage their bookings, and leave reviews. Tutors can create and manage their profiles, while authenticated users can track their booked sessions through a personalized dashboard. The platform provides a seamless experience for discovering educational support and scheduling learning sessions online.",
      keyFeatures: [
        "Browse and search tutors by subject or expertise",
        "View detailed tutor profiles with qualifications and experience",
        "Book tutoring sessions with available tutors",
        "User authentication and protected routes",
        "Add and manage tutor listings",
        "View and manage booked sessions",
        "Personal dashboard for users and tutors",
        "Tutor reviews and ratings system",
        "Responsive design for mobile, tablet, and desktop devices",
        "Secure backend API with database integration",
        "Real-time booking count and session tracking",
        "Dynamic tutor management with CRUD operations"
      ]
    },
    {
      id: 3,
      title: 'Medi Queue',
      slug: 'medi-queue',
      stack: 'Full Stack',
      image: 'https://i.ibb.co.com/CsXRD6wg/image.png',
      technologies: ['TypeScript', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
      tags: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Express', 'REST API', 'Vercel'],
      liveUrl: 'https://medi-queue-by-rj.vercel.app/',
      githubUrl: 'https://github.com/rj-roy/medi-queue-client',

      description: 'A full-stack education platform connecting rural classrooms.',
      projectDetails: "Tutor Booking Platform is a full-stack web application that connects students with qualified tutors through an intuitive booking system. Users can browse available tutors, view detailed profiles including expertise and experience, book tutoring sessions, manage their bookings, and leave reviews. Tutors can create and manage their profiles, while authenticated users can track their booked sessions through a personalized dashboard. The platform provides a seamless experience for discovering educational support and scheduling learning sessions online.",
      keyFeatures: [
        "Browse and search tutors by subject or expertise",
        "View detailed tutor profiles with qualifications and experience",
        "Book tutoring sessions with available tutors",
        "User authentication and protected routes",
        "Add and manage tutor listings",
        "View and manage booked sessions",
        "Personal dashboard for users and tutors",
        "Tutor reviews and ratings system",
        "Responsive design for mobile, tablet, and desktop devices",
        "Secure backend API with database integration",
        "Real-time booking count and session tracking",
        "Dynamic tutor management with CRUD operations"
      ]
    },
    {
      id: 4,
      title: 'Medi Queue',
      slug: 'medi-queue',
      stack: 'Full Stack',
      image: 'https://i.ibb.co.com/CsXRD6wg/image.png',
      technologies: ['TypeScript', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
      tags: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Express', 'REST API', 'Vercel'],
      liveUrl: 'https://medi-queue-by-rj.vercel.app/',
      githubUrl: 'https://github.com/rj-roy/medi-queue-client',

      description: 'A full-stack education platform connecting rural classrooms.',
      projectDetails: "Tutor Booking Platform is a full-stack web application that connects students with qualified tutors through an intuitive booking system. Users can browse available tutors, view detailed profiles including expertise and experience, book tutoring sessions, manage their bookings, and leave reviews. Tutors can create and manage their profiles, while authenticated users can track their booked sessions through a personalized dashboard. The platform provides a seamless experience for discovering educational support and scheduling learning sessions online.",
      keyFeatures: [
        "Browse and search tutors by subject or expertise",
        "View detailed tutor profiles with qualifications and experience",
        "Book tutoring sessions with available tutors",
        "User authentication and protected routes",
        "Add and manage tutor listings",
        "View and manage booked sessions",
        "Personal dashboard for users and tutors",
        "Tutor reviews and ratings system",
        "Responsive design for mobile, tablet, and desktop devices",
        "Secure backend API with database integration",
        "Real-time booking count and session tracking",
        "Dynamic tutor management with CRUD operations"
      ]
    }
  ];

  return Response.json(projects);
}
