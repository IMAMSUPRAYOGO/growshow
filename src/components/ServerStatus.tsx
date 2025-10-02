'use client'

import { useState, useEffect } from 'react'
import { ClockIcon, UsersIcon, WrenchScrewdriverIcon, GlobeAltIcon, ArrowPathIcon, BoltIcon } from './Icons'

interface ServerStatusProps {
  showToast: (message: string) => void
}

export default function ServerStatus({ showToast }: ServerStatusProps) {
  const [serverStatus, setServerStatus] = useState<{
    online: boolean
    uptime: string
    players: number
    loading: boolean
  }>({
    online: false,
    uptime: 'Checking...',
    players: 0,
    loading: true
  })

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        // Simulate API calls for demo
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        setServerStatus({
          online: true,
          uptime: '4 days, 12 hours',
          players: 1247,
          loading: false
        })
      } catch (error) {
        setServerStatus(prev => ({
          ...prev,
          online: false,
          loading: false
        }))
      }
    }

    fetchServerStatus()
    const interval = setInterval(fetchServerStatus, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="status" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-mono glow-text mb-4 sm:mb-6">
            Server Status
          </h2>
          <div className="max-w-3xl mx-auto px-4 sm:px-0">
            <p className="text-base sm:text-lg text-primary-300 leading-relaxed">
              Pantau performa server secara real-time dan dapatkan informasi terkini tentang aktivitas pemain
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Server Online Status */}
          <div className="metallic-card p-6 sm:p-8 text-center hover-lift transition-all duration-500">
            <div className="mb-6">
              <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-4 ${
                serverStatus.loading 
                  ? 'bg-gray-500/20 animate-pulse' 
                  : serverStatus.online 
                    ? 'bg-green-500/20 animate-pulse-slow' 
                    : 'bg-red-500/20'
              }`}>
                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${
                  serverStatus.loading 
                    ? 'bg-gray-400' 
                    : serverStatus.online 
                      ? 'bg-green-400 shadow-glow animate-glow' 
                      : 'bg-red-400'
                }`} />
              </div>
              <h3 className="font-mono font-bold text-lg sm:text-xl mb-2">Server Status</h3>
              <p className={`text-xl sm:text-2xl font-bold ${
                serverStatus.loading 
                  ? 'text-gray-400' 
                  : serverStatus.online 
                    ? 'status-online' 
                    : 'status-offline'
              }`}>
                {serverStatus.loading ? 'Checking...' : serverStatus.online ? 'ONLINE' : 'OFFLINE'}
              </p>
            </div>
          </div>

          {/* Server Uptime */}
          <div className="metallic-card p-6 sm:p-8 text-center hover-lift transition-all duration-500">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary-500/20 mb-4">
                <ClockIcon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400" />
              </div>
              <h3 className="font-mono font-bold text-lg sm:text-xl mb-2">Server Uptime</h3>
              <p className="text-xl sm:text-2xl font-bold text-primary-300">
                {serverStatus.uptime}
              </p>
            </div>
          </div>

          {/* Active Players */}
          <div className="metallic-card p-6 sm:p-8 text-center sm:col-span-2 lg:col-span-1 hover-lift transition-all duration-500">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary-500/20 mb-4">
                <UsersIcon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400" />
              </div>
              <h3 className="font-mono font-bold text-lg sm:text-xl mb-2">Active Players</h3>
              <p className="text-xl sm:text-2xl font-bold text-primary-300">
                {serverStatus.loading ? '---' : serverStatus.players.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Server Information */}
        <div className="metallic-card p-6 sm:p-8 hover-lift transition-all duration-500">
          <h3 className="font-mono font-bold text-xl sm:text-2xl mb-6 sm:mb-8 text-center glow-text">
            Informasi Detail Server
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { label: 'Server Version', value: 'GrowShow v4.28', icon: <WrenchScrewdriverIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" /> },
              { label: 'Max Players', value: '2500 Players', icon: <UsersIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" /> },
              { label: 'Server Location', value: 'Singapore', icon: <GlobeAltIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" /> },
              { label: 'Last Restart', value: '4 days ago', icon: <ArrowPathIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" /> },
              { label: 'World Count', value: '50,000+', icon: <GlobeAltIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" /> },
              { label: 'Response Time', value: '<50ms', icon: <BoltIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" /> }
            ].map((info, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 sm:p-4 rounded-lg bg-darkBlue-800/30 border border-primary-600/20 hover:bg-darkBlue-800/50 hover:border-primary-500/30 transition-all duration-300">
                <div className="flex-shrink-0">{info.icon}</div>
                <div className="min-w-0 flex-1">
                  <p className="text-primary-400 text-xs sm:text-sm font-mono truncate">{info.label}</p>
                  <p className="text-primary-200 font-semibold text-sm sm:text-base">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}