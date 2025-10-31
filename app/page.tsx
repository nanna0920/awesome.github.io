import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Values } from "@/components/values"
import { Collections } from "@/components/collections"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Values />
      <Collections />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
