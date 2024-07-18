import { createOllama } from "ollama-ai-provider";
import { StreamingTextResponse, streamText } from "ai";
import type { APIRoute } from "astro";

const ollama = createOllama();

export const POST: APIRoute = async ({ request }) => {
  const { messages } = await request.json();

  const result = await streamText({
    model: ollama("phi3"),
    messages,
  });

  return new StreamingTextResponse(result.toAIStream());
};
