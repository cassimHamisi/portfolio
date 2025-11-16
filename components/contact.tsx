'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, Loader } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setStatusMessage('Message sent successfully! I\'ll get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setStatusMessage('Failed to send message. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setStatusMessage('An error occurred. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="section-heading mb-6">Get in Touch</h2>
          <p className="section-subheading mb-12">
            Have a project in mind or want to discuss real-time systems, mobile architecture, or scalable backends? I'd love to hear from you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
              />
            </div>

            {status !== 'idle' && (
              <div className={`p-4 rounded-lg ${status === 'success' ? 'bg-success/10 text-success' : 'bg-red-500/10 text-red-500'}`}>
                {statusMessage}
              </div>
            )}

            <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              {isLoading ? (
                <>
                  <Loader className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-foreground mb-4">Or reach out directly:</p>
            <a href="mailto:cassimjumahamisi2@gmail.com" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-base underline">
              cassimjumahamisi2@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
