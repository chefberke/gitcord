"use client";
import React from "react";
import type { ComponentProps, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Book,
  BarChart3,
  Users,
  Shield,
} from "lucide-react";
import Image from "next/image";

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: "Platform",
    links: [
      { title: "Dashboard", href: "/feed/dashboard", icon: BarChart3 },
      { title: "Analytics", href: "/feed/activity", icon: BarChart3 },
      { title: "Repositories", href: "/feed/repositories", icon: Book },
      { title: "Organizations", href: "/feed/organization", icon: Users },
    ],
  },
  {
    label: "Resources",
    links: [
      {
        title: "GitHub API",
        href: "https://docs.github.com/en/rest",
        icon: Book,
      },
      { title: "Documentation", href: "/docs" },
      { title: "API Reference", href: "/api/docs" },
      { title: "Status", href: "/status" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Privacy Policy", href: "/privacy", icon: Shield },
      { title: "Terms of Service", href: "/terms", icon: Shield },
      { title: "Contact", href: "/contact", icon: Mail },
    ],
  },
];

export function Footer() {
  return (
    <footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-8 py-16 lg:px-12 lg:py-20">
      <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="grid w-full gap-12 xl:grid-cols-3 xl:gap-12">
        <AnimatedContainer className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Gitcord Logo"
                width={24}
                height={24}
              />
              <h1 className="text-lg font-medium text-neutral-100">Gitcord</h1>
            </div>
          </div>
          <p className="text-muted-foreground mt-4 text-sm max-w-sm">
            Track smarter, code better. Monitor and analyze all your GitHub
            repositories with real-time insights and unified analytics.
          </p>

          <p className="text-muted-foreground mt-8 text-sm md:mt-4">
            © {new Date().getFullYear()} Gitcord. All rights reserved.
          </p>
        </AnimatedContainer>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8 xl:col-span-2 xl:mt-0 justify-items-start sm:justify-items-end">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-12 md:mb-0">
                <h3 className="text-xs font-semibold text-foreground/90 uppercase tracking-wider">
                  {section.label}
                </h3>
                <ul className="text-muted-foreground mt-6 space-y-4 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="hover:text-foreground inline-flex items-center gap-2 transition-all duration-300 hover:translate-x-1"
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {link.icon && (
                          <link.icon className="size-4 flex-shrink-0" />
                        )}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>

      {/* Bottom section with additional info */}
      <AnimatedContainer delay={0.5} className="w-full">
        <div className="border-t border-foreground/10 mt-16 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <span>Made with ❤️ for developers</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Powered by Lumi Works</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy
            </a>
            <span>•</span>
            <a
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms
            </a>
            <span>•</span>
            <a
              href="/status"
              className="hover:text-foreground transition-colors"
            >
              Status
            </a>
          </div>
        </div>
      </AnimatedContainer>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: ReactNode;
};

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return children;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", y: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
