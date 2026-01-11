import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: "Software Engineer",
            company: "Various Tech Companies",
            period: "2019 - Present",
            description: "Led development of scalable web applications. Managed full operational cycle from requirement gathering to production deployment. Specialized in Python/Django backends and React frontends."
        },
        {
            title: "Freelance Developer",
            company: "Self-Employed",
            period: "2018 - Present",
            description: "Developed custom web solutions using Python and Django. Built RESTful APIs using Django REST Framework. Implemented web scraping and data parsing solutions for international clients."
        },
        {
            title: "Part-time Lecturer",
            company: "IOE Pulchowk Campus (and others)",
            period: "2020 - 2022",
            description: "Delivered lectures on Artificial Intelligence and Data Mining. Mentored students in their final year projects and guided them through practical implementations of machine learning algorithms."
        }
    ];

    return (
        <section id="experience" className="py-20 bg-dark-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Professional Experience</h2>
                    <div className="w-20 h-1 bg-neon-cyan mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-dark-700"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-neon-purple border-4 border-dark-900 z-10"></div>

                                <div className="w-full md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right">
                                    {index % 2 === 0 ? (
                                        <div className="md:pr-12 md:text-right">
                                            {/* Content for Right side (or left on mobile) */}
                                        </div>
                                    ) : null}
                                </div>

                                <div className={`w-full md:w-1/2 pl-8 md:pl-12 ${index % 2 === 0 ? 'md:pr-12 md:pl-0 md:text-right' : 'md:pl-12 md:text-left'}`}>
                                    <div className="bg-dark-900 p-6 rounded-xl border border-dark-700 hover:border-neon-purple transition-colors duration-300">
                                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                                        <h4 className="text-neon-cyan font-medium mb-3">{exp.company}</h4>
                                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-4 justify-start md:justify-start">
                                            <Calendar size={14} />
                                            <span>{exp.period}</span>
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
