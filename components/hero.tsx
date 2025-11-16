'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="section-heading mb-6">
            Cassim Hamisi
            <br />
            <span className="gradient-text">Software Engineer</span>
          </h1>
          
          <p className="section-subheading mb-8">
            Building Real-Time, Scalable Apps — Flutter, React & Backend
          </p>

          <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I design and build production-grade applications for fintech and property management. Specialized in real-time systems, mobile-first architecture, and seamless user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#projects">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>

          <div className="mt-16 pt-12 border-t">
            <p className="text-sm text-muted-foreground mb-6">Tech Stack</p>
            <div className="flex flex-wrap gap-4 justify-center">
              {['Flutter', 'React', 'Node.js', 'TypeScript', 'Firebase', 'PostgreSQL'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-card border border-border rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
