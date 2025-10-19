// app/page.tsx

"use client";
import React, { useState, useRef } from "react";
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
  Phone,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";
import Image from "next/image";

// Video Card Component
const VideoCard = ({
  item,
  index,
}: {
  item: {
    title: string;
    description: string;
    video: string;
    stats: string;
  };
  index: number;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      className="relative bg-gradient-to-br from-[#1A1A1A]/90 to-[#0A0A0A]/90 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-[#00FFD1]/50 hover:shadow-[0_0_30px_rgba(0,255,209,0.1)] transition-all duration-300 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
    >
      {/* Video Container */}
      <div className="relative aspect-video bg-black overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          muted={isMuted}
          playsInline
          onEnded={() => setIsPlaying(false)}
        >
          <source src={item.video} type="video/mp4" />
          お使いのブラウザは動画タグをサポートしていません。
        </video>

        {/* Video Controls Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <button
              onClick={togglePlay}
              className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
              aria-label={isPlaying ? "一時停止" : "再生"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white ml-0.5" />
              )}
            </button>

            <button
              onClick={toggleMute}
              className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
              aria-label={isMuted ? "音声オン" : "ミュート"}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-white" />
              ) : (
                <Volume2 className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-[#00FFD1] transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {item.description}
        </p>

        {/* Stats Badge */}
        <div className="inline-flex items-center gap-2 bg-[#00FFD1]/10 border border-[#00FFD1]/30 rounded-full px-4 py-2">
          <div className="w-2 h-2 bg-[#00FFD1] rounded-full animate-pulse" />
          <span className="text-sm font-medium text-[#00FFD1]">
            {item.stats}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
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
    { icon: "/logos/open_ai.webp", name: "OpenAI", isImage: true },
  ];

  const integrationsRow2 = [
    { icon: "/logos/insta.webp", name: "Instagram", isImage: true },
    { icon: "/logos/youtube.webp", name: "YouTube", isImage: true },
    { icon: "/logos/x.png", name: "X", isImage: true },
    { icon: "/logos/trello.png", name: "Trello", isImage: true },
    { icon: "/logos/google.webp", name: "Google", isImage: true },
    {
      icon: "/logos/google_calender.png",
      name: "Google Calendar",
      isImage: true,
    },
    { icon: "/logos/google_docs.png", name: "Google Docs", isImage: true },
    {
      icon: "/logos/google_ss.png",
      name: "Google Sheets",
      isImage: true,
    },
  ];

  const steps = [
    {
      number: "01",
      title: "ヒアリング",
      desc: "現状の業務フローを分析し、自動化の可能性を洗い出します",
    },
    {
      number: "02",
      title: "設計",
      desc: "お客様の業務に最適化されたカスタム自動化プランを策定します",
    },
    {
      number: "03",
      title: "構築",
      desc: "n8nを活用した強力なワークフローを構築し、24時間365日稼働させます",
    },
    {
      number: "04",
      title: "サポート",
      desc: "継続的な最適化と技術サポートで、さらなる業務改善を実現します",
    },
  ];

  const features = [
    {
      icon: <Zap />,
      title: "トリガー",
      desc: "Webhook、スケジュール、イベントベースで自動的にワークフローを起動",
    },
    {
      icon: <GitBranch />,
      title: "プロセス",
      desc: "データの変換、フィルタリング、条件分岐を自動で実行",
    },
    {
      icon: <Database />,
      title: "アクション",
      desc: "システム更新、通知送信、データ記録を自動化",
    },
  ];

  const stats = [
    { num: "10,000+", label: "導入ワークフロー数" },
    { num: "98%", label: "顧客満足度" },
    { num: "24/7", label: "稼働保証" },
  ];

  const videoItems = [
    {
      title: "Slack通知の自動化",
      description:
        "重要なイベントを即座にチームに共有し、リアルタイムでコミュニケーション",
      video: "/videos/slack-automation.mp4",
      stats: "通知時間を90%削減",
    },
    {
      title: "Gmail自動返信・振り分け",
      description:
        "問い合わせメールを自動分類し、適切な返信テンプレートで即座に対応",
      video: "/videos/gmail-automation.mp4",
      stats: "対応時間を80%短縮",
    },
    {
      title: "データ収集・集計の自動化",
      description: "複数のソースからデータを自動収集し、レポートを自動生成",
      video: "/videos/data-automation.mp4",
      stats: "月間100時間の削減",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="text-white min-h-screen overflow-hidden relative">
      {/* Global Background Images */}
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
              src="/images/bg.png"
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

          <div className="relative text-center px-4 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm md:text-base text-[#00FFD1] font-medium mb-4 tracking-wider uppercase">
                n8n ビジネス自動化ソリューション
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                ビジネスを加速させる
                <br />
                <span className="bg-gradient-to-r from-[#00FFD1] to-[#00B4FF] bg-clip-text text-transparent">
                  次世代の業務自動化
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              n8nの力を活用し、ワークフローを効率化。手作業を排除し、
              <br className="hidden md:block" />
              インテリジェントにビジネスをスケールさせます。
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00FFD1] to-[#00B4FF] text-black px-8 py-4 rounded-full text-lg font-bold hover:shadow-[0_0_30px_rgba(0,255,209,0.5)] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                無料相談を申し込む <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#features"
                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                機能を見る
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Logo Carousel */}
        <section className="py-24 border-y border-gray-800/30 overflow-hidden relative bg-black/20 backdrop-blur-sm">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00FFD1]/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00FFD1]/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00B4FF]/50 to-transparent" />

          <div className="text-center mb-16">
            <p className="text-gray-400 text-xs uppercase tracking-[0.3em] font-light mb-2">
              Integration Partners
            </p>
            <h3 className="text-2xl md:text-3xl font-bold">
              400種類以上のツールと連携可能
            </h3>
          </div>

          <div className="space-y-6">
            {/* 1列目 */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/95 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/95 to-transparent z-10 pointer-events-none" />
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#00FFD1]/30 to-transparent z-20 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#00FFD1]/30 to-transparent z-20 pointer-events-none" />

              <motion.div
                className="flex gap-6"
                animate={{ x: ["0%", "-50%"] }}
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

            {/* 2列目 */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/95 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/95 to-transparent z-10 pointer-events-none" />
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#00B4FF]/30 to-transparent z-20 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#00B4FF]/30 to-transparent z-20 pointer-events-none" />

              <motion.div
                className="flex gap-6"
                animate={{ x: ["-50%", "0%"] }}
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

        {/* Video Showcase Section */}
        <section className="py-32 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00B4FF]/5 to-transparent pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-[#00B4FF] font-medium mb-4 tracking-wider uppercase">
                Use Cases
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                n8nで実現できる
                <br />
                <span className="bg-gradient-to-r from-[#00FFD1] to-[#00B4FF] bg-clip-text text-transparent">
                  具体的な自動化
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                面倒な手作業を自動化し、本当に重要な業務に集中できる環境を構築します
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoItems.map((item, i) => (
                <VideoCard key={i} item={item} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-32 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              まだ<span className="text-[#00FFD1]">手作業</span>で
              <br className="md:hidden" />
              業務を行っていませんか?
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              反復作業に費やす時間は、イノベーションから奪われた時間です。
              <br />
              現代のビジネスは自動化で動いています。
              <br />
              スプレッドシートやコピー&ペーストの作業から解放されましょう。
            </motion.p>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="py-32 px-4 bg-gradient-to-b from-transparent via-[#00FFD1]/5 to-transparent"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-[#00FFD1] font-medium mb-4 tracking-wider uppercase">
                Features
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-[#00B4FF]">n8n</span>で実現する自動化
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                強力なワークフロー自動化で、ビジネスプロセスを次のレベルへ
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="relative bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#00FFD1]/30 rounded-2xl p-8 hover:border-[#00FFD1] hover:shadow-[0_0_30px_rgba(0,255,209,0.1)] transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00FFD1] to-[#00B4FF] rounded-xl flex items-center justify-center mb-6">
                    {React.cloneElement(feature.icon, {
                      className: "w-8 h-8 text-black",
                    })}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
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
          <div className="max-w-5xl mx-auto text-center relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-[#00FFD1] font-medium mb-4 tracking-wider uppercase">
                Trust & Performance
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                あらゆる規模の
                <br />
                <span className="bg-gradient-to-r from-[#00FFD1] to-[#00B4FF] bg-clip-text text-transparent">
                  ビジネスに対応
                </span>
              </h2>
            </motion.div>
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-16 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              スタートアップから大企業まで、n8nを活用したソリューションは
              <br className="hidden md:block" />
              お客様のビジョンに合わせて柔軟にスケールします。
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-[#1A1A1A]/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-[#00FFD1]/30 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-5xl font-bold text-[#00FFD1] mb-3">
                    {stat.num}
                  </div>
                  <div className="text-lg text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-32 px-4 bg-[#0D0D0D]/60 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-[#00FFD1] font-medium mb-4 tracking-wider uppercase">
                Our Process
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                導入までの<span className="text-[#00B4FF]">4つのステップ</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                お客様の業務に最適な自動化ソリューションを、確実に構築・導入します
              </p>
            </motion.div>

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
                  <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-[#00FFD1]/20 to-[#00B4FF]/20 rounded-2xl flex items-center justify-center border border-[#00FFD1]/30 group-hover:border-[#00FFD1] group-hover:shadow-[0_0_20px_rgba(0,255,209,0.2)] transition-all backdrop-blur-sm">
                    <span className="text-3xl font-bold text-[#00FFD1]">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-300">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-32 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#00FFD1]/10 via-transparent to-transparent" />

          <div className="max-w-2xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-sm text-[#00FFD1] font-medium mb-4 tracking-wider uppercase">
                Contact Us
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                今すぐ業務自動化を
                <br />
                <span className="text-[#00FFD1]">始めましょう</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300">
                n8nがどのようにあなたのビジネスを変革できるか、
                <br className="hidden md:block" />
                まずは無料相談でお聞かせください
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
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <User className="w-4 h-4" /> お名前{" "}
                    <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-[#0A0A0A]/80 backdrop-blur-sm border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-[#00FFD1] focus:outline-none transition-colors"
                    placeholder="山田 太郎"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <Phone className="w-4 h-4" /> 電話番号
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-[#0A0A0A]/80 backdrop-blur-sm border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-[#00FFD1] focus:outline-none transition-colors"
                    placeholder="090-1234-5678"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <Mail className="w-4 h-4" /> メールアドレス{" "}
                  <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-[#0A0A0A]/80 backdrop-blur-sm border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-[#00FFD1] focus:outline-none transition-colors"
                  placeholder="yamada@company.co.jp"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <Building2 className="w-4 h-4" /> 会社名{" "}
                  <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full bg-[#0A0A0A]/80 backdrop-blur-sm border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-[#00FFD1] focus:outline-none transition-colors"
                  placeholder="株式会社サンプル"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <Workflow className="w-4 h-4" /> お問い合わせ内容
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full bg-[#0A0A0A]/80 backdrop-blur-sm border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-[#00FFD1] focus:outline-none transition-colors resize-none"
                  placeholder="自動化したい業務内容や、ご相談したいことをお聞かせください"
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
                    <Check className="w-5 h-5" /> 送信完了しました!
                  </>
                ) : (
                  <>
                    無料相談を申し込む <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              <p className="text-xs text-gray-400 text-center">
                フォーム送信後、2営業日以内に担当者よりご連絡いたします
              </p>
            </motion.form>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-12 px-4 bg-black/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-bold mb-4">
                  n8n Business Automation
                </h4>
                <p className="text-sm text-gray-400">
                  次世代のワークフロー自動化で
                  <br />
                  ビジネスの可能性を最大化
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4 text-gray-300">
                  サービス
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a
                      href="#features"
                      className="hover:text-[#00FFD1] transition-colors"
                    >
                      機能紹介
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-[#00FFD1] transition-colors"
                    >
                      導入プロセス
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-[#00FFD1] transition-colors"
                    >
                      料金プラン
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4 text-gray-300">
                  お問い合わせ
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-[#00FFD1] transition-colors"
                    >
                      無料相談
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-[#00FFD1] transition-colors"
                    >
                      導入事例
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-[#00FFD1] transition-colors"
                    >
                      よくある質問
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p className="text-sm">
                © 2025 n8n Business Automation. All rights reserved.
              </p>
              <p className="mt-2 text-xs">
                Powered by n8n — ワークフロー自動化プラットフォーム
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
