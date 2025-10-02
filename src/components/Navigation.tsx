'use client'

import { useState, useEffect } from 'react'
import { HomeIcon, ChartBarIcon, SparklesIcon, ComputerDesktopIcon, ChatBubbleLeftRightIcon, DevicePhoneMobileIcon, XMarkIcon, Bars3Icon } from './Icons'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)

      // Update active section based on scroll position
      const sections = ['home', 'status', 'features', 'host']
      const sectionOffsets = sections.map(section => {
        const element = document.querySelector(`#${section}`) as HTMLElement
        return element ? element.offsetTop - 100 : 0
      })

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionOffsets[i]) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home', section: 'home', icon: <HomeIcon className="w-4 h-4" /> },
    { name: 'Status', href: '#status', section: 'status', icon: <ChartBarIcon className="w-4 h-4" /> },
    { name: 'Features', href: '#features', section: 'features', icon: <SparklesIcon className="w-4 h-4" /> },
    { name: 'Host', href: '#host', section: 'host', icon: <ComputerDesktopIcon className="w-4 h-4" /> }
  ]

  const socialLinks = [
    { 
      name: 'Discord', 
      href: 'https://discord.gg/BFrEQgawEN', 
      icon: <ChatBubbleLeftRightIcon className="w-4 h-4" />,
      color: 'hover:text-indigo-400 hover:border-indigo-400'
    },
    { 
      name: 'WhatsApp', 
      href: 'https://chat.whatsapp.com/LyVphMQX5h43woTO1fu0aZ', 
      icon: <DevicePhoneMobileIcon className="w-4 h-4" />,
      color: 'hover:text-green-400 hover:border-green-400'
    }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled 
            ? 'bg-gradient-to-r from-darkBlue-900/98 via-darkBlue-800/98 to-darkBlue-900/98 backdrop-blur-2xl border-b border-primary-500/40 shadow-2xl shadow-primary-900/20' 
            : 'bg-gradient-to-r from-transparent via-darkBlue-900/10 to-transparent backdrop-blur-sm'
        }`}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute inset-0 transition-opacity duration-700 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 via-transparent to-primary-600/5" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400/50 to-transparent" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            
            {/* Premium Logo Section */}
            <div className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer" onClick={() => scrollToSection('#home')}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white font-black text-lg sm:text-xl lg:text-2xl shadow-lg transform group-hover:scale-110 transition-all duration-300">
                  G
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-lg sm:text-xl lg:text-2xl font-black glow-text tracking-wider leading-none">
                  GROWSHOW
                </span>
                <span className="text-primary-400 text-xs sm:text-xs font-mono tracking-widest opacity-80 hidden sm:block">
                  PRIVATE SERVER
                </span>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.section
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-4 lg:px-5 xl:px-6 py-2 lg:py-3 rounded-lg xl:rounded-xl font-mono text-xs lg:text-sm font-medium
                             transition-all duration-500 group overflow-hidden
                             ${isActive 
                               ? 'bg-gradient-to-r from-primary-600/30 to-primary-500/30 text-primary-100 border-primary-400/50' 
                               : 'bg-darkBlue-800/40 text-primary-300 hover:bg-gradient-to-r hover:from-primary-700/20 hover:to-primary-600/20 hover:text-primary-100'
                             } 
                             border hover:border-primary-400/60 hover:shadow-lg hover:shadow-primary-500/25
                             transform hover:scale-105 hover:-translate-y-1
                             inline-flex items-center gap-2 lg:gap-3`}
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-600/0 to-primary-400/0 group-hover:from-primary-600/10 group-hover:to-primary-400/10 transition-all duration-500" />
                    
                    {/* Icon with glow effect */}
                    <div className={`relative transition-all duration-300 ${isActive ? 'text-primary-300' : 'group-hover:text-primary-300'}`}>
                      {item.icon}
                    </div>
                    
                    {/* Text with underline animation */}
                    <span className="relative">
                      {item.name}
                      <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-500 transition-all duration-300 ${
                        isActive ? 'w-full opacity-100' : 'w-0 group-hover:w-full opacity-0 group-hover:opacity-100'
                      }`} />
                    </span>

                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Enhanced Social Links & Mobile Menu */}
            <div className="flex items-center space-x-3">
              
              {/* Premium Social Links */}
              <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative px-3 lg:px-4 py-2 lg:py-3 rounded-lg xl:rounded-xl font-mono text-xs lg:text-sm font-medium
                              bg-darkBlue-800/40 text-primary-300 border border-primary-600/30
                              hover:bg-gradient-to-r hover:from-primary-700/20 hover:to-primary-600/20
                              hover:text-primary-100 hover:border-primary-400/60
                              transition-all duration-500 group overflow-hidden
                              transform hover:scale-105 hover:-translate-y-1
                              inline-flex items-center gap-2 lg:gap-3
                              hover:shadow-lg hover:shadow-primary-500/20`}
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-600/0 to-primary-400/0 group-hover:from-primary-600/10 group-hover:to-primary-400/10 transition-all duration-500" />
                    
                    <div className="relative transition-all duration-300 group-hover:text-primary-300">
                      {link.icon}
                    </div>
                    <span className="relative font-medium">{link.name}</span>
                  </a>
                ))}
              </div>

              {/* Premium Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative p-3 rounded-xl bg-darkBlue-800/60 border border-primary-600/40
                         text-primary-200 hover:bg-primary-700/30 hover:text-primary-100 
                         transition-all duration-500 hover:scale-110 hover:rotate-12 group overflow-hidden
                         hover:shadow-lg hover:shadow-primary-500/25"
              >
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/0 to-primary-400/0 group-hover:from-primary-600/20 group-hover:to-primary-400/20 transition-all duration-500 rounded-xl" />
                
                <div className="relative transition-transform duration-300">
                  {isMobileMenuOpen ? (
                    <XMarkIcon className="w-6 h-6 transform rotate-0 group-hover:rotate-90 transition-transform duration-300" />
                  ) : (
                    <Bars3Icon className="w-6 h-6" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Premium Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Enhanced backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-darkBlue-900/40 to-black/60 backdrop-blur-md" 
             onClick={() => setIsMobileMenuOpen(false)} />
        
        {/* Premium mobile menu panel */}
        <div className={`absolute top-0 right-0 w-full max-w-xs sm:w-80 sm:max-w-sm h-full 
                       bg-gradient-to-br from-darkBlue-900/98 via-darkBlue-800/98 to-darkBlue-900/98
                       backdrop-blur-2xl border-l border-primary-500/40 shadow-2xl shadow-primary-900/30
                       transform transition-all duration-500 ${
                         isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                       }`}>
          
          {/* Animated background pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 via-transparent to-primary-400/5" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-primary-400/50 via-primary-500/80 to-primary-400/50" />
          </div>

          <div className="relative flex flex-col h-full pt-20 sm:pt-24 p-4 sm:p-6">
            
            {/* Mobile menu header */}
            <div className="mb-8 text-center">
              <h3 className="font-mono text-lg font-bold glow-text mb-2">Menu Navigation</h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent mx-auto" />
            </div>

            {/* Enhanced navigation items */}
            <div className="space-y-3">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.section
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full text-left px-5 py-4 rounded-2xl font-mono font-medium
                             transition-all duration-500 group relative overflow-hidden
                             ${isActive 
                               ? 'bg-gradient-to-r from-primary-600/30 to-primary-500/30 text-primary-100 border-primary-400/60 shadow-lg shadow-primary-500/20' 
                               : 'bg-darkBlue-800/40 text-primary-200 hover:bg-gradient-to-r hover:from-primary-700/25 hover:to-primary-600/25 hover:text-primary-100 border-primary-600/30 hover:border-primary-400/60'
                             } 
                             border transform hover:scale-105 hover:translate-x-2
                             flex items-center gap-4`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-600/0 to-primary-400/0 group-hover:from-primary-600/10 group-hover:to-primary-400/10 transition-all duration-500" />
                    
                    {/* Icon container with pulse effect */}
                    <div className={`relative p-2 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'bg-primary-500/20 text-primary-300' 
                        : 'bg-primary-800/30 text-primary-400 group-hover:bg-primary-500/20 group-hover:text-primary-300'
                    }`}>
                      {item.icon}
                    </div>
                    
                    <div className="flex-1">
                      <span className="text-sm">{item.name}</span>
                      {isActive && (
                        <div className="w-full h-0.5 bg-gradient-to-r from-primary-400 to-primary-500 mt-1 rounded-full" />
                      )}
                    </div>

                    {/* Active indicator */}
                    {isActive && (
                      <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Enhanced social section */}
            <div className="mt-12 space-y-4">
              <div className="text-center">
                <h4 className="text-primary-300 font-mono text-sm font-bold mb-4">Connect With Us</h4>
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent mx-auto mb-6" />
              </div>
              
              <div className="space-y-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-5 py-4 rounded-2xl font-mono font-medium
                             bg-darkBlue-800/40 text-primary-200 border border-primary-600/30
                             hover:bg-gradient-to-r hover:from-primary-700/25 hover:to-primary-600/25
                             hover:text-primary-100 hover:border-primary-400/60
                             transition-all duration-500 group relative overflow-hidden
                             transform hover:scale-105 hover:translate-x-2
                             flex items-center gap-4"
                    style={{ animationDelay: `${(navItems.length + index) * 100}ms` }}
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-600/0 to-primary-400/0 group-hover:from-primary-600/10 group-hover:to-primary-400/10 transition-all duration-500" />
                    
                    <div className="relative p-2 rounded-lg bg-primary-800/30 text-primary-400 group-hover:bg-primary-500/20 group-hover:text-primary-300 transition-all duration-300">
                      {link.icon}
                    </div>
                    <span className="text-sm">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu footer */}
            <div className="mt-auto pt-8 text-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-600/30 to-transparent mb-4" />
              <p className="text-primary-500 text-xs font-mono">
                © 2025 <span className="glow-text font-semibold">GrowShow</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation