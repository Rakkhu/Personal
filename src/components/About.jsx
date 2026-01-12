import { motion } from 'framer-motion';
import { portfolioData } from '../portfolio';

const About = () => {
    const { about } = portfolioData;

    return (
        <section id="about" className="py-20 bg-dark-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-pink mb-6 inline-block">
                            {about.heading}
                        </h2>
                        <h3 className="text-2xl text-white font-semibold mb-4">
                            {about.subheading}
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            {about.bioPrimary}
                        </p>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            {about.bioSecondary}
                        </p>

                        <div>
                            <h4 className="text-white font-medium mb-4">Technical Arsenal</h4>
                            <div className="flex flex-wrap gap-2">
                                {about.skills.map((skill, index) => (
                                    <span key={index} className="px-3 py-1 rounded-full text-xs font-medium bg-dark-800 text-neon-cyan border border-dark-700">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        {/* Placeholder for actual image - using a gradient box for now */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative rounded-2xl bg-dark-800 p-1 ring-1 ring-white/10 h-96 flex items-center justify-center overflow-hidden">
                            <span className="text-gray-600 text-lg">Profile Image Placeholder</span>
                            {/* <img src="/path-to-image.jpg" alt="Shishir Subedi" className="object-cover w-full h-full rounded-xl" /> */}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
