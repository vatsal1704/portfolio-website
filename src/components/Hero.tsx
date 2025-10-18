import { motion } from "framer-motion";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import codingAnimation from "@/assets/coding-animation.gif";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useState, useEffect } from "react";
import { useDirectionalShadow } from "@/hooks/useDirectionalShadow";

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
  const { shadowStyle, elementRef } = useDirectionalShadow();

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
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/80 backdrop-blur-sm">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
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
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8"
            >
              A passionate{" "}
              <span className="text-primary font-medium">
                {typedText}
                <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-[blink_1s_step-end_infinite]"></span>
              </span>{" "}
              crafting beautiful digital experiences
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
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
                <a href="https://drive.google.com/file/d/1cYhSDkP1VYDC0t6a5cxEmxGXSjCA7naP/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Animation/GIF - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:flex justify-center items-center"
          >
            <motion.div
              ref={elementRef}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={shadowStyle}
              className="relative transition-all duration-300 rounded-full"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
              <img
                src={codingAnimation}
                alt="Developer coding animation"
                className="relative z-10 w-full max-w-md mix-blend-screen opacity-90"
                style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
