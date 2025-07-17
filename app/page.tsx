"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Md Irshad
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:bg-primary/10"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 blur-3xl rounded-full"></div>
            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                Md Irshad
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Senior Software Engineer crafting the future of digital experiences with cutting-edge technology
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/80 hover:to-blue-600/80 text-white px-8 py-3 rounded-full"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("projects")}
                  className="border-primary/50 hover:bg-primary/10 px-8 py-3 rounded-full"
                >
                  <Code className="mr-2 h-4 w-4" />
                  View Projects
                </Button>
              </div>
            </div>
          </div>
          <ChevronDown
            className="mx-auto h-8 w-8 text-muted-foreground animate-bounce cursor-pointer"
            onClick={() => scrollToSection("about")}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Card className="border-primary/20 bg-gradient-to-br from-background to-muted/20">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    I'm a passionate Senior Software Engineer currently leading the development of 99reels at InfoEdge,
                    transforming property discovery through innovative short-form video content. With expertise in
                    microservice architecture, full-stack development, and modern frameworks, I bridge the gap between
                    complex technical challenges and user-centric solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-primary/20 bg-gradient-to-br from-background to-muted/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <Briefcase className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold">3+ Years</h3>
                  <p className="text-sm text-muted-foreground">Experience</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-gradient-to-br from-background to-muted/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <Code className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold">10+</h3>
                  <p className="text-sm text-muted-foreground">Technologies</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {/* InfoEdge */}
            <Card className="border-primary/20 bg-gradient-to-br from-background to-muted/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-primary">Senior Software Engineer</CardTitle>
                    <CardDescription className="text-lg font-medium">InfoEdge • Noida, India</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Feb 2025 – Present
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • Leading development of 99reels, transforming property discovery with engaging visual content
                  </li>
                  <li>• Designed microservice architecture using Spring Boot with RabbitMQ communication</li>
                  <li>• Integrated Moengage for personalized video recommendations based on user behavior</li>
                </ul>
              </CardContent>
            </Card>

            {/* Dürr Group */}
            <Card className="border-primary/20 bg-gradient-to-br from-background to-muted/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-primary">Software Engineer I</CardTitle>
                    <CardDescription className="text-lg font-medium">Dürr Group • Noida, India</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    May 2022 – Jan 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Implemented ABAC policies in Scala Play for attribute-based security</li>
                  <li>• Transitioned monolithic to micro-frontends with ReactJS and TypeScript</li>
                  <li>• Automated testing with Cypress, enhancing reliability</li>
                  <li>• Developed RESTful APIs using Spring Boot framework</li>
                </ul>
              </CardContent>
            </Card>

            {/* Previous roles */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20 bg-gradient-to-br from-background to-muted/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Software Engineer Intern</CardTitle>
                  <CardDescription>Cyber Group Inc • Nov 2021 – May 2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Implemented report generation features and optimized SQL procedures for billing operations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-gradient-to-br from-background to-muted/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Software Developer Intern</CardTitle>
                  <CardDescription>Aveti Learning • Sep 2020 – Nov 2021</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Developed CRM dashboard and mobile app with analytics using D3.js and Chart.js.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20 bg-gradient-to-br from-background to-muted/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl group">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-primary group-hover:text-blue-600 transition-colors">
                    FoodieHub
                  </CardTitle>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardDescription>Full Stack Restaurant Management Platform</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Built a responsive front-end with React and Redux, coupled with a robust Spring Boot back-end to
                  manage orders, menus, and reservations with role-based access control.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-primary/50">
                    Spring Boot
                  </Badge>
                  <Badge variant="outline" className="border-primary/50">
                    React
                  </Badge>
                  <Badge variant="outline" className="border-primary/50">
                    Redux
                  </Badge>
                  <Badge variant="outline" className="border-primary/50">
                    PostgreSQL
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-background to-muted/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl group">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-primary group-hover:text-blue-600 transition-colors">
                    MedStore
                  </CardTitle>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardDescription>Full Stack E-commerce Platform</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Designed responsive front-end in React.js with RESTful APIs in Node.js, featuring Google/Facebook
                  authentication and Stripe payment integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-primary/50">
                    React.js
                  </Badge>
                  <Badge variant="outline" className="border-primary/50">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="border-primary/50">
                    MongoDB
                  </Badge>
                  <Badge variant="outline" className="border-primary/50">
                    Stripe
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20 bg-gradient-to-br from-background to-muted/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-primary">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Scala", "Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-background to-muted/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-primary">Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Spring Boot", "React", "Redux", "Node.js", "Express", "Django", "Scala Play"].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-background to-muted/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-primary">Tools & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Git", "CI/CD", "Apache Kafka", "RabbitMQ", "AWS", "Docker", "Cypress"].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20 bg-gradient-to-br from-background to-muted/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <GraduationCap className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <CardTitle className="text-primary">Bachelor of Technology</CardTitle>
                    <CardDescription className="text-lg">Computer Science</CardDescription>
                    <p className="text-sm text-muted-foreground mt-1">Dr A.P.J Abdul Kalam Technical University</p>
                    <Badge variant="outline" className="mt-2 border-primary/50">
                      2019 – 2022
                    </Badge>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-background to-muted/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <GraduationCap className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <CardTitle className="text-primary">Diploma</CardTitle>
                    <CardDescription className="text-lg">Computer Engineering</CardDescription>
                    <p className="text-sm text-muted-foreground mt-1">Jamia Millia Islamia</p>
                    <Badge variant="outline" className="mt-2 border-primary/50">
                      2016 – 2019
                    </Badge>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              Ready to collaborate on innovative projects or discuss opportunities? Let's build something amazing
              together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/80 hover:to-blue-600/80 text-white px-6 py-3 rounded-full"
                onClick={() => window.open("mailto:irshadmd039@gmail.com")}
              >
                <Mail className="mr-2 h-4 w-4" />
                irshadmd039@gmail.com
              </Button>
              <Button
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 px-6 py-3 rounded-full bg-transparent"
                onClick={() => window.open("tel:+919911561608")}
              >
                <Phone className="mr-2 h-4 w-4" />
                +91 9911561608
              </Button>
              <Button
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 px-6 py-3 rounded-full bg-transparent"
                onClick={() => window.open("https://linkedin.com/in/iamirshad")}
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 px-6 py-3 rounded-full bg-transparent"
                onClick={() => window.open("https://github.com/irshadmd")}
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/40">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2025 Md Irshad. Crafted with passion and cutting-edge technology.</p>
        </div>
      </footer>
    </div>
  )
}
