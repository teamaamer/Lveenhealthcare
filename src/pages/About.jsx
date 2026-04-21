import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Heart, Shield, Users, Award, Target, Sparkles } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const values = [
    {
      icon: Heart,
      title: 'Compassion First',
      description: 'Every interaction is guided by empathy, kindness, and genuine care for the wellbeing of those we serve.',
    },
    {
      icon: Shield,
      title: 'Safety & Excellence',
      description: 'We maintain the highest standards of medical care, safety protocols, and professional excellence.',
    },
    {
      icon: Users,
      title: 'Family Partnership',
      description: 'We work closely with families, respecting their input and keeping them informed every step of the way.',
    },
    {
      icon: Award,
      title: 'Dignity & Respect',
      description: 'We honor the independence, preferences, and dignity of every individual in our care.',
    },
  ]

  const approach = [
    {
      title: 'Comprehensive Assessment',
      description: 'We begin with an in-depth evaluation of medical needs, lifestyle preferences, and family dynamics.',
    },
    {
      title: 'Personalized Care Plan',
      description: 'Every care plan is custom-designed around the individual, not a one-size-fits-all template.',
    },
    {
      title: 'Matched Caregivers',
      description: 'We carefully match caregivers based on skills, personality, language, and cultural compatibility.',
    },
    {
      title: 'Ongoing Communication',
      description: 'Regular updates, health monitoring, and open dialogue ensure peace of mind for families.',
    },
  ]

  return (
    <>
      <Helmet>
        <title>About Us - Laveen Home Health Agency | Our Mission & Values</title>
        <meta
          name="description"
          content="Learn about Laveen Home Health Agency's mission to provide compassionate, personalized home healthcare. Discover our values, approach, and commitment to excellence."
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
              Our Story
            </span>
            <h1 className="heading-xl mb-8">
              Caring for Your Loved Ones as{' '}
              <span className="text-gradient">Our Own</span>
            </h1>
            <p className="text-xl text-charcoal-600 leading-relaxed">
              At Laveen Home Health Agency, we believe that everyone deserves to age with dignity, recover with support, and live comfortably in the place they love most—home.
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={fadeInUp}
            >
              <h2 className="heading-lg mb-6">Our Mission</h2>
              <div className="space-y-6 text-lg text-charcoal-600 leading-relaxed">
                <p>
                  Founded in 2025, Laveen Home Health Agency was born from a simple yet profound belief: healthcare should be delivered with warmth, respect, and genuine human connection.
                </p>
                <p>
                  We've built our agency on the understanding that medical expertise alone isn't enough. True care requires listening, empathy, and a commitment to seeing the whole person—not just their diagnosis.
                </p>
                <p>
                  Today, we're proud to serve families throughout Phoenix and surrounding communities, providing skilled nursing, personal care, and therapeutic services that honor independence while ensuring safety and comfort.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-burgundy-100 to-burgundy-200 rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Heart className="w-32 h-32 text-burgundy-400/30" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-burgundy-600 rounded-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-ivory-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Our Core Values</h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every interaction we have with the families we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                variants={fadeInUp}
                className="card-premium p-8 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-burgundy-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-burgundy-600" />
                </div>
                <h3 className="text-xl font-display font-semibold text-charcoal-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Our Personalized Approach</h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              We don't believe in cookie-cutter care. Every individual and family is unique, and our approach reflects that.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {approach.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  variants={fadeInUp}
                  className="relative bg-gradient-to-br from-white to-ivory-50 rounded-2xl p-8 border border-ivory-200 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-burgundy-600 text-white rounded-xl flex items-center justify-center font-display font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-charcoal-800 mb-3 mt-2">
                    {step.title}
                  </h3>
                  <p className="text-charcoal-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
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
              <Sparkles className="w-16 h-16 mx-auto mb-8 text-burgundy-200" />
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Why In-Home Care Matters
              </h2>
              <div className="space-y-6 text-lg text-burgundy-100 leading-relaxed">
                <p>
                  Home is more than a place—it's where memories live, where comfort resides, and where healing happens best. Research shows that patients recover faster, maintain better mental health, and experience greater quality of life when they receive care at home.
                </p>
                <p>
                  At Laveen, we make it possible for individuals to remain in their cherished surroundings while receiving the professional medical care and personal support they need. It's healthcare that honors the whole person.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
