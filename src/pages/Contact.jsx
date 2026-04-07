import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Heart,
  Globe,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    urgency: '',
    message: '',
  })

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Support',
      details: ['(614) 219-1781', 'Mon-Fri: 10am-4pm'],
      link: 'tel:+16142191781',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['laveenhealthcare@gmail.com', 'We respond within 24 hours'],
      link: 'mailto:laveenhealthcare@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: ['3602 Main Street', 'Hilliard, Ohio, 43026'],
      link: 'https://maps.google.com',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8am - 6pm', 'Saturday: 9am - 3pm'],
      link: null,
    },
  ]

  const services = [
    'Skilled Nursing Care',
    'Physical Therapy',
    'Personal Care Assistance',
    'Post-Hospital Care',
    'Companionship',
    'Respite Care',
    'Other / Not Sure',
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <Helmet>
        <title>Contact Us - Schedule Your Free Assessment | Laveen Home Health</title>
        <meta
          name="description"
          content="Contact Laveen Home Health Agency for a free consultation. Call (614) 219-1781 or schedule an assessment. Serving Hilliard, Ohio with professional support."
        />
        <meta
          name="keywords"
          content="contact home health agency, schedule home care, free assessment, Phoenix home health, home care consultation"
        />
      </Helmet>

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-ivory-50 via-white to-burgundy-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjQjg0NDQ0IiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-6 py-2 bg-burgundy-50 text-burgundy-700 rounded-full text-sm font-semibold mb-6">
              Get in Touch
            </span>
            <h1 className="heading-xl mb-8">
              Let's Start Your{' '}
              <span className="text-gradient">Care Journey</span>
            </h1>
            <p className="text-xl text-charcoal-600 leading-relaxed">
              We're here to answer your questions, address your concerns, and help you find the perfect care solution for you or your loved one.
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                variants={fadeInUp}
                className="card-premium p-8 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-burgundy-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-8 h-8 text-burgundy-600" />
                </div>
                <h3 className="text-lg font-display font-semibold text-charcoal-800 mb-4">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block space-y-1 text-charcoal-600 hover:text-burgundy-600 transition-colors"
                  >
                    {info.details.map((detail, i) => (
                      <p key={i} className={i === 0 ? 'font-semibold' : 'text-sm'}>
                        {detail}
                      </p>
                    ))}
                  </a>
                ) : (
                  <div className="space-y-1 text-charcoal-600">
                    {info.details.map((detail, i) => (
                      <p key={i} className={i === 0 ? 'font-semibold' : 'text-sm'}>
                        {detail}
                      </p>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={fadeInUp}
            >
              <h2 className="heading-md mb-6">Send Us a Message</h2>
              <p className="text-lg text-charcoal-600 mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you as soon as possible. For urgent matters, please call us directly at{' '}
                <a href="tel:+16142191781" className="text-burgundy-600 font-semibold hover:text-burgundy-700">
                  (614) 219-1781
                </a>
                .
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-charcoal-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-200 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-charcoal-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-200 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-charcoal-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-200 outline-none transition-all"
                      placeholder="(614) 219-1781"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-charcoal-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-200 outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="urgency" className="block text-sm font-semibold text-charcoal-700 mb-2">
                    How Soon Do You Need Care? *
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    required
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-200 outline-none transition-all"
                  >
                    <option value="">Select timeframe</option>
                    <option value="urgent">Immediately / Urgent</option>
                    <option value="week">Within a week</option>
                    <option value="month">Within a month</option>
                    <option value="planning">Just planning ahead</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-charcoal-700 mb-2">
                    Tell Us About Your Needs
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-200 outline-none transition-all resize-none"
                    placeholder="Please share any specific needs, concerns, or questions you have..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full text-lg">
                  <Send className="inline-block mr-2 w-5 h-5" />
                  Send Message
                </button>

                <p className="text-sm text-charcoal-500 text-center">
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div className="card-premium p-8">
                <MessageCircle className="w-12 h-12 text-burgundy-600 mb-6" />
                <h3 className="text-2xl font-display font-semibold text-charcoal-800 mb-4">
                  What Happens Next?
                </h3>
                <ul className="space-y-4 text-charcoal-600">
                  <li className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-burgundy-100 text-burgundy-700 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                      1
                    </span>
                    <span>We'll contact you within 24 hours to discuss your needs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-burgundy-100 text-burgundy-700 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                      2
                    </span>
                    <span>Schedule a free in-home assessment at your convenience</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-burgundy-100 text-burgundy-700 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                      3
                    </span>
                    <span>Create a personalized care plan tailored to your situation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-burgundy-100 text-burgundy-700 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                      4
                    </span>
                    <span>Match you with the perfect caregiver for your needs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-burgundy-100 text-burgundy-700 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                      5
                    </span>
                    <span>Begin compassionate care with ongoing support</span>
                  </li>
                </ul>
              </div>

              <div className="card-premium p-8 bg-gradient-to-br from-burgundy-600 to-burgundy-800 text-white">
                <Globe className="w-12 h-12 mb-6 text-burgundy-200" />
                <h3 className="text-2xl font-display font-semibold mb-4">
                  Multilingual Support
                </h3>
                <p className="text-burgundy-100 mb-6 leading-relaxed">
                  We provide care and communication in multiple languages to ensure comfort and understanding.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['English', 'Arabic', 'Spanish'].map((lang) => (
                    <span
                      key={lang}
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card-premium p-8 bg-burgundy-50">
                <Heart className="w-12 h-12 text-burgundy-600 mb-6" fill="currentColor" />
                <h3 className="text-2xl font-display font-semibold text-charcoal-800 mb-4">
                  Emergency Care Needed?
                </h3>
                <p className="text-charcoal-600 mb-6 leading-relaxed">
                  If you need immediate assistance or have an urgent care situation, please call us right away.
                </p>
                <a href="tel:+16142191781" className="btn-primary w-full text-center block">
                  <Phone className="inline-block mr-2 w-5 h-5" />
                  Call Now: (614) 219-1781
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-ivory-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6">Find Us</h2>
              <p className="text-xl text-charcoal-600">
                Visit our office or schedule a home assessment in your area.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={fadeInUp}
              className="aspect-video bg-charcoal-200 rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-burgundy-100 to-burgundy-200">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-burgundy-600 mx-auto mb-4" />
                  <p className="text-charcoal-700 font-semibold">Map Integration</p>
                  <p className="text-sm text-charcoal-600">3602 Main Street, Hilliard, Ohio, 43026</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
