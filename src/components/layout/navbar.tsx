import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Custom AI Enhancer Logo */}
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-sm transform rotate-45" />
          </div>
          <span className="font-bold text-xl tracking-tight text-glow">EnhanceAI X</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
          <Link href="#features" className="text-white/70 hover:text-white transition-colors">Features</Link>
          <Link href="#pricing" className="text-white/70 hover:text-white transition-colors">Pricing</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link href="#enhance-now">
            <Button className="rounded-full font-semibold px-8">
              Enhance Now
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
