import { motion } from "framer-motion";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useState, useEffect } from "react";

const Hero = () => {
  const roles = [
    "Full-Stack Developer",
    "Web Developer",
    "Computer Science Engineer",
    "AI Engineer",
    "Data Analyst",
  ];
  
  const typedText = useTypewriter(roles);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            {greeting}, I'm{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Your Name
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            A passionate{" "}
            <span className="text-primary font-medium">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>{" "}
            crafting beautiful digital experiences
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
