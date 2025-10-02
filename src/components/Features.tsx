'use client'

import React from 'react'
import { GiftIcon, CurrencyDollarIcon, BoltIcon, UsersIcon, ShieldCheckIcon, LockClosedIcon, CalendarDaysIcon, UserIcon, PlayCircleIcon, ChatBubbleLeftRightIcon } from './Icons'

export default function Features() {
  const features = [
    {
      icon: <GiftIcon className="w-12 h-12 text-primary-400" />,
      title: 'Daily Giveaway',
      description: 'Setiap hari berbagi gacha dan custom item di jam malam untuk semua pemain aktif.',
      highlight: 'Gratis Setiap Hari'
    },
    {
      icon: <CurrencyDollarIcon className="w-12 h-12 text-primary-400" />,
      title: 'Easy Economy',
      description: 'Sangat mudah untuk mendapatkan World Lock, dan tidak ada sistem donasi dari role unlimited.',
      highlight: 'No Pay-to-Win'
    },
    {
      icon: <BoltIcon className="w-12 h-12 text-primary-400" />,
      title: 'Server Online 24/7',
      description: 'Server selalu aktif 24 jam nonstop dengan uptime terbaik di kelasnya.',
      highlight: '99.9% Uptime'
    },
    {
      icon: <UsersIcon className="w-12 h-12 text-primary-400" />,
      title: 'Player Friendly',
      description: 'Komunitas GrowShow yang ramah, tidak toxic, dan saling membantu sesama pemain.',
      highlight: 'Toxic-Free Zone'
    },
    {
      icon: <ShieldCheckIcon className="w-12 h-12 text-primary-400" />,
      title: 'Mods Friendly',
      description: 'Tim moderator yang selalu aktif dan siap membantu player yang memiliki kendala.',
      highlight: 'Support 24/7'
    },
    {
      icon: <LockClosedIcon className="w-12 h-12 text-primary-400" />,
      title: 'Anti-Cheat System',
      description: 'Sistem keamanan tingkat tinggi untuk mencegah cheating dan menjaga fairplay.',
      highlight: 'Secure Server'
    }
  ]

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-mono glow-text mb-4 sm:mb-6">
            Mengapa Memilih GrowShow?
          </h2>
          <div className="max-w-4xl mx-auto px-4 sm:px-0">
            <p className="text-base sm:text-lg text-primary-300 leading-relaxed">
              Temukan keunggulan yang membuat GrowShow menjadi pilihan terbaik untuk pengalaman bermain Anda
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="metallic-card p-6 sm:p-8 group hover-lift hover:scale-105 transition-all duration-500 relative overflow-hidden"
            >
              {/* Feature Icon */}
              <div className="mb-4 sm:mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  {React.cloneElement(feature.icon, { className: "w-10 h-10 sm:w-12 sm:h-12 text-primary-400" })}
                </div>
              </div>

              {/* Highlight Badge */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-primary-500/20 border border-primary-400/50 
                            rounded-full px-2 sm:px-3 py-1 text-xs font-mono font-semibold text-primary-300">
                {feature.highlight}
              </div>

              {/* Feature Content */}
              <h3 className="font-mono font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-primary-200 group-hover:text-primary-100 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-primary-400 text-sm sm:text-base leading-relaxed group-hover:text-primary-300 transition-colors">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-300 
                            transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="metallic-card p-6 sm:p-8 hover-lift transition-all duration-500">
          <h3 className="font-mono font-bold text-xl sm:text-2xl mb-6 sm:mb-8 text-center glow-text">
            Statistik GrowShow
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: '5+', label: 'Years Running', icon: <CalendarDaysIcon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400" /> },
              { number: '50K+', label: 'Total Players', icon: <UserIcon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400" /> },
              { number: '1500+', label: 'Daily Active Users', icon: <PlayCircleIcon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400" /> },
              { number: '99.9%', label: 'Uptime Record', icon: <BoltIcon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-darkBlue-800/30 border border-primary-600/20 hover:bg-darkBlue-800/50 hover:border-primary-500/30 transition-all duration-300">
                <div className="flex justify-center mb-3 sm:mb-4">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono glow-text mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-400 font-mono text-xs sm:text-sm leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="max-w-2xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
            <p className="text-base sm:text-lg text-primary-300 leading-relaxed">
              Siap merasakan pengalaman private server terbaik?
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
            <a
              href="https://discord.gg/BFrEQgawEN"
              target="_blank"
              rel="noopener noreferrer"
              className="metallic-button inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            >
              <ChatBubbleLeftRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              Join Our Discord
            </a>
            <a
              href="https://chat.whatsapp.com/LyVphMQX5h43woTO1fu0aZ"
              target="_blank"
              rel="noopener noreferrer"
              className="metallic-button bg-green-600/80 hover:bg-green-500/90 inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            >
              <ChatBubbleLeftRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              WhatsApp Group
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}