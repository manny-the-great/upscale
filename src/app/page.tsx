import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Features } from "@/components/sections/features";
import { UploadInterface } from "@/components/enhancer/upload-interface";
import { Pricing } from "@/components/sections/pricing";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <Hero />
      <TrustBar />
      <Features />
      <div id="enhance-now" className="scroll-mt-24">
        <UploadInterface />
      </div>
      <Pricing />
    </div>
  );
}
