import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import {
  aboutCards,
  aboutHighlights,
  aboutIntro,
  contactInfo,
  heroContent,
  heroImage,
  navItems,
  profileInfo,
  services,
} from './data/site'

function App() {
  return (
    <div className='app'>
      <Header
        items={navItems}
        profile={profileInfo}
        ctaLabel='Agende sua Avaliação'
        ctaHref={contactInfo.whatsappLink}
      />
      <main>
        <Hero
          content={heroContent}
          ctaHref={contactInfo.whatsappLink}
          secondaryHref='#servicos'
          imageSrc={heroImage}
        />
        <About intro={aboutIntro} highlights={aboutHighlights} cards={aboutCards} />
        <Services services={services} />
        <Contact contact={contactInfo} services={services} />
      </main>
      <Footer
        profile={profileInfo}
        items={navItems}
        services={services}
        contact={contactInfo}
      />
      <FloatingWhatsApp href={contactInfo.whatsappLink} />
    </div>
  )
}

export default App
