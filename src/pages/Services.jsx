import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import {
  Stethoscope,
  Activity,
  Heart,
  Pill,
  ClipboardCheck,
  Home,
  Utensils,
  Bath,
  Users,
  ShoppingBag,
  FileText,
  Sparkles,
  ArrowRight,
  Phone,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

export default function Services() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const skilledServices = [
    {
      icon: Stethoscope,
      title: 'Registered Nurse (RN)',
      description: 'Expert nursing care including wound care, IV therapy, injections, and complex medical management by licensed registered nurses.',
    },
    {
      icon: Heart,
      title: 'Licensed Practical Nurse (LPN)',
      description: 'Professional nursing support for medication administration, vital sign monitoring, and daily health assessments.',
    },
    {
      icon: ClipboardCheck,
      title: 'Certified Home Health Aides',
      description: 'Trained aides providing personal care assistance, mobility support, and daily living activities under nursing supervision.',
    },
    {
      icon: Activity,
      title: 'Physical Therapy',
      description: 'Licensed physical therapists helping restore strength, mobility, balance, and independence through personalized rehabilitation programs.',
    },
    {
      icon: Pill,
      title: 'Medication Management',
      description: 'Safe medication administration, education, and monitoring to ensure proper dosing and prevent adverse interactions.',
    },
    {
      icon: FileText,
      title: 'Health Assessment & Monitoring',
      description: 'Regular health evaluations, vital sign tracking, and early detection of changes in condition to prevent complications.',
    },
    {
      icon: Sparkles,
      title: 'Disease Management',
      description: 'Specialized care for chronic conditions including diabetes, heart disease, COPD, and other ongoing health challenges.',
    },
    {
      icon: Home,
      title: 'Post-Hospital Care',
      description: 'Seamless transition from hospital to home with coordinated care, follow-up, and recovery support to prevent readmission.',
    },
  ]

  const nonSkilledServices = [
    {
      icon: Utensils,
      title: 'Meal Preparation & Planning',
      description: 'Nutritious meal planning and preparation tailored to dietary needs, preferences, and cultural traditions.',
    },
    {
      icon: Bath,
      title: 'Hygiene Assistance',
      description: 'Respectful support with bathing, grooming, dressing, and personal care to maintain dignity and comfort.',
    },
    {
      icon: Home,
      title: 'Housekeeping Assistance',
      description: 'Light housekeeping including laundry, tidying, and maintaining a clean, safe living environment.',
    },
    {
      icon: Users,
      title: 'Companionship',
      description: 'Meaningful social interaction, conversation, activities, and emotional support to combat loneliness and isolation.',
    },
    {
      icon: ShoppingBag,
      title: 'Errands & Transportation',
      description: 'Assistance with grocery shopping, pharmacy pickups, appointment transportation, and other essential errands.',
    },
    {
      icon: FileText,
      title: 'Family Status Reporting',
      description: 'Regular updates to family members about daily activities, health status, and any concerns or changes.',
    },
  ]

  const personalizedFeatures = [
    'Custom care schedules from a few hours to 24/7',
    'Culturally sensitive care in English, Arabic, and Spanish',
    'Flexible service combinations based on changing needs',
    'Coordination with physicians and specialists',
    'Respite care for family caregivers',
    'Emergency response and backup coverage',
  ]

  return (
    <>
      <Helmet>
        <title>Home Healthcare Services - Skilled & Non-Skilled Care | Laveen</title>
        <meta
          name="description"
          content="Comprehensive home healthcare services including skilled nursing, physical therapy, personal care, and companionship. Personalized care plans in Phoenix, AZ."
        />
        <meta
          name="keywords"
          content="home health services, skilled nursing, physical therapy at home, personal care, companionship, post-hospital care, medication management, home health aide"
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
              Comprehensive Care Solutions
            </span>
            <h1 className="heading-xl mb-8">
              Professional Healthcare{' '}
              <span className="text-gradient">Delivered at Home</span>
            </h1>
            <p className="text-xl text-charcoal-600 leading-relaxed">
              From skilled medical care to compassionate personal assistance, we provide the full spectrum of home healthcare services tailored to your unique needs.
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Skilled Healthcare Services</h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Licensed medical professionals providing expert clinical care in the comfort and safety of your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skilledServices.map((service, index) => (
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
                <p className="text-charcoal-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-ivory-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Non-Skilled Personal Care Services</h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Compassionate assistance with daily activities to help maintain independence, comfort, and quality of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonSkilledServices.map((service, index) => (
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
                <p className="text-charcoal-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
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
                Personalized Care Programs
              </h2>
              <p className="text-xl text-burgundy-100 mb-8 leading-relaxed">
                Every individual has unique needs, preferences, and circumstances. That's why we don't offer one-size-fits-all packages. Instead, we create custom care plans designed specifically for you.
              </p>
              <p className="text-lg text-burgundy-100 leading-relaxed">
                Whether you need a few hours of assistance per week or comprehensive 24/7 care, we'll build a program that fits your lifestyle, budget, and health requirements.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              variants={fadeInUp}
              className="space-y-4"
            >
              {personalizedFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <ArrowRight className="w-6 h-6 text-burgundy-200 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-white">{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-ivory-50 to-burgundy-50/30 rounded-3xl shadow-xl p-12 md:p-16 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={fadeInUp}
            >
              <Heart className="w-20 h-20 text-burgundy-600 mx-auto mb-8" />
              <h2 className="heading-md mb-6">
                Let's Create Your Personalized Care Plan
              </h2>
              <p className="text-xl text-charcoal-600 mb-10 leading-relaxed">
                Schedule a free consultation to discuss your needs, ask questions, and learn how we can help you or your loved one thrive at home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary text-lg">
                  Book Free Assessment
                </Link>
                <a href="tel:+16142191781" className="btn-secondary text-lg">
                  <Phone className="inline-block mr-2 w-5 h-5" />
                  (614) 219-1781
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
