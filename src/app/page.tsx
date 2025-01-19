import { Metadata } from "next";
import Navigation from "./comp/Navigation"
import Hero from "./comp/Hero"
import News from "./comp/News"
import Footer from "./comp/Footer"

export const metadata: Metadata = {
  title: "welcome | komako!",
  description: "",
};

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen"
      style={{ 
      height: '100%',
      width: '100%',
      }}>
      <div 
      className="absolute z-[-5] inset-0 bg-center opacity-25"
      style={{ 
      backgroundImage: 'url(/assets/bg.png)', 
      minHeight: '100vh',
      }}
      ></div>

      <div 
      className="relative flex-1 max-w-[1000px] mx-auto font-[family-name:var(--font-helvetica-neue)]">
        <Navigation />
        <div className="flex flex-col gap-[20px]">
          <Hero />
          <News />
        </div>
      </div>
      <Footer className="mt-auto" />
      
    </main>
  );
}