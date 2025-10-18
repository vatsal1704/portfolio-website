import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      role: "Software Engineer",
      company: "Newgen Softwares",
      period: "Feb 2023 - Sept 2023",
      description:
        "Collaborated on client-facing web app features, enhancing user experience and satisfaction. Developed responsive front-end interfaces using HTML, CSS, JavaScript.",
      achievements: [
        "Debugged and resolved software defects, ensuring prompt issue resolution",
        "Participated in code reviews, maintaining coding standards and efficiency",
        "Worked on products of Newgen",
      ],
    },
    {
      role: "Marketing Intern",
      company: "WeSettle",
      period: "Jun 2020 - Aug 2020",
      description:
        "Contributed to UI/UX enhancements to improve overall user experience and interface design. Assisted in front-end development tasks, ensuring responsive and user-friendly features.",
      achievements: [
        "Conducted app testing and debugging to identify and resolve usability issues",
        "Collaborated with the team to support product improvements and feature rollout",
      ],
    },
  ];

  return (
    <section id="experience" className="py-12 md:py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Work Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[15px] top-[40px] bottom-0 w-[2px] bg-border" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-soft">
                <Briefcase size={16} className="text-primary-foreground" />
              </div>

              {/* Content */}
              <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-hover transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-muted-foreground font-medium mt-1 md:mt-0">
                    {exp.period}
                  </span>
                </div>

                <p className="text-primary font-medium mb-3">{exp.company}</p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
