"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Grid Collage - CSS/Abstract fallback since image generation failed */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 h-full transform scale-110 rotate-1">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className={`rounded-xl bg-gradient-to-br ${
                i % 3 === 0 ? 'from-indigo-900/40 to-black' : 
                i % 4 === 0 ? 'from-emerald-900/40 to-black' : 
                'from-white/5 to-white/10'
              } border border-white/5 animate-pulse`}
              style={{ animationDelay: `${i * 0.1}s`, animationDuration: '4s' }}
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter max-w-5xl mx-auto leading-tight text-glow"
        >
          Enhance your images to stunning high definition.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Upscale, sharpen, restore, and transform low quality images into crystal clear visuals using advanced AI.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href="#enhance-now">
            <Button size="lg" className="text-lg px-10 py-6 rounded-full w-full sm:w-auto shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Upload Image
            </Button>
          </Link>
          <Link href="#features">
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 rounded-full w-full sm:w-auto">
              Learn More
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
