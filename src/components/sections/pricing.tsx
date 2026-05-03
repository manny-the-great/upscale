import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function Pricing() {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for testing the AI capabilities.",
      features: ["Standard HD output", "Watermarked preview", "Basic denoise", "Community support"],
      buttonText: "Start Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      description: "For creators who need the best quality.",
      features: ["4K / 8K output", "Full quality download", "Faster processing", "Advanced face restore"],
      buttonText: "Upgrade to Pro",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "High volume processing for teams.",
      features: ["Bulk enhancement", "API access", "Dedicated server", "Priority support"],
      buttonText: "Contact Sales",
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-glow mb-4">
            Simple, transparent pricing.
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Choose the plan that fits your enhancement needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, idx) => (
            <Card key={idx} className={`relative flex flex-col ${tier.popular ? 'border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.1)]' : 'border-white/10'}`}>
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-1 text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <CardDescription className="h-10">{tier.description}</CardDescription>
                <div className="mt-4 flex items-baseline text-4xl font-extrabold">
                  {tier.price}
                  {tier.price !== "Custom" && <span className="ml-1 text-xl font-medium text-white/50">/mo</span>}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-white/80">
                      <Check className="w-4 h-4 mr-3 text-white/60" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={tier.popular ? "default" : "outline"}>
                  {tier.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
