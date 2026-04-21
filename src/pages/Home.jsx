import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import {
  Heart,
  Shield,
  Users,
  Clock,
  Phone,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  Home as HomeIcon,
  Activity,
  Globe,
  Award,
  Star,
  Smile,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

export default function Home() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch(err => {
        console.log('Video autoplay failed:', err)
      })
    }
  }, [])
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const services = [
    {
      icon: Stethoscope,
      title: 'Skilled Nursing Care',
      description: 'Licensed nurses providing expert medical care, wound care, and health monitoring in your home.',
    },
    {
      icon: Activity,
      title: 'Physical Therapy',
      description: 'Professional rehabilitation services to help you recover strength, mobility, and independence.',
    },
    {
      icon: Smile,
      title: 'Personal Care',
      description: 'Compassionate assistance with daily activities, hygiene, meal preparation, and companionship.',
    },
    {
      icon: Heart,
      title: 'Post-Hospital Care',
      description: 'Seamless transition from hospital to home with specialized recovery support and monitoring.',
    },
  ]

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Licensed & Certified',
      description: 'All caregivers are thoroughly vetted, licensed, and continuously trained.',
    },
    {
      icon: Heart,
      title: 'Personalized Care Plans',
      description: 'Custom care programs designed around your unique needs and preferences.',
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock support and emergency response whenever you need us.',
    },
    {
      icon: Globe,
      title: 'Multilingual Care',
      description: 'Services available in English, Arabic, and Spanish for your comfort.',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Daughter of Client',
      content: 'The care my mother receives from Laveen has been nothing short of exceptional. The nurses are professional, kind, and truly care about her wellbeing. We finally have peace of mind.',
      rating: 5,
    },
    {
      name: 'Robert Chen',
      role: 'Family Caregiver',
      content: 'After my father\'s surgery, Laveen\'s team provided incredible support during his recovery. Their physical therapist was patient and encouraging. Highly recommend their services.',
      rating: 5,
    },
    {
      name: 'Maria Rodriguez',
      role: 'Client',
      content: 'I was hesitant about home care, but the team made me feel comfortable immediately. They respect my independence while providing the help I need. The Spanish-speaking staff is wonderful.',
      rating: 5,
    },
  ]

  const whoWeServe = [
    'Seniors needing daily assistance',
    'Post-surgery recovery patients',
    'Individuals with chronic conditions',
    'Families seeking respite care',
    'Adults with disabilities',
    'Those requiring skilled medical care at home',
  ]

  return (
    <>
      <Helmet>
        <title>Laveen Home Health Agency - Compassionate Home Healthcare Services</title>
        <meta
          name="description"
          content="Trusted home healthcare in Phoenix, AZ. Skilled nursing, personal care, physical therapy, and compassionate support in the comfort of your home. Available in English, Arabic, and Spanish."
        />
        <meta
          name="keywords"
          content="home health care, home healthcare Phoenix, skilled nursing at home, elderly care, post-hospital care, personal care services, home health agency Arizona"
        />
      </Helmet>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-charcoal-800 via-burgundy-900 to-charcoal-900">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.6 }}
        >
          <source src="/Untitled1.mov" type="video/quicktime" />
          <source src="/Untitled1.mov" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900/80 via-burgundy-900/60 to-charcoal-900/80"></div>
        
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container-custom relative z-10 pt-48 pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full text-sm font-semibold mb-6">
                Trusted Home Healthcare Since 2025
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="heading-xl mb-8 text-white drop-shadow-lg"
            >
              Compassionate Care in the{' '}
              <span className="text-burgundy-300">Comfort of Home</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-md"
            >
              Trusted home healthcare designed around your family. Skilled and non-skilled services delivered with dignity, warmth, and professional excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/contact" className="btn-primary text-lg">
                Book an Assessment
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <a href="tel:+16142191781" className="btn-secondary text-lg">
                <Phone className="inline-block mr-2 w-5 h-5" />
                Call Now
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-white"
            >
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <CheckCircle className="w-5 h-5 text-burgundy-300" />
                <span>Licensed & Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <CheckCircle className="w-5 h-5 text-burgundy-300" />
                <span>Mon-Fri: 10am-4pm</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <CheckCircle className="w-5 h-5 text-burgundy-300" />
                <span>Multilingual Care</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <AnimatedSection className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Our Home Healthcare Services</h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Comprehensive care solutions tailored to your unique needs, delivered by compassionate professionals in the comfort of your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                variants={fadeInUp}
                className="card-premium p-8 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-burgundy-50 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-burgundy-600" />
                </div>
                <h3 className="text-xl font-display font-semibold text-charcoal-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-charcoal-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="text-burgundy-600 font-semibold hover:text-burgundy-700 inline-flex items-center group"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-gradient-to-br from-burgundy-600 to-burgundy-800 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Why Families Choose Laveen Home Health
              </h2>
              <p className="text-xl text-burgundy-100 mb-8 leading-relaxed">
                We understand that inviting care into your home is a deeply personal decision. That's why we're committed to earning your trust every single day.
              </p>
              <Link to="/about" className="btn-secondary">
                Our Story
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  variants={fadeInUp}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-2">{item.title}</h3>
                  <p className="text-burgundy-100 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-ivory-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Who We Serve</h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Our compassionate care is designed for individuals and families navigating various health and life circumstances.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whoWeServe.map((item, index) => (
                <motion.div
                  key={item}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  variants={fadeInUp}
                  className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <CheckCircle className="w-6 h-6 text-burgundy-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-charcoal-700">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/who-we-serve" className="btn-primary">
                Learn More About Our Care
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">What Families Are Saying</h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              The trust families place in us is our greatest honor. Here's what they have to say about their experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                variants={fadeInUp}
                className="card-premium p-8"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-burgundy-500 fill-burgundy-500" />
                  ))}
                </div>
                <p className="text-charcoal-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-ivory-200 pt-4">
                  <p className="font-semibold text-charcoal-800">{testimonial.name}</p>
                  <p className="text-sm text-charcoal-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-gradient-to-br from-ivory-100 to-burgundy-50/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-12 md:p-16 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={fadeInUp}
            >
              <div className="w-20 h-20 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart className="w-10 h-10 text-burgundy-600" fill="currentColor" />
              </div>
              <h2 className="heading-md mb-6">
                Start Your Care Journey Today
              </h2>
              <p className="text-xl text-charcoal-600 mb-10 leading-relaxed">
                Let us help you or your loved one live comfortably, safely, and independently at home. Schedule a free assessment to discuss your unique needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary text-lg">
                  Book an Assessment
                </Link>
                <a href="tel:+16142191781" className="btn-secondary text-lg">
                  <Phone className="inline-block mr-2 w-5 h-5" />
                  (614) 219-1781
                </a>
              </div>
              <p className="mt-8 text-charcoal-500">
                Available 24/7 • English, Arabic, Spanish
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
