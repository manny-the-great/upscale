import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN || "",
});

export async function POST(req: NextRequest) {
  try {
    if (!process.env.REPLICATE_API_TOKEN) {
      return NextResponse.json({ error: "Replicate API token is not configured in environment variables." }, { status: 500 });
    }

    const body = await req.json();
    const { image, mode, resolution } = body;

    if (!image) {
      return NextResponse.json({ error: "Image is required" }, { status: 400 });
    }

    // Determine scale based on resolution requested
    let scale = 2;
    if (resolution === "4K" || resolution === "8K") scale = 4;
    
    // Determine face enhancement based on mode
    let face_enhance = false;
    if (mode === "Face Restore" || mode === "Full Enhance") {
      face_enhance = true;
    }

    // Run nightmareai/real-esrgan
    const output = await replicate.run(
      "nightmareai/real-esrgan:42fed1c4974146d4d2414e2be2c5277c7fcf05fcc3a73abf41610695738c1d7b",
      {
        input: {
          image: image,
          scale: scale,
          face_enhance: face_enhance,
        }
      }
    );

    return NextResponse.json({
      success: true,
      enhancedImageUrl: output, 
    });

  } catch (error: unknown) {
    console.error("Enhancement error:", error);
    const msg = error instanceof Error ? error.message : "Failed to process image";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
