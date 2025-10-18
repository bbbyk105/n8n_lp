// app/page.tsx (または components/LandingPage.tsx)

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Database,
  GitBranch,
  Workflow,
  Mail,
  Building2,
  User,
  ArrowRight,
  Check,
} from "lucide-react";
import Image from "next/image";

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const integrationsRow1 = [
    { icon: "/logos/slack.png", name: "Slack", isImage: true },
    { icon: "/logos/line.png", name: "Line", isImage: true },
    { icon: "/logos/notion.webp", name: "Notion", isImage: true },
    { icon: "/logos/discord.png", name: "Discord", isImage: true },
    { icon: "/logos/stripe.webp", name: "Stripe", isImage: true },
    { icon: "/logos/airtable.png", name: "Airtable", isImage: true },
    { icon: "/logos/gmail.png", name: "Gmail", isImage: true },
    { icon: "/logos/shopify.webp", name: "Shopify", isImage: true },
    { icon: "/logos/slack.png", name: "Slack", isImage: true },
    { icon: "/logos/line.png", name: "Line", isImage: true },
  ];

  const integrationsRow2 = [
    { icon: "/logos/notion.webp", name: "Notion", isImage: true },
    { icon: "/logos/discord.png", name: "Discord", isImage: true },
    { icon: "/logos/stripe.webp", name: "Stripe", isImage: true },
    { icon: "/logos/airtable.png", name: "Airtable", isImage: true },
    { icon: "/logos/gmail.png", name: "Gmail", isImage: true },
    { icon: "/logos/shopify.webp", name: "Shopify", isImage: true },
    { icon: "/logos/slack.png", name: "Slack", isImage: true },
    { icon: "/logos/line.png", name: "Line", isImage: true },
    { icon: "/logos/notion.webp", name: "Notion", isImage: true },
    { icon: "/logos/discord.png", name: "Discord", isImage: true },
  ];

  const steps = [
    {
      number: "01",
      title: "Discovery",
      desc: "We analyze your workflow and identify automation opportunities",
    },
    {
      number: "02",
      title: "Design",
      desc: "Custom automation blueprint tailored to your business",
    },
    {
      number: "03",
      title: "Build",
      desc: "Deploy powerful n8n workflows that work 24/7",
    },
    {
      number: "04",
      title: "Support",
      desc: "Ongoing optimization and technical support",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="text-white min-h-screen overflow-hidden relative">
      {/* Global Background Images - Repeating every 100vh */}
      <div className="fixed inset-0 -z-10">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className="absolute w-full"
            style={{
              height: "100vh",
              top: `${index * 100}vh`,
            }}
          >
            <Image
              src="/images/bg.webp"
              alt="Background"
              fill
              className="object-cover object-center pointer-events-none select-none"
              priority={index === 0}
              sizes="100vw"
              quality={90}
            />
          </div>
        ))}
        <div className="absolute inset-0" style={{ height: "600vh" }} />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00FFD1]/5 via-transparent to-transparent" />
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#00FFD1] rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </motion.div>

          <div className="relative text-center px-4 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                Move your business
                <br />
                <span className="bg-gradient-to-r from-[#00FFD1] to-[#00B4FF] bg-clip-text text-transparent">
                  with automation
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-gray-400 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Unlock the power of n8n to streamline workflows, eliminate manual
              tasks,
              <br className="hidden md:block" />
              and scale your operations intelligently.
            </motion.p>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00FFD1] to-[#00B4FF] text-black px-8 py-4 rounded-full text-lg font-semibold hover:shadow-[0_0_30px_rgba(0,255,209,0.5)] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </section>

        {/* Logo Carousel - 可変幅対応版 */}
        <section className="py-24 border-y border-gray-800/30 overflow-hidden relative bg-black/20 backdrop-blur-sm">
          {/* 背景のグラデーション効果 */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00FFD1]/10 via-transparent to-transparent pointer-events-none" />

          {/* 上下のボーダーグロー */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00FFD1]/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00B4FF]/50 to-transparent" />

          <p className="text-center text-gray-400 mb-16 text-xs uppercase tracking-[0.3em] font-light">
            400+ Integrations Available
          </p>

          <div className="space-y-6">
            {/* 1列目 - 右へ移動 */}
            <div className="relative">
              {/* グラデーションマスク */}
              <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/95 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/95 to-transparent z-10 pointer-events-none" />

              {/* アクセントグロー */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#00FFD1]/30 to-transparent z-20 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#00FFD1]/30 to-transparent z-20 pointer-events-none" />

              <motion.div
                className="flex gap-6"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[...integrationsRow1, ...integrationsRow1].map((item, i) => (
                  <motion.div
                    key={`row1-${i}`}
                    className="relative flex items-center justify-center bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-md px-6 py-5 rounded-xl border border-white/[0.08] flex-shrink-0 hover:bg-white/[0.08] hover:border-[#00FFD1]/40 hover:shadow-[0_0_20px_rgba(0,255,209,0.15)] transition-all duration-500 group min-w-[120px]"
                    whileHover={{ scale: 1.08, y: -4 }}
                  >
                    {/* ホバー時のインナーグロー */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00FFD1]/0 to-[#00B4FF]/0 group-hover:from-[#00FFD1]/5 group-hover:to-[#00B4FF]/5 transition-all duration-500" />

                    <div className="relative h-[50px] w-auto max-w-[160px] flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt={`${item.name} logo`}
                        width={160}
                        height={50}
                        className="object-contain w-auto h-full"
                        sizes="160px"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* 2列目 - 左へ移動 */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/95 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/95 to-transparent z-10 pointer-events-none" />

              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#00B4FF]/30 to-transparent z-20 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#00B4FF]/30 to-transparent z-20 pointer-events-none" />

              <motion.div
                className="flex gap-6"
                animate={{
                  x: ["-50%", "0%"],
                }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[...integrationsRow2, ...integrationsRow2].map((item, i) => (
                  <motion.div
                    key={`row2-${i}`}
                    className="relative flex items-center justify-center bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-md px-6 py-5 rounded-xl border border-white/[0.08] flex-shrink-0 hover:bg-white/[0.08] hover:border-[#00B4FF]/40 hover:shadow-[0_0_20px_rgba(0,180,255,0.15)] transition-all duration-500 group min-w-[120px]"
                    whileHover={{ scale: 1.08, y: -4 }}
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00B4FF]/0 to-[#00FFD1]/0 group-hover:from-[#00B4FF]/5 group-hover:to-[#00FFD1]/5 transition-all duration-500" />

                    <div className="relative h-[50px] w-auto max-w-[160px] flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt={`${item.name} logo`}
                        width={160}
                        height={50}
                        className="object-contain w-auto h-full"
                        sizes="160px"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#00FFD1]/30 to-transparent" />
        </section>
        {/* Problem Statement */}
        <section className="py-32 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Still doing <span className="text-[#00FFD1]">manual tasks</span>?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Every hour spent on repetitive work is time stolen from
              innovation. Your team deserves better. Modern businesses run on
              automation— not spreadsheets and copy-paste workflows.
            </motion.p>
          </div>
        </section>
        {/* Solution - n8n Visualization */}
        <section className="py-32 px-4 bg-gradient-to-b from-transparent via-[#00FFD1]/5 to-transparent">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Powered by <span className="text-[#00B4FF]">n8n</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap />,
                  title: "Trigger",
                  desc: "Webhook, Schedule, or Event-based activation",
                },
                {
                  icon: <GitBranch />,
                  title: "Process",
                  desc: "Transform, filter, and route data intelligently",
                },
                {
                  icon: <Database />,
                  title: "Action",
                  desc: "Update systems, send notifications, log results",
                },
              ].map((node, i) => (
                <motion.div
                  key={i}
                  className="relative bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#00FFD1]/30 rounded-2xl p-8 hover:border-[#00FFD1] transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00FFD1] to-[#00B4FF] rounded-xl flex items-center justify-center mb-6">
                    {React.cloneElement(node.icon, {
                      className: "w-8 h-8 text-black",
                    })}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{node.title}</h3>
                  <p className="text-gray-400">{node.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Vision & Trust */}
        <section className="py-32 px-4 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/world.webp"
              alt="World Map"
              fill
              className="object-cover opacity-20"
              quality={100}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]/80 z-10" />
          <div className="max-w-4xl mx-auto text-center relative z-20">
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Automation for{" "}
              <span className="bg-gradient-to-r from-[#00FFD1] to-[#00B4FF] bg-clip-text text-transparent">
                every business
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              From startups to enterprises, our n8n-powered solutions scale with
              your ambitions. Join the movement towards intelligent operations.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { num: "10K+", label: "Workflows Deployed" },
                { num: "98%", label: "Client Satisfaction" },
                { num: "24/7", label: "Uptime Guarantee" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-[#1A1A1A]/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-4xl font-bold text-[#00FFD1] mb-2">
                    {stat.num}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Steps Timeline */}
        <section className="py-32 px-4 bg-[#0D0D0D]/60 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              How we <span className="text-[#00B4FF]">work</span>
            </motion.h2>

            <div className="space-y-12">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col md:flex-row items-start gap-6 group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-[#00FFD1]/20 to-[#00B4FF]/20 rounded-2xl flex items-center justify-center border border-[#00FFD1]/30 group-hover:border-[#00FFD1] transition-all backdrop-blur-sm">
                    <span className="text-3xl font-bold text-[#00FFD1]">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-3">{step.title}</h3>
                    <p className="text-xl text-gray-400">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA & Contact Form */}
        <section id="contact" className="py-32 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#00FFD1]/10 via-transparent to-transparent" />

          <div className="max-w-2xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Bring automation to
                <br />
                <span className="text-[#00FFD1]">your company today</span>
              </h2>
              <p className="text-xl text-gray-400">
                Let&apos;s discuss how n8n can transform your operations
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="bg-[#1A1A1A]/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div>
                <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <User className="w-4 h-4" /> Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-[#0A0A0A]/80 backdrop-blur-sm border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-[#00FFD1] focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <Mail className="w-4 h-4" /> Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-[#0A0A0A]/80 backdrop-blur-sm border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-[#00FFD1] focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <Building2 className="w-4 h-4" /> Company Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full bg-[#0A0A0A]/80 backdrop-blur-sm border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-[#00FFD1] focus:outline-none transition-colors"
                  placeholder="Your Company Inc."
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <Workflow className="w-4 h-4" /> Tell us about your workflow
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full bg-[#0A0A0A]/80 backdrop-blur-sm border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-[#00FFD1] focus:outline-none transition-colors resize-none"
                  placeholder="What processes would you like to automate?"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00FFD1] to-[#00B4FF] text-black font-bold py-4 rounded-lg hover:shadow-[0_0_30px_rgba(0,255,209,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? (
                  <>
                    <Check className="w-5 h-5" /> Message Sent!
                  </>
                ) : (
                  <>
                    Start Your Automation Journey{" "}
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </section>
        {/* Footer */}
        <footer className="border-t border-gray-800 py-12 px-4 bg-black/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto text-center text-gray-500">
            <p>© 2025 n8n Business Automation. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Powered by n8n — The workflow automation platform
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
