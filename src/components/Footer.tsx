'use client'

import { ChatBubbleLeftRightIcon, DevicePhoneMobileIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="bg-darkBlue-950/90 border-t border-primary-600/30 mt-16 sm:mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 justify-center sm:justify-start">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-metallic rounded-lg flex items-center justify-center text-white font-bold text-sm sm:text-base">
                G
              </div>
              <span className="font-mono text-lg sm:text-xl font-bold glow-text">GROWSHOW</span>
            </div>
            <p className="text-primary-400 text-sm sm:text-base leading-relaxed text-center sm:text-left">
              PRIVATE SERVER dengan pengalaman bermain terbaik sejak 2021. 
              Bergabunglah dengan komunitas yang terus berkembang!
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="font-mono font-bold text-primary-200 text-base sm:text-lg">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: 'Server Status', href: '#status' },
                { name: 'Features', href: '#features' },
                { name: 'Host Setup', href: '#host' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Community */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="font-mono font-bold text-primary-200 text-base sm:text-lg">Community</h3>
            <div className="space-y-3">
              <a
                href="https://discord.gg/BFrEQgawEN"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm sm:text-base group"
              >
                <ChatBubbleLeftRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Discord Server</span>
              </a>
              <a
                href="https://chat.whatsapp.com/LyVphMQX5h43woTO1fu0aZ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm sm:text-base group"
              >
                <DevicePhoneMobileIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>WhatsApp Group</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-600/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-primary-500 text-xs sm:text-sm font-mono">
            © 2025 <span className="glow-text font-semibold">GrowShow</span>. 
            Dikembangkan dengan ❤️ oleh <span className="text-primary-400">SkyDev</span>
          </p>
          <p className="text-primary-600 text-xs mt-2">
            Dibuat dengan Next.js • Dirancang untuk Keunggulan
          </p>
        </div>
      </div>
    </footer>
  )
}