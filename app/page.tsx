"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, Check, Star, ArrowRight } from "lucide-react"
import { LoginModal } from "@/components/login-modal"
import { SignupModal } from "@/components/ui/signup-modal"
import { HelpCenterDropdown } from "@/components/help-center-dropdown"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-12">
          <Image
            src="https://sjc.microlink.io/D_w2Wizvv2gNlWymsFwZvQ-vs-_Aa1-Kv8Dke5PflKaIkgHoHG9ZNuTeLBibfs3rD1g5KsiuTcZX8pFmv36jpw.jpeg"
            alt="ZipWP Logo"
            width={120}
            height={40}
            className="object-contain"
          />
          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-gray-800 hover:text-gray-600">
              Home
            </Link>
            <Link href="#" className="text-gray-800 hover:text-gray-600">
              About 
            </Link>
            <Link href="#" className="text-gray-800 hover:text-gray-600">
              For Hosts
            </Link>
            <Link href="#" className="text-gray-800 hover:text-gray-600">
              Contact Us
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-800 hover:text-gray-600">
                Help Center
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="border-[#ff4d4d] text-[#ff4d4d] hover:bg-[#ff4d4d] hover:text-white">
            Log In
          </Button>
          <Button className="bg-[#ff4d4d] hover:bg-[#ff3333] text-white">Sign Up</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-100 via-pink-300 to-pink-500 opacity-50" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#ff4d4d] font-semibold mb-6"
          >
            Skill Innovator: Connect. Learn. Inspire.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Build Connections, Share Skills, and Learn Together – 
            <br />
            
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Empowering Growth with Skill Innovator!
            <br />
            It's all free!!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button className="bg-gradient-to-r from-[#ff4d4d] to-[#ff8533] hover:opacity-90 text-white px-8 py-6 text-lg font-semibold">
            Join Skill Innovator Today
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Skill Innovator Matches the Talent, You Create the Impact!
            </h2>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Unlock Infinite Possibilities. Finish With Ease
              </h3>
              <Button className="bg-gradient-to-r from-[#ff4d4d] to-[#ff8533] hover:opacity-90 text-white px-8 py-6 text-lg font-semibold">
                Join Us Today!!
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              {["Personal Branding", "Service Providers", "Skilled Traders", "Restaurants", "Fitness and Wellness"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#ff4d4d]" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ),
              )}
            </div>
            <div className="space-y-4">
              {[
                "Technology Companies",
                "Healthcare Professionals",
                "Early Stage Startups",
                "Event Planners",
                "Personal Portfolio",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#ff4d4d]" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Skill Innovator Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Learn, Teach, and Collaborate in 3 Simple Steps!</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Create Your Profile",
                description: "Sign up and build your personalized profile by showcasing your skills, expertise, and learning goals.",
                step: "1",
              },
              {
                title: "Match and Connect",
                description: "Our intelligent system matches you with individuals offering or seeking the skills you're interested in. Connect with like-minded learners and experts.",
                step: "2",
              },
              {
                title: "Learn, Teach, and Track Progress",
                description: "Schedule sessions, share knowledge, and track your progress—all on one platform. Collaborate and grow with a community passionate about skill sharing!",
                step: "3",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <Card className="bg-white p-6 h-full">
                  <CardContent className="space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#ff4d4d] to-[#ff8533] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Learn, Teach, and Grow</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Powerful features to help you succeed in sharing and gaining skills online
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Skill Matching Algorithm",
                description: "Create stunning designs automatically tailored to your brandGet paired with the right mentors and learners tailored to your interests",
              },
              {
                title: "Interactive Learning Tools",
                description: "Engage with video calls, chat, and collaborative features for an immersive experienceRank higher in search results with built-in SEO tools",
              },
              {
                title: "Progress Tracking",
                description: "Monitor your journey as you learn new skills and help others grow",
              },
              {
                title: "Mobile-Friendly Platform",
                description: "Access your network and resources anytime, anywhere",
              },
              {
                title: "Secure Scheduling System",
                description: "Seamlessly book sessions and manage your learning calendar",
              },
              {
                title: "24/7 Support",
                description: "Expert support whenever you need assistance",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Empowering You to Learn, Teach, and Grow Like Never Before!</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "🚀 Smart Skill Matching", 
                comment:
                  "Our intelligent system connects you with the perfect mentors and learners based on your interests and expertise.",
              },
              {
                name: "🎥 Interactive Learning & Collaboration",
                comment:
                  "Engage in real-time learning through chat, video calls, and collaborative tools.",
              },
              {
                name: "📈 Track Your Progress",
                comment:
                  "Monitor your skill development, achievements, and milestones with a personalized dashboard.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">{testimonial.comment}</p>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">For Whom</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">🎉 No matter who you are, Skill Innovator makes learning & teaching effortless. Join today & start growing! 🚀</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "🎯 For Individuals & Professionals",
                price: "Who All??",
                description: "Perfect for trying out individual talent",
                features: [" Students & Job Seekers ", "Freelancers & Creatives", "Trainers & Mentors ", "Community Support"],
              },
              {
                name: "For Businesses & Organizations",
                price: "who all??",
                description: "Best for growing businesses",
                features: [
                  "Startups & Entrepreneurs ",
                  "Corporates & Teams ",
                  "mentor juniors",
                  "Priority Support",
                  "Educational Institutions",
                ],
                popular: true,
              },
              {
                name: "📢 For Communities & Groups",
                price: "who all ??",
                description: "For large organizations",
                features: [
                  "Professional Associationss",
                  "NGOs & Social Enterprises",
                  "Event Planners",
                  "Conference Organizers",
                ],
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className={`h-full ${plan.popular ? "border-2 border-[#ff4d4d]" : ""}`}>
                  <CardContent className="p-6">
                    {plan.popular && (
                      <div className="bg-[#ff4d4d] text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    </div>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-[#ff4d4d]" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${plan.popular ? "bg-[#ff4d4d] hover:bg-[#ff3333]" : "bg-gray-900 hover:bg-gray-800"}`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#ff4d4d] to-[#ff8533] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Share, Learn, and Grow?</h2>
            <p className="text-xl mb-8 opacity-90">
            Join thousands of users who trust Skill Innovator to build their skills and connect with the right people.
            🚀 Find mentors. Teach skills. Track progress.
            </p>
            <Button size="lg" className="bg-white text-[#ff4d4d] hover:bg-gray-100">
            🔗 Start for Free Today!

              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Skill Innovator</h3>
              <p className="text-gray-400"> The  Platform for Learning & Skill Sharing</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Templates
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Skill Innovator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

