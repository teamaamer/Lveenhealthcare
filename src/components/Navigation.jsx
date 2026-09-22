import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }
    handleScroll()
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
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b transition-shadow duration-300 ${
          isScrolled ? 'shadow-md border-transparent' : 'shadow-sm border-ivory-200'
        }`}
      >
        <div className="container-custom">
          <div className="grid grid-cols-2 xl:grid-cols-[auto_1fr_auto] items-center gap-4 h-20 md:h-24">
            <Link to="/" className="flex items-center py-2">
              <img
                src="/logo1.png"
                alt="Laveen Home Health Agency Logo"
                className="h-14 md:h-16 w-auto object-contain"
              />
            </Link>

            <div className="hidden xl:flex items-center justify-center space-x-7">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[15px] font-semibold tracking-wide transition-colors relative py-2 ${
                    location.pathname === link.path
                      ? 'text-burgundy-600'
                      : 'text-charcoal-700 hover:text-burgundy-600'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 bg-burgundy-600 rounded-full transition-all duration-300 ${
                      location.pathname === link.path ? 'w-full' : 'w-0'
                    }`}
                  />
                </Link>
              ))}
            </div>

            <div className="hidden xl:flex items-center justify-end space-x-6">
              <a
                href="tel:+16142191781"
                className="flex items-center space-x-2 text-navy-700 hover:text-burgundy-600 transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="font-semibold whitespace-nowrap">(614) 219-1781</span>
              </a>
              <Link to="/contact" className="btn-primary !px-6 !py-3 whitespace-nowrap">
                Book Assessment
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="xl:hidden justify-self-end p-2 text-charcoal-800 hover:text-burgundy-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 xl:hidden"
          >
            <div className="absolute inset-0 bg-charcoal-900/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto">
              <div className="p-8 pt-28">
                <div className="space-y-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06 }}
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
                    className="flex items-center space-x-3 text-navy-700 hover:text-burgundy-600 transition-colors"
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
