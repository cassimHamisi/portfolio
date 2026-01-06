"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Cassim Hamisi</h3>
            <p className="text-sm text-muted-foreground">
              Software Engineer specializing in real-time systems and
              mobile-first architecture.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/cassimHamisi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/cassim-hamisi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:cassimjumahamisi2@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Cassim Hamisi | Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  );
}
