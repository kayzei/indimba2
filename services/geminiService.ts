
import { GoogleGenAI, Type } from "@google/genai";
import type { Recommendation } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export async function getMusicRecommendations(genre: string): Promise<Recommendation[]> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Provide 5 song recommendations for the genre "${genre}". Include the artist name for each song.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendations: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  songTitle: {
                    type: Type.STRING,
                    description: "The title of the song.",
                  },
                  artist: {
                    type: Type.STRING,
                    description: "The name of the artist or band.",
                  },
                },
                required: ["songTitle", "artist"],
              },
            },
          },
          required: ["recommendations"],
        },
      },
    });

    const jsonString = response.text.trim();
    const parsed = JSON.parse(jsonString);
    
    // Ensure we return an array, even if the API response is faulty
    return parsed.recommendations || [];

  } catch (error) {
    console.error("Error fetching music recommendations:", error);
    // Return an empty array or throw the error, depending on desired error handling
    return [];
  }
}
