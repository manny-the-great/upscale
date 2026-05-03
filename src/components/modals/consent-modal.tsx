"use client"
import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"

export function ConsentModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check local storage to see if user has already agreed
    const hasAgreed = localStorage.getItem("enhanceAI_consent")
    if (!hasAgreed) {
      setIsOpen(true)
    }
  }, [])

  const handleAgree = () => {
    localStorage.setItem("enhanceAI_consent", "true")
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <Card className="max-w-md w-full bg-black border-white/10 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="p-6">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
            <Info className="w-6 h-6 text-white" />
          </div>
          
          <h2 className="text-2xl font-bold tracking-tight mb-4 text-glow">Before You Upload</h2>
          
          <p className="text-white/60 mb-8 leading-relaxed">
            By uploading an image, you confirm that you own the rights or have permission to enhance it, and that your content complies with platform guidelines.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={handleAgree} className="flex-1 font-semibold">
              I Agree & Continue
            </Button>
            <Button variant="outline" className="flex-1">
              Cancel
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
