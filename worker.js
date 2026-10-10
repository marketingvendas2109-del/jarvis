/**
 * Cloudflare Worker - Proxy Fish Audio
 * Deploy em https://dash.cloudflare.com/workers
 */

const FISH_API_KEY = "sk-fish-m-b8p5Op9SAYjQkimbIwDpbVhHm0900v-vcvROfiU8Y";
const FISH_API_URL = "https://api.fish.audio/v1/tts";

export default {
  async fetch(request, env, ctx) {
    // CORS headers
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "POST only" }), {
        status: 405,
        headers: { ...headers, "Content-Type": "application/json" },
      });
    }

    try {
      const { text, reference_id } = await request.json();

      if (!text || !reference_id) {
        return new Response(
          JSON.stringify({ error: "Faltam text ou reference_id" }),
          { status: 400, headers: { ...headers, "Content-Type": "application/json" } }
        );
      }

      // Chama Fish Audio
      const fishResponse = await fetch(FISH_API_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${FISH_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          reference_id,
          format: "mp3",
        }),
      });

      if (!fishResponse.ok) {
        const error = await fishResponse.text();
        console.error("Fish Error:", error);
        return new Response(
          JSON.stringify({ error: `Fish HTTP ${fishResponse.status}: ${error.slice(0, 100)}` }),
          { status: 500, headers: { ...headers, "Content-Type": "application/json" } }
        );
      }

      const audioBlob = await fishResponse.blob();

      return new Response(audioBlob, {
        headers: {
          ...headers,
          "Content-Type": "audio/mpeg",
          "Cache-Control": "no-cache",
        },
      });

    } catch (error) {
      console.error("Worker error:", error);
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500, headers: { ...headers, "Content-Type": "application/json" } }
      );
    }
  },
};
