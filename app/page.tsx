'use client'

import { useEffect, useState } from 'react'
import Sidebar from '@/components/sidebar'
import MainContent from '@/components/main-content'
import { SheetsProvider } from '@/components/context/SheetsContext'
import { SidebarProvider } from '@/components/ui/sidebar'

export default function Home() {
  const [activeSystem, setActiveSystem] = useState('checklist')

  // Restore last selected dashboard after reloads and keep it in sync
  useEffect(() => {
    if (typeof window === 'undefined') return
    const storedSystem = localStorage.getItem('activeSystem')
    if (storedSystem) {
      setActiveSystem(storedSystem)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    localStorage.setItem('activeSystem', activeSystem)
  }, [activeSystem])

  useEffect(() => {
    const methods: (keyof Console)[] = ['log', 'warn', 'error', 'info', 'debug'];
    const originals = methods.map((method) => console[method]);

    // Silence all console output in the browser
    methods.forEach((method) => {
      console[method] = () => {};
    });

    return () => {
      methods.forEach((method, index) => {
        console[method] = originals[index];
      });
    };
  }, [])

  return (
    <SidebarProvider>
      <SheetsProvider>
        <div className="flex min-h-screen w-full flex-col bg-background lg:flex-row">
          <Sidebar activeSystem={activeSystem} onSystemChange={setActiveSystem} />
          <MainContent activeSystem={activeSystem} />
        </div>
      </SheetsProvider>
    </SidebarProvider>
  )
}
