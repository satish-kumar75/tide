import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Check,
  CreditCard,
  Globe,
  DollarSign,
  Shield,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import User from "/user.png";

const TideHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Invoicing",
    "Features",
    "About",
    "Careers",
    "Blog",
    "Offers",
  ];

  const features = [
    {
      icon: CreditCard,
      title: "Business Account",
      desc: "Quick setup and easy management",
    },
    {
      icon: Globe,
      title: "Global Transactions",
      desc: "Seamless international payments",
    },
    {
      icon: DollarSign,
      title: "Expense Tracking",
      desc: "Real-time spending insights",
    },
    {
      icon: Shield,
      title: "Secure Banking",
      desc: "Bank-grade security protocols",
    },
  ];

  const benefits = [
    "Spend at all RuPay merchants without extra fees",
    "Control your card from anywhere using the app",
    "Accepted at all RuPay merchants",
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      quote:
        "Opening a Tide account transformed how I manage my business finances. The interface is intuitive and the features are exactly what I needed.",
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      quote:
        "The expense tracking and real-time notifications have made managing company spending so much easier. Highly recommended!",
    },
    {
      name: "Emma Williams",
      role: "Freelancer",
      quote:
        "As a freelancer, Tide has simplified my banking needs. The mobile app is fantastic and customer support is always helpful.",
    },
  ];

  const steps = [
    { title: "Download the app", desc: "Get started in minutes" },
    { title: "Tell us about your business", desc: "Basic company details" },
    { title: "Provide your address", desc: "For your new card delivery" },
    { title: "Quick verification", desc: "Simple identity check" },
    { title: "Start using Tide", desc: "Access all features instantly" },
  ];

  const faqs = [
    {
      q: "Who can open a Tide Business Account?",
      a: "Any registered business can open an account with Tide.",
    },
    {
      q: "What is Tide To Tide Send?",
      a: "It's a feature that allows instant transfers between Tide accounts.",
    },
    {
      q: "How long does it take to open a bank account with Tide?",
      a: "Most accounts are opened within minutes, subject to verification.",
    },
    {
      q: "How can I add money to the Tide Expense Card?",
      a: "You can easily top up your card through the Tide app.",
    },
    {
      q: "What is the Tide Expense Card?",
      a: "It's a business expense card that gives you cashback and helps track spending.",
    },
  ];

  const businessTips = [
    {
      title: "Beyond just followers",
      desc: "Tips to grow your business on social media",
      image:
        "https://images.ctfassets.net/3h69mkdgxn20/7AScg7X2IjVON6qYO4jwZF/12d6f933398fb651c6fade3d16703862/India_blog_1.png",
    },
    {
      title: "Tap Pay Done",
      desc: "Execute through your bills effortlessly",
      image:
        "https://images.ctfassets.net/3h69mkdgxn20/4eQK40lVCwcHYzCJsvs4Ly/aa2dde5e35a9c1398c1de167b9761f74/India_blog_2.png",
    },
    {
      title: "Safeguarding Your Finances",
      desc: "A Deep Dive into Financial Safety",
      image:
        "https://images.ctfassets.net/3h69mkdgxn20/58eTuKh9GEqdu2vqQeL5i3/cd6a66db265827ac39a70fb7241a9c7e/India_blog_3.png",
    },
    {
      title: "From Vision to Venture",
      desc: "8 Laws and Schemes Shaping the Future for Women Entrepreneurs",
      image:
        "https://images.ctfassets.net/3h69mkdgxn20/5pibKMmuDwPoHTmingJwPU/4d0ac693c5e06231fbb85ca8e322fa1f/India_blog_4.png",
    },
  ];

  const featuredIn = [
    {
      title: "The Economic Times",
      image:
        "https://images.ctfassets.net/3h69mkdgxn20/4jS1fN36aWy25fKByhgo0d/7cca7c67953dc6fef82816fbaf042700/ET.png?q=80&fm=avif",
    },
    {
      title: "Business Standard",
      image:
        "https://images.ctfassets.net/3h69mkdgxn20/14d4ndAdBx3mPLmGRNo2Ni/0f94ecb5d690c3ac49c45214c3d7a54d/Business_standard.png?q=80&fm=avif",
    },
    {
      title: "The Times of India",
      image:
        "https://images.ctfassets.net/3h69mkdgxn20/46IN4tAuTAAqixTPvOwO4V/67d14693e8d8c40ec901e703a6f36464/TIO.png?q=80&fm=avif",
    },
    {
      title: "Forbes",
      image:
        "https://images.ctfassets.net/3h69mkdgxn20/2832Uejk2qITkzsVSIlu9i/31b04c74b7aeacd41661108d95d7b20f/Forbes.png?q=80&fm=avif",
    },
  ];

  return (
    <div className="min-h-screen bg-indigo-900 text-white ">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold"
          >
            tide
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                className="text-sm font-medium hover:text-blue-300 transition-colors"
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-white text-indigo-900 rounded-full font-medium"
            >
              Get Started
            </motion.button>
          </div>

          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-indigo-900 pt-20"
          >
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ x: 10 }}
                    className="text-xl font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-indigo-900 rounded-full font-medium text-lg mt-4"
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div
          animate={{
            y: scrollY * 0.5,
            rotate: scrollY * 0.02,
          }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-500 rounded-full filter blur-3xl opacity-20"></div>
        </motion.div>

        <div className="container max-w-7xl mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Revolutionize Your Business Finances
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-blue-200"
            >
              Simplify your financial journey with Tide. Save time, money, and
              get cashback on your transactions.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-indigo-900 rounded-full text-lg font-medium inline-flex items-center gap-2"
            >
              Get started <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="md:w-1/2 relative"
          >
            <img
              src="https://images.ctfassets.net/3h69mkdgxn20/12ql1tIImlNsuV0Krxr9os/a8ed877c19194cefe745853076fa481e/Banner-image.png?q=80&fm=avif"
              alt="Tide App Interface"
              className="w-full max-w-md mx-auto md:mx-0 rounded-3xl shadow-2xl object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-blue-900 ">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              Everything you need to run your business
            </h2>
            <p className="text-blue-200">
              Opening a free business account with Tide is easy – apply in
              minutes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10 group"
              >
                <feature.icon className="w-8 h-8 mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-blue-200">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expense Card Section */}
      <section className="py-20 relative overflow-hidden bg-indigo-800">
        <motion.div
          animate={{
            rotate: scrollY * 0.02,
          }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
        </motion.div>

        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Introducing Tide Expense Card
            </h2>
            <p className="text-xl text-blue-200">
              The card that gives you back
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2 mb-8 md:mb-0 space-y-6"
            >
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <Check className="text-blue-400" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-indigo-900 rounded-full text-lg font-medium inline-flex items-center gap-2"
              >
                Get your card <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <img
                src="https://images.ctfassets.net/3h69mkdgxn20/4T0WxmQuWN3WwoJpGYnUXB/8b5d607e075966945be5cbf9ca20b01f/Expense_cards_V4_2_6__1_.png?q=80&fm=avif"
                alt="Tide Expense Cards"
                className="w-full rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-blue-900">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Your Tide card is shipped, once you complete these steps
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 space-y-8 mb-8 md:mb-0">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-400 transition-colors">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-blue-200">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-blue-500/30 rounded-3xl filter blur-2xl" />
              <img
                src="https://images.ctfassets.net/3h69mkdgxn20/1jHt6dYkasg6wXSvcw88Lk/ba2cc845f82a2b62cc74ddb06fd19c20/Group_3184176.png?q=80&fm=avif"
                alt="Tide Mobile App"
                className="relative z-10 rounded-3xl shadow-2xl mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 ">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            What our customers say
          </motion.h2>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ type: "tween", duration: 0.5 }}
                className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl"
              >
                <div className="flex items-center mb-6">
                  <Star className="text-yellow-400 w-5 h-5" />
                  <Star className="text-yellow-400 w-5 h-5" />
                  <Star className="text-yellow-400 w-5 h-5" />
                  <Star className="text-yellow-400 w-5 h-5" />
                  <Star className="text-yellow-400 w-5 h-5" />
                </div>
                <p className="text-xl italic mb-6">
                  {testimonials[currentTestimonial].quote}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full mr-4 grid items-center justify-center">
                    <img
                      src={User}
                      alt="user"
                      className="rounded-full w-11 h-11"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-blue-300">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              onClick={() =>
                setCurrentTestimonial((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )
              }
            >
              <ChevronLeft className="text-2xl" />
            </button>
            <button
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              onClick={() =>
                setCurrentTestimonial((prev) =>
                  prev === testimonials.length - 1 ? 0 : prev + 1
                )
              }
            >
              <ChevronRight className="text-2xl" />
            </button>
          </div>
        </div>
      </section>

      {/* Business Tips Section */}
      <section className="py-20 bg-blue-900">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">
              Business tips from our expert community
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-white text-indigo-900 rounded-full font-medium"
            >
              See all blogs
            </motion.button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-xl rounded-xl overflow-hidden"
              >
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{tip.title}</h3>
                  <p className="text-blue-200">{tip.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-indigo-200 pb-4"
              >
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                >
                  <span className="font-medium">{faq.q}</span>
                  <ChevronRight
                    className={`transform transition-transform ${
                      activeFaq === index ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="mt-2 text-indigo-50">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured In Section */}
      <section className="py-20 bg-blue-900">
        <div className="container px-4  max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured in</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {featuredIn.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={brand.image}
                  alt={brand.title}
                  className="h-12 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="container px-4 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Get started with Tide
          </motion.h2>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto bg-white/10 backdrop-blur-xl p-8 rounded-2xl"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 bg-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message (Optional)
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3 bg-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-white text-indigo-900 font-bold py-3 px-4 rounded-lg transition-colors hover:bg-blue-100"
            >
              Submit
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-blue-900 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold mb-4"
              >
                tide
              </motion.h3>
              <p className="text-blue-200">
                Empowering businesses with smart financial solutions.
              </p>
            </div>
            {[
              { title: "COMPANY", links: ["About", "Careers", "Blog"] },
              {
                title: "HELP & SUPPORT",
                links: ["Support and FAQs", "Contact Us"],
              },
              {
                title: "LEGAL",
                links: [
                  "Privacy Policy",
                  "Terms and Conditions",
                  "Acceptable Use Policy",
                  "Community Guidelines",
                ],
              },
            ].map((column, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <motion.li key={linkIndex} whileHover={{ x: 5 }}>
                      <a
                        href="#"
                        className="text-blue-200 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-blue-200">
            <p>&copy; 2024 Tide Platform Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TideHome;
