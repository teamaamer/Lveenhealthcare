import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Heart } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Who We Serve', path: '/who-we-serve' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-charcoal-900/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-center lg:justify-between h-36 md:h-44">
            <Link to="/" className="flex items-center justify-center group">
              <img 
                src="/logo.png" 
                alt="Laveen Home Health Logo" 
                className="h-28 md:h-36 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors relative group ${
                    location.pathname === link.path
                      ? 'text-white'
                      : 'text-white hover:text-burgundy-200'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-burgundy-600 transition-all ${
                      location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+16142191781"
                className="flex items-center space-x-2 text-white hover:text-burgundy-200 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">(614) 219-1781</span>
              </a>
              <Link to="/contact" className="btn-primary">
                Book Assessment
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-burgundy-200 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-charcoal-900/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl overflow-y-auto">
              <div className="p-8 pt-28">
                <div className="space-y-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        className={`block text-lg font-semibold transition-colors ${
                          location.pathname === link.path
                            ? 'text-burgundy-600'
                            : 'text-charcoal-700 hover:text-burgundy-600'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 space-y-4">
                  <a
                    href="tel:+16142191781"
                    className="flex items-center space-x-3 text-burgundy-600 hover:text-burgundy-700 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold text-lg">(614) 219-1781</span>
                  </a>
                  <Link to="/contact" className="btn-primary w-full text-center block">
                    Book Assessment
                  </Link>
                </div>

                <div className="mt-12 pt-8 border-t border-ivory-200">
                  <p className="text-sm text-charcoal-500 mb-2">Languages We Speak:</p>
                  <div className="flex flex-wrap gap-2">
                    {['English', 'Arabic', 'Spanish'].map((lang) => (
                      <span
                        key={lang}
                        className="px-3 py-1 bg-burgundy-50 text-burgundy-700 rounded-full text-sm font-medium"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
