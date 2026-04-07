import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import {
  Users,
  Heart,
  Activity,
  Shield,
  Home,
  Sparkles,
  Phone,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

export default function WhoWeServe() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const audiences = [
    {
      icon: Users,
      title: 'Seniors & Elderly Adults',
      description: 'Compassionate support for aging loved ones who want to maintain independence while receiving the care they need.',
      needs: [
        'Daily living assistance and companionship',
        'Medication management and health monitoring',
        'Fall prevention and mobility support',
        'Meal preparation and nutritional guidance',
        'Transportation to appointments',
        'Memory care and cognitive support',
      ],
    },
    {
      icon: Activity,
      title: 'Post-Surgery & Recovery Patients',
      description: 'Specialized care for individuals recovering from surgery, illness, or hospitalization who need professional support at home.',
      needs: [
        'Post-operative wound care and monitoring',
        'Physical therapy and rehabilitation',
        'Pain management and medication support',
        'Mobility assistance and safety',
        'Coordination with medical team',
        'Gradual return to independence',
      ],
    },
    {
      icon: Heart,
      title: 'Individuals with Chronic Conditions',
      description: 'Expert disease management and ongoing support for those living with diabetes, heart disease, COPD, and other chronic illnesses.',
      needs: [
        'Disease-specific care and education',
        'Symptom monitoring and management',
        'Medication adherence support',
        'Lifestyle and dietary guidance',
        'Prevention of complications',
        'Regular health assessments',
      ],
    },
    {
      icon: Shield,
      title: 'Adults & Children with Disabilities',
      description: 'Respectful, personalized care for individuals with physical, developmental, or cognitive disabilities.',
      needs: [
        'Assistance with activities of daily living',
        'Specialized care for unique needs',
        'Therapeutic support and engagement',
        'Family respite and support',
        'Community integration assistance',
        'Advocacy and coordination of services',
      ],
    },
    {
      icon: Home,
      title: 'Families Needing Respite Care',
      description: 'Temporary relief for family caregivers who need a break while ensuring their loved one receives quality care.',
      needs: [
        'Short-term or scheduled respite',
        'Overnight and weekend care',
        'Vacation coverage for families',
        'Emergency backup support',
        'Peace of mind for caregivers',
        'Consistent, trusted care',
      ],
    },
    {
      icon: Sparkles,
      title: 'Anyone Preferring Home-Based Care',
      description: 'For those who simply prefer the comfort, familiarity, and dignity of receiving care in their own home.',
      needs: [
        'Personalized care in familiar surroundings',
        'Maintenance of daily routines',
        'Privacy and independence',
        'Family involvement in care',
        'Reduced stress and anxiety',
        'Better quality of life',
      ],
    },
  ]

  return (
    <>
      <Helmet>
        <title>Who We Serve - Home Healthcare for Seniors, Recovery & More | Laveen</title>
        <meta
          name="description"
          content="Laveen Home Health serves seniors, post-surgery patients, individuals with chronic conditions, disabilities, and families needing compassionate home care in Phoenix, AZ."
        />
        <meta
          name="keywords"
          content="elderly care, senior home care, post-surgery care, chronic disease management, disability care, respite care, home health patients"
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
              Our Community
            </span>
            <h1 className="heading-xl mb-8">
              Care Designed for{' '}
              <span className="text-gradient">Your Unique Journey</span>
            </h1>
            <p className="text-xl text-charcoal-600 leading-relaxed">
              Whether you're navigating aging, recovering from illness, managing a chronic condition, or simply need support at home, we're here with compassion and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {audiences.map((audience, index) => (
              <motion.div
                key={audience.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={fadeInUp}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-20 h-20 bg-burgundy-50 rounded-2xl flex items-center justify-center mb-6">
                    <audience.icon className="w-10 h-10 text-burgundy-600" />
                  </div>
                  <h2 className="heading-md mb-4">{audience.title}</h2>
                  <p className="text-xl text-charcoal-600 mb-8 leading-relaxed">
                    {audience.description}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-burgundy-600 font-semibold hover:text-burgundy-700 text-lg"
                  >
                    Discuss Your Needs
                    <Phone className="ml-2 w-5 h-5" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="card-premium p-8">
                    <h3 className="text-lg font-display font-semibold text-charcoal-800 mb-6">
                      How We Help:
                    </h3>
                    <ul className="space-y-4">
                      {audience.needs.map((need, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <Heart className="w-5 h-5 text-burgundy-600 flex-shrink-0 mt-0.5" />
                          <span className="text-charcoal-700">{need}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-gradient-to-br from-burgundy-600 to-burgundy-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={fadeInUp}
            >
              <Heart className="w-20 h-20 mx-auto mb-8 text-burgundy-200" fill="currentColor" />
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Not Sure If We're Right for You?
              </h2>
              <p className="text-xl text-burgundy-100 mb-10 leading-relaxed">
                Every situation is unique. Let's talk about your specific needs, concerns, and goals. We'll help you understand your options and determine if home healthcare is the right choice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-secondary text-lg">
                  Schedule a Consultation
                </Link>
                <a href="tel:+16142191781" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-300 text-lg">
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
