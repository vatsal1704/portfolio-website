import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Palette, Server, Smartphone, Globe } from "lucide-react";
import { useDirectionalShadow } from "@/hooks/useDirectionalShadow";

const SkillCard = ({ skill, index, isInView }: any) => {
  const { shadowStyle, elementRef } = useDirectionalShadow();
  
  return (
    <motion.div
      ref={elementRef}
      key={skill.name}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.4, ease: "easeOut" } }}
      style={shadowStyle}
      className="bg-background rounded-2xl p-6 shadow-soft transition-all duration-300 ease-out group cursor-pointer"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          <skill.icon size={24} />
        </div>
        <h3 className="text-xl font-semibold mt-2">{skill.name}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skill.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      name: "Frontend Development",
      icon: Code2,
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
      name: "Backend Development",
      icon: Server,
      technologies: ["Node.js", "Express", "REST APIs", "GraphQL"],
    },
    {
      name: "Database",
      icon: Database,
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      technologies: ["Figma", "Adobe XD", "Framer", "Responsive Design"],
    },
    {
      name: "Mobile Development",
      icon: Smartphone,
      technologies: ["React Native", "PWA", "Flutter", "iOS/Android"],
    },
    {
      name: "Web Technologies",
      icon: Globe,
      technologies: ["HTML5", "CSS3", "JavaScript", "Web APIs"],
    },
  ];

  return (
    <section id="skills" className="py-12 md:py-20 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
