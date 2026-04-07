import { Link } from 'react-router-dom'
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal-800 text-white">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6 bg-white px-4 py-3 rounded-lg inline-block">
              <img 
                src="/logo1.png" 
                alt="Laveen Home Health Logo" 
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-charcoal-300 mb-6 leading-relaxed">
              Providing compassionate, personalized home healthcare services with dignity, comfort, and professional excellence.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/laveencare/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-charcoal-700 rounded-full flex items-center justify-center hover:bg-burgundy-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/laveencare/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-charcoal-700 rounded-full flex items-center justify-center hover:bg-burgundy-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Who We Serve', path: '/who-we-serve' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-charcoal-300 hover:text-burgundy-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-charcoal-300">
              <li>Skilled Nursing Care</li>
              <li>Physical Therapy</li>
              <li>Personal Care Assistance</li>
              <li>Companionship</li>
              <li>Medication Management</li>
              <li>Post-Hospital Care</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-burgundy-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+16142191781" className="text-charcoal-300 hover:text-burgundy-400 transition-colors">
                    (614) 219-1781
                  </a>
                  <p className="text-sm text-charcoal-400">Mon-Fri: 10am-4pm</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-burgundy-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+16149379020" className="text-charcoal-300 hover:text-burgundy-400 transition-colors">
                    (614) 937-9020
                  </a>
                  <p className="text-sm text-charcoal-400">Alternative Line</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-burgundy-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:laveenhealthcare@gmail.com" className="text-charcoal-300 hover:text-burgundy-400 transition-colors">
                  laveenhealthcare@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-burgundy-400 mt-0.5 flex-shrink-0" />
                <address className="text-charcoal-300 not-italic">
                  3602 Main Street<br />
                  Hilliard, Ohio, 43026
                </address>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-charcoal-400 mb-2">Languages:</p>
              <div className="flex flex-wrap gap-2">
                {['English', 'Arabic', 'Spanish'].map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 bg-charcoal-700 text-charcoal-300 rounded-full text-xs"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-charcoal-400 text-sm">
              © {new Date().getFullYear()} Laveen Home Health Agency. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-charcoal-400">
              <a href="#" className="hover:text-burgundy-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-burgundy-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-burgundy-400 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
