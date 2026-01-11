import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-dark-800 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Interested in working together? Whether you have a project in mind or just want to discuss the latest in AI, feel free to reach out.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-dark-900 rounded-lg text-neon-cyan">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-medium text-lg">Email</h3>
                                <p className="text-gray-400">contact@shishirsubedi.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-dark-900 rounded-lg text-neon-purple">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-medium text-lg">Phone</h3>
                                <p className="text-gray-400">+977-98XXXXXXXX</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-dark-900 rounded-lg text-neon-pink">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-medium text-lg">Location</h3>
                                <p className="text-gray-400">Kathmandu, Nepal</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-dark-900 p-8 rounded-2xl border border-dark-700"
                    >
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input type="text" id="name" className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors" placeholder="Your Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input type="email" id="email" className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea id="message" rows="4" className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors" placeholder="How can I help you?"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
