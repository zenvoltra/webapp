export default function Footer() {
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-gray-200 dark:border-gray-800/50 bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">ZenVoltra</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Independent development studio building digital products faster with our expert team.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>Web Applications</li>
              <li>Mobile Apps</li>
              <li>SaaS Platforms</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a href="#projects" className="hover:text-gray-900 dark:hover:text-white transition">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-900 dark:hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a href="mailto:hello.zenvoltra@gmail.com" className="hover:text-gray-900 dark:hover:text-white transition">
                  hello.zenvoltra@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918248413691" className="hover:text-gray-900 dark:hover:text-white transition">
                  +91 82484 13691
                </a>
              </li>
              <li className="text-xs text-gray-500 dark:text-gray-500">Fast response</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-500 text-sm">
          © 2026 ZenVoltra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
