import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import {
  Heart,
  Users,
  Award,
  TrendingUp,
  Clock,
  DollarSign,
  GraduationCap,
  Briefcase,
  Send,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    license: '',
    message: '',
    resume: null,
  })

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Fair wages, performance bonuses, and comprehensive benefits package.',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Work schedules that respect your life outside of work.',
    },
    {
      icon: GraduationCap,
      title: 'Ongoing Training',
      description: 'Continuous education, certifications, and professional development.',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear advancement paths and opportunities for leadership roles.',
    },
    {
      icon: Users,
      title: 'Supportive Team',
      description: 'Collaborative environment with mentorship and peer support.',
    },
    {
      icon: Heart,
      title: 'Meaningful Work',
      description: 'Make a real difference in people\'s lives every single day.',
    },
  ]

  const positions = [
    'Registered Nurse (RN)',
    'Licensed Practical Nurse (LPN)',
    'Certified Home Health Aide',
    'Physical Therapist',
    'Occupational Therapist',
    'Personal Care Assistant',
    'Administrative Staff',
    'Other',
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
        <title>Careers - Join Our Compassionate Care Team | Laveen Home Health</title>
        <meta
          name="description"
          content="Join Laveen Home Health Agency. We're hiring compassionate nurses, therapists, and caregivers. Competitive pay, flexible schedules, and meaningful work in Phoenix, AZ."
        />
        <meta
          name="keywords"
          content="home health jobs, nursing jobs Phoenix, caregiver jobs, RN jobs, LPN jobs, physical therapist jobs, home health careers"
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
              Join Our Team
            </span>
            <h1 className="heading-xl mb-8">
              Build a Career That{' '}
              <span className="text-gradient">Truly Matters</span>
            </h1>
            <p className="text-xl text-charcoal-600 leading-relaxed">
              At Laveen Home Health, you're not just an employee—you're a valued member of a compassionate team dedicated to transforming lives through exceptional care.
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Why Join Laveen?</h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              We invest in our team because we know that happy, supported caregivers provide the best care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                variants={fadeInUp}
                className="card-premium p-8 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-burgundy-50 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-burgundy-600" />
                </div>
                <h3 className="text-xl font-display font-semibold text-charcoal-800 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  {benefit.description}
                </p>
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
              <Award className="w-20 h-20 mx-auto mb-8 text-burgundy-200" />
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Our Culture & Values
              </h2>
              <div className="space-y-6 text-lg text-burgundy-100 leading-relaxed">
                <p>
                  We believe in treating our team with the same respect, dignity, and compassion we expect them to show our clients. This means listening to your ideas, supporting your growth, and creating an environment where you feel valued.
                </p>
                <p>
                  Whether you're just starting your healthcare career or you're a seasoned professional, you'll find a welcoming team that celebrates diversity, encourages collaboration, and recognizes excellence.
                </p>
                <p className="text-xl font-semibold text-white">
                  We speak English, Arabic, and Spanish—and we celebrate the unique perspectives each team member brings.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-ivory-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6">Apply Today</h2>
              <p className="text-xl text-charcoal-600">
                Ready to make a difference? Submit your application and join our compassionate care team.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={fadeInUp}
              className="card-premium p-8 md:p-12"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                  <div>
                    <label htmlFor="position" className="block text-sm font-semibold text-charcoal-700 mb-2">
                      Position Applying For *
                    </label>
                    <select
                      id="position"
                      name="position"
                      required
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-200 outline-none transition-all"
                    >
                      <option value="">Select a position</option>
                      {positions.map((pos) => (
                        <option key={pos} value={pos}>
                          {pos}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-semibold text-charcoal-700 mb-2">
                      Years of Experience
                    </label>
                    <input
                      type="text"
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-200 outline-none transition-all"
                      placeholder="e.g., 5 years"
                    />
                  </div>

                  <div>
                    <label htmlFor="license" className="block text-sm font-semibold text-charcoal-700 mb-2">
                      License/Certification
                    </label>
                    <input
                      type="text"
                      id="license"
                      name="license"
                      value={formData.license}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-200 outline-none transition-all"
                      placeholder="e.g., RN License #12345"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-charcoal-700 mb-2">
                    Tell Us About Yourself
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-200 outline-none transition-all resize-none"
                    placeholder="Why do you want to join our team? What makes you passionate about home healthcare?"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-semibold text-charcoal-700 mb-2">
                    Upload Resume (PDF or Word)
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:border-burgundy-500 focus:ring-2 focus:ring-burgundy-200 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-burgundy-50 file:text-burgundy-700 file:font-semibold hover:file:bg-burgundy-100"
                  />
                </div>

                <button type="submit" className="btn-primary w-full text-lg">
                  <Send className="inline-block mr-2 w-5 h-5" />
                  Submit Application
                </button>

                <p className="text-sm text-charcoal-500 text-center">
                  By submitting this form, you agree to our privacy policy and consent to be contacted regarding your application.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
