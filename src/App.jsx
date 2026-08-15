import Contact from './components/Contact'
import ExperienceTimeline from './components/ExperienceTimeline'
import FeaturedProjects from './components/FeaturedProjects'
import Footer from './components/Footer'
import FounderSection from './components/FounderSection'
import Hero from './components/Hero'
import HowIBuild from './components/HowIBuild'
import ImpactMetrics from './components/ImpactMetrics'
import Navbar from './components/Navbar'
import ProblemSolving from './components/ProblemSolving'
import Profile from './components/Profile'
import Recognition from './components/Recognition'
import SectionRail from './components/SectionRail'
import TechnologyStack from './components/TechnologyStack'
import WhatIBuild from './components/WhatIBuild'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <SectionRail />
      <main>
        <Hero />
        <ImpactMetrics />
        <Profile />
        <WhatIBuild />
        <FeaturedProjects />
        <HowIBuild />
        <ExperienceTimeline />
        <TechnologyStack />
        <ProblemSolving />
        <Recognition />
        <FounderSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
