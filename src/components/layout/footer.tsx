import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/50 mt-auto">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-sm transform rotate-45" />
          </div>
          <span className="font-semibold tracking-tight text-white/80">EnhanceAI X</span>
        </div>
        
        <div className="flex items-center gap-8 text-sm text-white/50">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          <Link href="#" className="hover:text-white transition-colors">Contact</Link>
          <Link href="#" className="hover:text-white transition-colors">API Access</Link>
        </div>
        
        <div className="text-sm text-white/30">
          &copy; {new Date().getFullYear()} EnhanceAI X. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
