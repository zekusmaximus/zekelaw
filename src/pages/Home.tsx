/**
 * Home — single-page landing for [FIRM NAME].
 * Design: "Hartford After Dark" cinematic dark + gold.
 * All section components live under client/src/components/site/.
 */
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Introduction from "@/components/site/Introduction";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import Credentials from "@/components/site/Credentials";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <About />
        <Services />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
