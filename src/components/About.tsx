import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Brain, Code2, Trophy, Zap, Users } from 'lucide-react';

const highlights = [
  {
    icon: TrendingUp,
    title: 'Data Analytics',
    description: 'Transforming raw data into actionable insights through EDA, statistical modeling, and visualization.',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Building predictive models, ML pipelines, and deploying intelligent systems.',
  },
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code that stands the test of time',
  },
  {
    icon: Trophy,
    title: 'Problem Solver',
    description: 'Breaking down complex problems into scalable, efficient solutions.',
  },
  {
    icon: Zap,
    title: 'AI Agent Developer',
    description: 'Designing and deploying AI agents & automations using n8n and RAG workflows to connect knowledge, LLMs, and business systems for automated decisioning.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively with cross-functional teams to deliver exceptional results',
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Crafting data-driven solutions & intelligent systems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="font-display text-xl font-semibold mb-4 gradient-text">Background</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am an AI & Data Science undergraduate with hands-on experience in building real-world, end-to-end applications that combine data, logic, and intelligent systems. My journey has been driven by a strong interest in understanding how data can be transformed into meaningful insights and practical solutions. Through academic projects, hackathons, and self-driven development, I have worked across the application lifecycle—designing backend services, integrating APIs, working with databases, and developing responsive web and mobile interfaces.
              </p>
              <p>
                Over time, my focus has expanded toward applied AI, including sentiment analysis systems, chatbot platforms, and automation-driven applications using modern frameworks and tools such as Python, FastAPI, Node.js, Flutter, React, and MongoDB. I enjoy building systems that are not just technically correct, but also useful, scalable, and user-focused.
              </p>
              <p>
                What motivates me most is solving problems that don’t have straightforward answers. My experience in competitive problem-solving, hackathons, and student leadership has shaped the way I think—breaking down complex challenges, experimenting with solutions, and iterating quickly. Whether I am developing an AI-driven feature, optimizing backend logic, or leading a team as a student representative, I aim to create solutions that are reliable, efficient, and impactful.
              </p>
              <p>
                I am driven by continuous learning, innovation, and real-world impact, with a long-term goal of contributing to advanced AI systems and data-driven decision-making at a global scale.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
