import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import { portfolioData } from '../portfolio';

const Projects = () => {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="py-20 bg-dark-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
                    <p className="text-gray-400">A selection of my recent work in Software Engineering and Data Science.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            className="bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-neon-cyan/50 group"
                        >
                            {/* Project Thumbnail Placeholder */}
                            <div className="h-48 bg-dark-700 relative overflow-hidden group-hover:bg-dark-900 transition-colors">
                                <div className="absolute inset-0 flex items-center justify-center text-dark-800 group-hover:text-neon-cyan/20 transition-colors">
                                    <Code size={64} />
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-2 py-1 text-xs rounded bg-dark-900 text-gray-300 border border-dark-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a href={project.links.github} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                        <Github size={16} /> Code
                                    </a>
                                    <a href={project.links.live} className="flex items-center gap-2 text-sm text-neon-purple hover:text-neon-pink transition-colors">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
