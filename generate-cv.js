const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const cvHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rj Roy - Full Stack Developer CV</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            color: #1a1a1a;
            background: #ffffff;
            line-height: 1.6;
        }
        
        .container {
            max-width: 8.5in;
            height: 11in;
            margin: 0 auto;
            padding: 0.5in;
            background: white;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        
        .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            border-bottom: 3px solid #00d4ff;
            padding-bottom: 0.4in;
            margin-bottom: 0.3in;
        }
        
        .header-left h1 {
            font-size: 28px;
            font-weight: 700;
            color: #1a1a1a;
            letter-spacing: -0.5px;
        }
        
        .header-left p {
            font-size: 14px;
            color: #31e58d;
            font-weight: 600;
            margin-top: 4px;
            letter-spacing: 1px;
        }
        
        .header-right {
            text-align: right;
            font-size: 11px;
            color: #666;
            line-height: 1.5;
        }
        
        .header-right a {
            color: #00d4ff;
            text-decoration: none;
        }
        
        .content {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 0.3in;
            height: calc(100% - 1.2in);
        }
        
        .main {
            overflow-y: auto;
        }
        
        .sidebar {
            background: #f8f9fa;
            padding: 0.25in;
            border-radius: 8px;
            overflow-y: auto;
        }
        
        .section {
            margin-bottom: 0.25in;
        }
        
        .section-title {
            font-size: 12px;
            font-weight: 700;
            color: #1a1a1a;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            margin-bottom: 0.15in;
            padding-bottom: 0.08in;
            border-bottom: 2px solid #31e58d;
            display: inline-block;
        }
        
        .job {
            margin-bottom: 0.2in;
        }
        
        .job-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 0.06in;
        }
        
        .job-title {
            font-weight: 700;
            font-size: 12px;
            color: #1a1a1a;
        }
        
        .job-period {
            font-size: 10px;
            color: #999;
        }
        
        .job-company {
            font-size: 11px;
            color: #00d4ff;
            font-weight: 600;
        }
        
        .job-location {
            font-size: 10px;
            color: #888;
            margin-bottom: 0.05in;
        }
        
        .job-highlights {
            font-size: 10px;
            color: #555;
            margin-left: 0.15in;
            margin-top: 0.05in;
        }
        
        .job-highlights li {
            margin-bottom: 0.03in;
            list-style: disc;
        }
        
        .tech-tags {
            font-size: 9px;
            display: flex;
            flex-wrap: wrap;
            gap: 0.06in;
            margin-top: 0.08in;
        }
        
        .tech-tag {
            background: #e8f5ff;
            color: #00d4ff;
            padding: 0.03in 0.1in;
            border-radius: 12px;
            white-space: nowrap;
            font-weight: 500;
        }
        
        .sidebar-section {
            margin-bottom: 0.2in;
        }
        
        .sidebar-title {
            font-size: 11px;
            font-weight: 700;
            color: #1a1a1a;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 0.1in;
            padding-bottom: 0.06in;
            border-bottom: 2px solid #31e58d;
        }
        
        .skill-item {
            font-size: 10px;
            color: #555;
            margin-bottom: 0.06in;
            padding-left: 0.1in;
        }
        
        .skill-item strong {
            color: #1a1a1a;
            font-weight: 600;
        }
        
        .about-text {
            font-size: 10px;
            color: #666;
            line-height: 1.5;
            text-align: justify;
        }
        
        .highlight {
            color: #00d4ff;
            font-weight: 600;
        }
        
        .social-links {
            display: flex;
            gap: 0.1in;
            font-size: 9px;
            margin-top: 0.1in;
        }
        
        .social-links a {
            color: #00d4ff;
            text-decoration: none;
            font-weight: 600;
        }
        
        @media print {
            body {
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 100%;
                height: 100%;
                padding: 0.5in;
                box-shadow: none;
                margin: 0;
            }
        }
        
        .divider {
            height: 1px;
            background: #e0e0e0;
            margin: 0.1in 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="header-left">
                <h1>Jibon Roy</h1>
                <p>FULL STACK DEVELOPER</p>
            </div>
            <div class="header-right">
                <div>📧 dpjdeveloper.me@gmail.com</div>
                <div>📍 Bangladesh</div>
                <div><a href="https://royjibon.online">🌐 royjibon.online</a></div>
                <div><a href="https://github.com/rj-roy">💻 GitHub</a> | <a href="https://linkedin.com/in/roy-jibon">🔗 LinkedIn</a></div>
            </div>
        </div>
        
        <div class="content">
            <div class="main">
                <!-- PROFESSIONAL SUMMARY -->
                <div class="section">
                    <div class="section-title">About</div>
                    <p class="about-text" style="margin-top: 0.08in;">
                        Software engineer focused on building <span class="highlight">high-performance web applications</span>. From frontend to backend, passionate about turning complex ideas into products that work at scale. Primarily working with <span class="highlight">React, Next.js, and Node.js</span>, having built everything from AI-powered developer tools to full SaaS platforms. Deeply committed to clean architecture and shipping fast without breaking things.
                    </p>
                </div>
                
                <!-- EXPERIENCE -->
                <div class="section">
                    <div class="section-title">Experience</div>
                    
                    <div class="job">
                        <div class="job-header">
                            <span class="job-title">Full Stack Developer</span>
                            <span class="job-period">Freelance</span>
                        </div>
                        <div class="job-company">46+ Projects Delivered</div>
                        <div class="job-location">🌐 Remote • Bangladesh</div>
                        <ul class="job-highlights">
                            <li>Built 46+ production-ready web applications for 20+ happy clients with 100% satisfaction rate</li>
                            <li>Architected full-stack solutions including real-time systems, AI-powered tools, and SaaS platforms</li>
                            <li>Implemented scalable backend infrastructure with Node.js, Express, and database optimization for high-traffic applications</li>
                            <li>Developed responsive frontend applications using React and Next.js with modern UI frameworks and state management</li>
                        </ul>
                        <div class="tech-tags">
                            <span class="tech-tag">React</span>
                            <span class="tech-tag">Next.js</span>
                            <span class="tech-tag">Node.js</span>
                            <span class="tech-tag">Express</span>
                            <span class="tech-tag">MongoDB</span>
                            <span class="tech-tag">PostgreSQL</span>
                            <span class="tech-tag">TypeScript</span>
                            <span class="tech-tag">Firebase</span>
                        </div>
                    </div>
                </div>
                
                <!-- PROJECTS -->
                <div class="section">
                    <div class="section-title">Featured Projects</div>
                    
                    <div class="job">
                        <div class="job-header">
                            <span class="job-title">Medi Queue</span>
                            <span class="job-period">Featured Project</span>
                        </div>
                        <div class="job-location">Full-stack education platform connecting rural classrooms</div>
                        <ul class="job-highlights">
                            <li>Built comprehensive education platform connecting students and educators</li>
                            <li>Implemented real-time communication features for interactive learning experience</li>
                            <li>Designed scalable database architecture for managing student records and course content</li>
                        </ul>
                        <div class="tech-tags">
                            <span class="tech-tag">React</span>
                            <span class="tech-tag">Next.js</span>
                            <span class="tech-tag">Node.js</span>
                            <span class="tech-tag">MongoDB</span>
                            <span class="tech-tag">Express</span>
                            <span class="tech-tag">REST API</span>
                            <span class="tech-tag">Vercel</span>
                        </div>
                    </div>
                    
                    <div class="job">
                        <div class="job-header">
                            <span class="job-title">Keen Keeper</span>
                            <span class="job-period">Featured Project</span>
                        </div>
                        <div class="job-location">Personal relationship management platform</div>
                        <ul class="job-highlights">
                            <li>Developed relationship tracking application with intuitive UI for managing connections</li>
                            <li>Implemented modern frontend architecture with React and Next.js</li>
                            <li>Created responsive design system with Tailwind CSS</li>
                        </ul>
                        <div class="tech-tags">
                            <span class="tech-tag">React</span>
                            <span class="tech-tag">Next.js</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">Tailwind</span>
                            <span class="tech-tag">Vercel</span>
                        </div>
                    </div>
                </div>
                
                <!-- EDUCATION -->
                <div class="section">
                    <div class="section-title">Education</div>
                    <div class="job">
                        <div class="job-header">
                            <span class="job-title">Self-Taught Full Stack Developer</span>
                            <span class="job-period">2020 - Present</span>
                        </div>
                        <div class="job-location">Specialized training in modern web technologies and scalable architecture</div>
                        <ul class="job-highlights">
                            <li>Mastered full-stack development with focus on React, Next.js, and Node.js ecosystems</li>
                            <li>Built portfolio of 46+ production projects demonstrating expertise across multiple domains</li>
                            <li>Continuously learning latest technologies including AI integration and advanced system design</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <!-- SIDEBAR -->
            <div class="sidebar">
                <div class="sidebar-section">
                    <div class="sidebar-title">Skills</div>
                    
                    <div class="skill-item"><strong>Frontend:</strong> React, Next.js, TypeScript, Tailwind CSS, Chakra UI, Framer Motion</div>
                    <div class="skill-item"><strong>Backend:</strong> Node.js, Express, REST APIs, Socket.io</div>
                    <div class="skill-item"><strong>Database:</strong> MongoDB, PostgreSQL, Firebase</div>
                    <div class="skill-item"><strong>Mobile:</strong> React Native, Expo, Electron</div>
                    <div class="skill-item"><strong>DevOps:</strong> Docker, Kubernetes, Git, Vercel</div>
                </div>
                
                <div class="sidebar-section">
                    <div class="sidebar-title">Tech Stack</div>
                    <div class="tech-tags" style="flex-direction: column; gap: 0.05in;">
                        <span class="tech-tag">TypeScript</span>
                        <span class="tech-tag">React</span>
                        <span class="tech-tag">Next.js</span>
                        <span class="tech-tag">Node.js</span>
                        <span class="tech-tag">Express</span>
                        <span class="tech-tag">MongoDB</span>
                        <span class="tech-tag">PostgreSQL</span>
                        <span class="tech-tag">Firebase</span>
                        <span class="tech-tag">Framer Motion</span>
                        <span class="tech-tag">Chakra UI</span>
                        <span class="tech-tag">Shadcn UI</span>
                        <span class="tech-tag">Tailwind CSS</span>
                        <span class="tech-tag">Redux</span>
                        <span class="tech-tag">Docker</span>
                    </div>
                </div>
                
                <div class="sidebar-section">
                    <div class="sidebar-title">Core Strengths</div>
                    <div class="skill-item">• Full-stack development</div>
                    <div class="skill-item">• Scalable architecture</div>
                    <div class="skill-item">• Real-time systems</div>
                    <div class="skill-item">• AI-powered solutions</div>
                    <div class="skill-item">• SaaS platforms</div>
                    <div class="skill-item">• Clean code practices</div>
                    <div class="skill-item">• Rapid prototyping</div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
`;

async function generateCV() {
    try {
        const browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        await page.setContent(cvHTML, { waitUntil: 'networkidle0' });
        
        const outputPath = path.join(__dirname, 'CV_Rj_Roy.pdf');
        
        await page.pdf({
            path: outputPath,
            format: 'Letter',
            margin: {
                top: '0.5in',
                bottom: '0.5in',
                left: '0.5in',
                right: '0.5in'
            },
            scale: 1,
            displayHeaderFooter: false,
            printBackground: true
        });
        
        await browser.close();
        
        console.log(`✅ CV generated successfully!`);
        console.log(`📄 Location: ${outputPath}`);
        console.log(`📊 File size: ${(fs.statSync(outputPath).size / 1024).toFixed(2)} KB`);
        
    } catch (error) {
        console.error('❌ Error generating CV:', error);
        process.exit(1);
    }
}

generateCV();
