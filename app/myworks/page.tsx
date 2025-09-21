import ArcGalleryHero from "@/components/arc-gallery-hero"
import MyWorksSection from "@/components/my-works-section"
import { BackToHome } from "@/components/back-to-home"
import techLogos from "./tech-logos"
export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <div className="absolute top-6 left-6 z-50">
        <BackToHome />
      </div>
      <ArcGalleryHero
        images={techLogos.map(logo => logo.logo)}
        startAngle={0}
        endAngle={180}
        radiusLg={500}
        radiusMd={360}
        radiusSm={180}
        cardSizeLg={100}
        cardSizeMd={80}
        cardSizeSm={40}
        className="pt-16 pb-0 md:pt-20 md:pb-0 lg:pt-24"
      />
      <MyWorksSection />
    </main>
  )
}
