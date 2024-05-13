import {NextRequest} from "next/server";

const GeminiWrapper = require("./gemini-wrapper");

const geminiWrapper: GeminiWrapper = new GeminiWrapper("gemini-pro");
export async function POST(request: NextRequest) {
  const formData = await request.json();
  // @ts-ignore
  const prompt = formData.prompt;
  const res = await geminiWrapper.run(prompt);
  return Response.json({ response: res});
}

export const dynamic = "force-static";