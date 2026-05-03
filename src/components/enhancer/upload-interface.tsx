"use client"
import { useState, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UploadCloud, Image as ImageIcon, Download, Settings2, SlidersHorizontal, ArrowRight } from "lucide-react"

export function UploadInterface() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isDone, setIsDone] = useState(false)
  
  const [resolution, setResolution] = useState("4K")
  const [mode, setMode] = useState("Full Enhance")

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleFile = (f: File) => {
    if (!f.type.includes("image")) return
    setFile(f)
    const url = URL.createObjectURL(f)
    setPreview(url)
    setIsDone(false)
    setProgress(0)
  }

  const startEnhancement = () => {
    if (!file) return
    setIsProcessing(true)
    setIsDone(false)
    setProgress(0)
    
    // Simulate AI Processing
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsProcessing(false)
          setIsDone(true)
          return 100
        }
        return prev + 5
      })
    }, 200)
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-glow mb-4">Enhance Workspace</h2>
          <p className="text-white/50">Upload an image to start the AI transformation process.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Workspace Area */}
          <div className="lg:col-span-2">
            <Card className="p-1 h-[600px] flex flex-col bg-black/60 border-white/10 overflow-hidden relative">
              
              {!preview ? (
                <div 
                  className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-white/10 rounded-xl m-4 hover:border-white/30 transition-colors cursor-pointer bg-white/5"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <UploadCloud className="w-16 h-16 text-white/40 mb-6" />
                  <h3 className="text-xl font-medium mb-2">Drag & Drop Image Here</h3>
                  <p className="text-sm text-white/40 mb-6">Supports JPG, PNG, WEBP up to 20MB</p>
                  <Button variant="outline" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>
                    Browse Files
                  </Button>
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/jpeg, image/png, image/webp" 
                    onChange={(e) => e.target.files && handleFile(e.target.files[0])}
                  />
                </div>
              ) : (
                <div className="relative flex-1 flex items-center justify-center bg-black/80 rounded-xl overflow-hidden group m-4 border border-white/10">
                  {/* Image Preview (Simulated Before/After slider can be added here) */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={preview} alt="Preview" className={`max-h-full max-w-full object-contain transition-all duration-1000 ${isDone ? 'brightness-110 contrast-125 saturate-150' : 'opacity-80'}`} />
                  
                  {isProcessing && (
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center">
                      <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mb-4">
                        <div className="h-full bg-white transition-all duration-200" style={{ width: `${progress}%` }} />
                      </div>
                      <p className="font-mono text-sm tracking-widest uppercase">Enhancing {progress}%</p>
                    </div>
                  )}

                  {!isProcessing && !isDone && (
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="outline" onClick={() => setPreview(null)}>Change Image</Button>
                    </div>
                  )}
                </div>
              )}
            </Card>
          </div>

          {/* Settings Panel */}
          <div className="flex flex-col gap-6">
            <Card className="p-6 bg-black/60 border-white/10 flex-1">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                <Settings2 className="w-5 h-5 text-white/70" />
                <h3 className="font-semibold text-lg">Enhancement Settings</h3>
              </div>

              <div className="space-y-8">
                {/* Resolution */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-white/70 flex items-center gap-2">
                    <ImageIcon className="w-4 h-4" /> Target Resolution
                  </label>
                  <select 
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20 appearance-none cursor-pointer"
                    value={resolution}
                    onChange={(e) => setResolution(e.target.value)}
                  >
                    <option className="bg-black">HD (720p)</option>
                    <option className="bg-black">Full HD (1080p)</option>
                    <option className="bg-black">2K</option>
                    <option className="bg-black">4K</option>
                    <option className="bg-black">8K</option>
                  </select>
                </div>

                {/* AI Mode */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-white/70 flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4" /> AI Model
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Sharpen", "Denoise", "Face Restore", "Color Boost", "Full Enhance"].map((m) => (
                      <button
                        key={m}
                        onClick={() => setMode(m)}
                        className={`text-xs py-3 px-2 rounded-lg border transition-all text-center ${
                          mode === m 
                            ? "bg-white text-black border-white font-semibold shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
                            : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-8">
                {isDone ? (
                  <Button className="w-full h-14 text-lg rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    <Download className="w-5 h-5 mr-2" /> Download Enhanced
                  </Button>
                ) : (
                  <Button 
                    className="w-full h-14 text-lg rounded-xl" 
                    onClick={startEnhancement}
                    disabled={!file || isProcessing}
                  >
                    {isProcessing ? "Processing..." : "Enhance Now"} 
                    {!isProcessing && <ArrowRight className="w-5 h-5 ml-2" />}
                  </Button>
                )}
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  )
}
