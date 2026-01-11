const Footer = () => {
    return (
        <footer className="bg-dark-900 py-8 border-t border-dark-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-gray-500">
                    © {new Date().getFullYear()} Shishir Subedi. All rights reserved.
                </p>
                <p className="text-gray-600 text-sm mt-2">
                    Built with React, Tailwind, and a touch of AI magic.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
