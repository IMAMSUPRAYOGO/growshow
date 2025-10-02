'use client'

import { BoltIcon, GiftIcon, CurrencyDollarIcon, UsersIcon, PlayCircleIcon } from './Icons'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 sm:pt-20 lg:pt-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-darkBlue-900/30 via-primary-900/20 to-darkBlue-950/40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        {/* Main Title */}
        <div className="space-y-6 sm:space-y-8 mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-mono">
            <span className="block glow-text mb-2 sm:mb-4">GROWSHOW</span>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-300 font-normal">
              Private Server
            </span>
          </h1>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-200 leading-relaxed px-4 sm:px-0">
              GrowShow adalah Private Server premium yang dikembangkan oleh{' '}
              <span className="text-primary-400 font-semibold">Kimchay</span>. Server ini telah berdiri 
              selama hampir <span className="text-primary-400 font-semibold">5 tahun</span> sejak 2021 dan terus 
              berkembang menjadi platform terdepan dengan pengalaman bermain yang tak tertandingi.
            </p>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 lg:mb-16 px-4 sm:px-0">
          {[
            { icon: <BoltIcon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-400" />, title: '24/7 Online', desc: 'Server Aktif Non-Stop' },
            { icon: <GiftIcon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-400" />, title: 'Daily Giveaway', desc: 'Hadiah Setiap Hari' },
            { icon: <CurrencyDollarIcon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-400" />, title: 'Easy Economy', desc: 'Mudah Dapat WL' },
            { icon: <UsersIcon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-400" />, title: 'Friendly Community', desc: 'Komunitas Ramah' }
          ].map((feature, index) => (
            <div key={index} className="metallic-card p-4 sm:p-6 text-center group hover-lift hover:scale-105 transition-all duration-500">
              <div className="flex justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="font-mono font-bold text-primary-300 mb-2 text-sm sm:text-base">{feature.title}</h3>
              <p className="text-primary-400 text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="space-y-4 sm:space-y-6">
          <a
            href="https://discord.gg/BFrEQgawEN"
            target="_blank"
            rel="noopener noreferrer"
            className="metallic-button inline-flex items-center gap-2 sm:gap-3 text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 mx-4 sm:mx-0"
          >
            <PlayCircleIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            Join GrowShow Now
          </a>
          
          <p className="text-primary-400 text-sm sm:text-base px-4 sm:px-0 max-w-2xl mx-auto leading-relaxed">
            Bergabunglah dengan komunitas terbesar dan rasakan pengalaman bermain yang luar biasa!
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}