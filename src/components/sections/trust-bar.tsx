export function TrustBar() {
  const partners = [
    "Designers",
    "Photographers",
    "E-commerce Sellers",
    "Content Creators",
    "Agencies"
  ]

  return (
    <section className="py-12 border-y border-white/5 bg-black/40">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <p className="text-sm font-semibold text-white/40 tracking-wider uppercase">Trusted by</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div key={partner} className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
              <div className="w-5 h-5 rounded bg-white/20" />
              <span className="font-medium text-lg">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
