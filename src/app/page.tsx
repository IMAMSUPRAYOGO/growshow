'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ServerStatus from '@/components/ServerStatus'
import Features from '@/components/Features'
import HostSection from '@/components/HostSection'
import Footer from '@/components/Footer'
import Toast from '@/components/Toast'

export default function Home() {
  const [toast, setToast] = useState<{ message: string; show: boolean }>({
    message: '',
    show: false
  })

  const showToast = (message: string) => {
    setToast({ message, show: true })
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }))
    }, 3000)
  }

  return (
    <>
      <Navigation />
      <Hero />
      <ServerStatus showToast={showToast} />
      <Features />
      <HostSection showToast={showToast} />
      <Footer />
      <Toast message={toast.message} show={toast.show} />
    </>
  )
}