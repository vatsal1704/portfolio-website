import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profileImg from "@/assets/profile.jpg";
import { useDirectionalShadow } from "@/hooks/useDirectionalShadow";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { shadowStyle, elementRef } = useDirectionalShadow();

  return (
    <section id="about" className="py-12 md:py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Column */}
          <motion.div
            ref={elementRef}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={shadowStyle}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden transition-all duration-300">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 mix-blend-multiply" />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate developer with a keen eye for design and a love
              for creating seamless user experiences. With expertise in modern
              web technologies, I bring ideas to life through clean code and
              thoughtful design.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source, or enjoying a good cup of coffee
              while reading about the latest in web development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
