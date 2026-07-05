import { NextRequest, NextResponse } from "next/server";
import { AI } from "@/lib/ai";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.message) {
      return NextResponse.json(
        {
          error: "Message is required.",
        },
        {
          status: 400,
        }
      );
    }

    const reply = await AI.ask(body.message);

    return NextResponse.json({
      reply,
    });
  } catch (error: unknown) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unknown Error",
      },
      {
        status: 500,
      }
    );
  }
}