'use client'

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-card">
      <div className="container">
        <div className="max-w-3xl">
          <h2 className="section-heading mb-12">About</h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a full-stack engineer passionate about solving complex problems through elegant code and intuitive interfaces. My work spans fintech platforms, real estate management systems, and real-time communication tools.
            </p>

            <p>
              With expertise in Flutter for mobile-first experiences and Node.js for scalable backends, I focus on delivering applications that handle high throughput, complex billing logic, and seamless offline-first synchronization. I've built systems managing property allocations, tenant billing, and virtual wallet transactions.
            </p>

            <p>
              Based in Nairobi, Kenya, I collaborate with teams across Africa and beyond to create production-grade software. When not coding, I explore algorithm visualization, contribute to open-source projects, and share knowledge about real-time systems architecture.
            </p>

            <p className="pt-4">
              I'm always interested in discussing innovative projects, technical challenges, or opportunities to build something meaningful. Let's connect.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
