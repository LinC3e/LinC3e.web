import Image from 'next/image'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import AboutSection from './components/AboutSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar/>
      <div className='container mt-24 mx-auto py-4 px-12'>
        <HeroSection/>
        <AboutSection/>
      </div>
    </main>
  )
}
