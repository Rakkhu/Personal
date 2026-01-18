import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../portfolio';

const Hero = () => {
    const { hero, contact } = portfolioData;

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900 pt-20">

            {/* Background Animated Blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-neon-pink/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-dark-800 border border-dark-700 text-neon-cyan text-sm font-medium tracking-wide mb-6">
                        {hero.available}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">
                        {hero.title.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">{hero.title.split(' ').slice(1).join(' ')}</span>
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-light text-gray-400 mb-8">
                        {hero.subtitle}
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-400 max-w-2xl mb-10 text-lg leading-relaxed"
                >
                    {hero.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <a href="#contact" className="px-8 py-3 rounded-lg bg-neon-purple hover:bg-neon-purple/90 text-white font-semibold transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                        {hero.ctaPrimary}
                    </a>
                    <a href="#projects" className="px-8 py-3 rounded-lg bg-dark-800 border border-dark-700 hover:border-neon-cyan text-gray-300 hover:text-white transition-all">
                        {hero.ctaSecondary}
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-16 flex gap-6"
                >
                    <a href={contact.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                        <Github size={24} />
                    </a>
                    <a href={contact.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-cyan hover:scale-110 transition-all">
                        <Linkedin size={24} />
                    </a>
                    <a href={`mailto:${contact.email}`} className="text-gray-400 hover:text-neon-pink hover:scale-110 transition-all">
                        <Mail size={24} />
                    </a>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer text-gray-500 hover:text-white transition-colors"
            >
                <a href="#about">
                    <ArrowDown size={32} />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
