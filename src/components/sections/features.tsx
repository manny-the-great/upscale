import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { MonitorUp, UserSquare2, ImageMinus, HardDriveDownload } from "lucide-react"

export function Features() {
  const features = [
    {
      title: "Upscale Resolution",
      description: "Enhance image size without losing quality.",
      icon: <MonitorUp className="w-8 h-8 text-white mb-4" />,
      bullets: ["2x, 4x, 8x", "HD, Ultra HD", "4K Output"]
    },
    {
      title: "AI Face Enhancement",
      description: "Perfectly restore and sharpen facial details.",
      icon: <UserSquare2 className="w-8 h-8 text-white mb-4" />,
      bullets: ["Sharpen faces", "Remove blur", "Restore detail"]
    },
    {
      title: "Photo Restoration",
      description: "Bring old, damaged photos back to life.",
      icon: <ImageMinus className="w-8 h-8 text-white mb-4" />,
      bullets: ["Fix old photos", "Denoise", "Color correction"]
    },
    {
      title: "Smart Compression",
      description: "High quality without the massive file size.",
      icon: <HardDriveDownload className="w-8 h-8 text-white mb-4" />,
      bullets: ["Optimal size", "Preserve details", "Web ready"]
    }
  ]

  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-glow mb-4">
            One powerful place to enhance every image.
          </h2>
          <p className="text-xl text-white/50 max-w-2xl">
            Everything you need to create perfect, high-resolution imagery in a single platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <Card key={idx} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
              <CardHeader>
                {feature.icon}
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
                <ul className="mt-6 space-y-2">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center text-sm text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/50 mr-2" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
