const navItems = [
  { id: 1, name: "Home", url: "home" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Process", url: "process" },
  { id: 4, name: "Portfolio", url: "portfolio" },
  { id: 5, name: "Blog", url: "blog" },
  { id: 6, name: "Services", url: "services" },
  { id: 7, name: "Contact", url: "contact" },
];

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Mom <span className="text-blue-500">Rotha</span>
            </h2>
            <p className="text-sm text-neutral-400 mt-3 max-w-xs">
              Frontend Developer focused on building modern, responsive, and
              user-friendly web applications.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:text-center">
            <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
              Navigation
            </h3>
            <ul className="flex flex-wrap justify-start md:justify-center gap-4 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.url}`}
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Contact */}
          <div className="md:text-right">
            <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
              Connect
            </h3>
            <div className="flex md:justify-end gap-4 text-neutral-400">
              <a
                href="https://github.com/momrotha" target="_blank" rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rotha-mom-266a512ba/" target="_blank" rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:rothamom22@gmail.com"
                className="hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 gap-4">
          <p>
            © {copyrightYear} Mom Rotha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
