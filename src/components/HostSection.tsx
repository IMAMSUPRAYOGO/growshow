'use client'

import { DevicePhoneMobileIcon, BoltIcon, ComputerDesktopIcon, FolderIcon, ChatBubbleLeftRightIcon, ClipboardDocumentIcon } from './Icons'

interface HostSectionProps {
  showToast: (message: string) => void
}

export default function HostSection({ showToast }: HostSectionProps) {
  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      showToast(`${type} berhasil disalin!`)
    } catch (err) {
      showToast('Gagal menyalin ke clipboard')
    }
  }

  const hostData = [
    {
      title: 'Host Mobile (Android/iOS)',
      icon: <DevicePhoneMobileIcon className="w-8 h-8 text-primary-400" />,
      content: `91.103.122.12 www.growtopia1.com
91.103.122.12 www.growtopia2.com`,
      type: 'Host Mobile',
      description: 'Untuk perangkat Android dan iOS'
    },
    {
      title: 'Power Tunnel',
      icon: <BoltIcon className="w-8 h-8 text-primary-400" />,
      content: 'https://growshow.online/host.txt',
      type: 'Power Tunnel',
      description: 'Link untuk Power Tunnel proxy'
    },
    {
      title: 'iOS Surge Configuration',
      icon: <DevicePhoneMobileIcon className="w-8 h-8 text-primary-400" />,
      content: `[General]
bypass-system = true

[Rule]
FINAL,DIRECT

[Host]
www.growtopia1.com = 91.103.122.12
www.growtopia2.com = 91.103.122.12`,
      type: 'iOS Surge',
      description: 'Konfigurasi untuk Surge iOS'
    },
    {
      title: 'Windows Host File',
      icon: <ComputerDesktopIcon className="w-8 h-8 text-primary-400" />,
      content: `91.103.122.12 www.growtopia1.com
91.103.122.12 www.growtopia2.com`,
      type: 'Windows Host',
      description: 'Untuk sistem operasi Windows'
    }
  ]

  const downloadLinks = [
    {
      title: 'PC Launcher',
      icon: <ComputerDesktopIcon className="w-8 h-8 text-primary-400" />,
      url: '/pclauncher.rar',
      description: 'Download launcher khusus PC/Desktop'
    },
    {
      title: 'Virtual Host File',
      icon: <FolderIcon className="w-8 h-8 text-primary-400" />,
      url: 'https://growshow.site/vhost.dat',
      description: 'File host untuk virtual environment'
    }
  ]

  return (
    <section id="host" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-mono glow-text mb-4 sm:mb-6">
            Konfigurasi Koneksi
          </h2>
          <div className="max-w-4xl mx-auto px-4 sm:px-0">
            <p className="text-base sm:text-lg text-primary-300 leading-relaxed">
              Pilih metode koneksi yang sesuai dengan perangkat Anda untuk terhubung ke GrowShow Server dengan mudah dan cepat
            </p>
          </div>
        </div>

        {/* Host Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {hostData.map((host, index) => (
            <div key={index} className="metallic-card p-4 sm:p-6 group relative hover-lift transition-all duration-500">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 space-y-3 sm:space-y-0">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-primary-500/20">
                    {host.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-mono font-bold text-lg sm:text-xl text-primary-200 truncate">
                      {host.title}
                    </h3>
                    <p className="text-primary-400 text-sm leading-relaxed">{host.description}</p>
                  </div>
                </div>
                
                <button
                  onClick={() => copyToClipboard(host.content, host.type)}
                  className="px-3 sm:px-4 py-2 bg-primary-600/30 hover:bg-primary-500/50 border border-primary-500/50 
                           rounded-lg font-mono text-xs sm:text-sm text-primary-200 hover:text-primary-100
                           transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 flex-shrink-0"
                >
                  <ClipboardDocumentIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Copy</span>
                </button>
              </div>

              <div className="bg-darkBlue-900/50 rounded-lg p-3 sm:p-4 border border-primary-600/20 font-mono text-xs sm:text-sm overflow-hidden">
                <pre className="text-primary-300 whitespace-pre-wrap break-all overflow-x-auto">
                  {host.content}
                </pre>
              </div>
            </div>
          ))}
        </div>

        {/* Download Section */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold font-mono text-center glow-text mb-6 sm:mb-8">
            Download Files
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {downloadLinks.map((download, index) => (
              <a
                key={index}
                href={download.url}
                target="_blank"
                rel="noopener noreferrer"
                className="metallic-card p-4 sm:p-6 group hover-lift hover:scale-105 transition-all duration-500 block"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {download.icon}
                  </div>
                  <div>
                    <h4 className="font-mono font-bold text-lg text-primary-200 group-hover:text-primary-100">
                      {download.title}
                    </h4>
                    <p className="text-primary-400 text-sm">{download.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-primary-500 font-mono text-sm">Click to download</span>
                  <div className="w-6 h-6 border-2 border-primary-500 rounded-full flex items-center justify-center
                                group-hover:bg-primary-500 group-hover:text-darkBlue-900 transition-all duration-300">
                    <span className="text-xs">↓</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="metallic-card p-6 sm:p-8 hover-lift transition-all duration-500">
          <h3 className="font-mono font-bold text-xl sm:text-2xl mb-6 sm:mb-8 text-center glow-text">
            Panduan Instalasi
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                step: '1',
                title: 'Choose Platform',
                description: 'Pilih metode host yang sesuai dengan perangkat Anda'
              },
              {
                step: '2',
                title: 'Copy Configuration',
                description: 'Salin konfigurasi host menggunakan tombol copy'
              },
              {
                step: '3',
                title: 'Apply Settings',
                description: 'Terapkan pengaturan pada perangkat atau aplikasi Anda'
              },
              {
                step: '4',
                title: 'Jalankan Game',
                description: 'Buka Growtopia dan nikmati pengalaman bermain terbaik'
              },
              {
                step: '5',
                title: 'Bergabung Komunitas',
                description: 'Bergabung dengan Discord atau WhatsApp untuk bantuan dan update'
              },
              {
                step: '6',
                title: 'Selamat Bermain!',
                description: 'Nikmati pengalaman bermain terbaik di GrowShow Server!'
              }
            ].map((instruction, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 sm:p-4 rounded-lg bg-darkBlue-800/30 border border-primary-600/20 hover:bg-darkBlue-800/50 hover:border-primary-500/30 transition-all duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-500/20 border border-primary-400/50 rounded-full 
                              flex items-center justify-center font-mono font-bold text-primary-300 flex-shrink-0 text-sm sm:text-base">
                  {instruction.step}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-mono font-semibold text-primary-200 mb-1 text-sm sm:text-base">
                    {instruction.title}
                  </h4>
                  <p className="text-primary-400 text-xs sm:text-sm leading-relaxed">
                    {instruction.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="max-w-2xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
            <p className="text-base sm:text-lg text-primary-300 leading-relaxed">
              Butuh bantuan dengan setup? Tim support kami siap membantu!
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
              Get Help on Discord
            </a>
            <a
              href="https://chat.whatsapp.com/LyVphMQX5h43woTO1fu0aZ"
              target="_blank"
              rel="noopener noreferrer"
              className="metallic-button bg-green-600/80 hover:bg-green-500/90 inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            >
              <ChatBubbleLeftRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}