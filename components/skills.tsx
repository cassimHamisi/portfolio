'use client'

import { Code2, Smartphone, Server, Database, Zap, Settings } from 'lucide-react'

export function Skills() {
  const skills = [
    {
      category: 'Frontend',
      icon: Code2,
      technologies: ['React', 'Flutter', 'TypeScript', 'Tailwind CSS', 'React Native', 'Next.js']
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      technologies: ['Flutter', 'Dart', 'Firebase', 'Push Notifications', 'Offline-first', 'WebSockets']
    },
    {
      category: 'Backend',
      icon: Server,
      technologies: ['Node.js', 'Express', 'REST APIs', 'WebSockets', 'Authentication', 'Serverless']
    },
    {
      category: 'Data & Infrastructure',
      icon: Database,
      technologies: ['PostgreSQL', 'Real-time Sync', 'Data Persistence', 'Query Optimization', 'Cloud Deploy']
    },
    {
      category: 'Real-Time Systems',
      icon: Zap,
      technologies: ['WebSockets', 'Live Updates', 'Event Streams', 'Message Queues', 'Live Notifications']
    },
    {
      category: 'Tools & DevOps',
      icon: Settings,
      technologies: ['Git', 'Docker', 'CI/CD', 'Vercel', 'Cloud Platforms', 'Performance Optimization']
    }
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container">
        <h2 className="section-heading mb-16">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup) => {
            const Icon = skillGroup.icon
            return (
              <div key={skillGroup.category} className="group p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all hover:shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-background border border-border rounded text-muted-foreground hover:text-accent transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
