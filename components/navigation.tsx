"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // mark that we've mounted so client-only DOM APIs can be used
    setMounted(true);
    const html = document.documentElement;
    setIsDarkMode(html.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const currentlyDark = html.classList.contains("dark");
    if (currentlyDark) {
      html.classList.remove("dark");
      localStorage.theme = "light";
      setIsDarkMode(false);
    } else {
      html.classList.add("dark");
      localStorage.theme = "dark";
      setIsDarkMode(true);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b">
      <div className="container flex items-center justify-between h-16">
        <Link href="#" className="text-xl font-bold gradient-text">
          CH
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {/*
              Avoid hydration mismatch by rendering a neutral placeholder on the
              server and until the client has mounted. The `mounted` state is
              false both on server and on the client's first render, so server
              HTML and initial client HTML match. After mount we render the
              correct icon based on the current document class.
            */}
            {!mounted ? (
              <span className="w-4 h-4" aria-hidden />
            ) : isDarkMode ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
