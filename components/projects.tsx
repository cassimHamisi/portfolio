'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import projectsData from '@/data/projects.json'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null)

  return (
    <section id="projects" className="py-20 px-4 bg-card">
      <div className="container">
        <h2 className="section-heading mb-16">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer bg-background border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all hover:shadow-lg"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 bg-muted overflow-hidden">
                <Image
                  src={project.images[0] || `/placeholder.svg?height=300&width=400&query=${project.title}`}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.shortDescription}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="px-2 py-1 text-xs bg-accent/10 text-accent rounded">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-xs text-muted-foreground">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  {project.github && (
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a href={Array.isArray(project.github) ? project.github[0] : project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {project.liveDemo && (
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
            <div className="bg-background border border-border rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-background border-b border-border p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                <button onClick={() => setSelectedProject(null)} className="text-muted-foreground hover:text-foreground">
                  ✕
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="relative h-64 bg-muted rounded-lg overflow-hidden">
                  <Image
                    src={selectedProject.images[0] || `/placeholder.svg?height=300&width=600&query=${selectedProject.title}`}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-muted-foreground mb-2">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.longDescription}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-muted-foreground mb-3">Technology Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="px-3 py-1.5 bg-accent/10 text-accent text-sm rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex gap-3">
                  {selectedProject.github && (
                    <Button variant="outline" asChild className="flex-1">
                      <a href={Array.isArray(selectedProject.github) ? selectedProject.github[0] : selectedProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {selectedProject.liveDemo && (
                    <Button variant="outline" asChild className="flex-1">
                      <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
