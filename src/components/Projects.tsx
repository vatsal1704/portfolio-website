import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "./ui/card";
import { useDirectionalShadow } from "@/hooks/useDirectionalShadow";
import resumeAnalyzer from "@/assets/resume-analyzer.jpg";
import pdfChat from "@/assets/pdf-chat.jpg";
import netflixClone from "@/assets/netflix-clone.jpg";
import airlineSentiment from "@/assets/airline-sentiment.jpg";

const ProjectCard = ({ project, index, isInView }: any) => {
  const { shadowStyle, elementRef } = useDirectionalShadow();
  
  return (
    <motion.div
      ref={elementRef}
      key={project.title}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
      style={shadowStyle}
      className="rounded-2xl"
    >
      <Card className="group overflow-hidden bg-card transition-all duration-300 h-full cursor-pointer">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={18} />
              Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={18} />
              Demo
            </a>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "ResumeAnalyser.AI",
      description:
        "A GenAI-powered application that intelligently evaluates resumes against job descriptions with ATS scoring.",
      tags: ["Python", "Streamlit", "Gemini AI", "NLP"],
      github: "https://github.com/vatsal1704/ResumeAnalyser.AI",
      demo: "https://match-reusme-ai.streamlit.app/",
      image: resumeAnalyzer,
    },
    {
      title: "Chat with Multiple PDFs",
      description:
        "Upload multiple PDFs and interactively chat with them using Google's Gemini AI for contextual answers.",
      tags: ["Python", "Streamlit", "Gemini", "LangChain", "FAISS"],
      github: "https://github.com/vatsal1704/Chat-with-Multiple-PDFs-using-Gemini",
      demo: "https://github.com/vatsal1704/Chat-with-Multiple-PDFs-using-Gemini",
      image: pdfChat,
    },
    {
      title: "Netflix Clone",
      description:
        "A Netflix clone app with movie browsing powered by TMDB API, built with React and deployed on Firebase.",
      tags: ["React", "Firebase", "TMDB API"],
      github: "https://github.com/vatsal1704/netflix-clone",
      demo: "https://netflix-clone-c5f32.web.app/",
      image: netflixClone,
    },
    {
      title: "Airline Review Sentiment Analysis",
      description:
        "Analyze airline reviews to determine sentiment using NLP and machine learning techniques.",
      tags: ["Python", "NLP", "Machine Learning", "Streamlit"],
      github: "https://github.com/vatsal1704/Airline-Review-Sentiment-Analysis",
      demo: "https://airline-review-sentiment-analysis.streamlit.app/",
      image: airlineSentiment,
    },
  ];

  return (
    <section id="projects" className="py-12 md:py-20 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="https://github.com/vatsal1704?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
          >
            <Github size={20} />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
