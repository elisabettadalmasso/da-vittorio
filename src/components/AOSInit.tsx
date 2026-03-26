"use client"
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AOSInit() {
  const pathname = usePathname()

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    })
  }, [])

  useEffect(() => {
    AOS.refresh()  // ← refresh quando cambi pagina!
  }, [pathname])

  return null
}