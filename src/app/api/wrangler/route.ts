import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const headers = new Headers();

    if (searchParams.get("question") == "") {
      const body = {
        result: {
          response: "Invalid prompt!",
        },
      };
      return NextResponse.json(body, { status: 500 });
    }

    headers.append(
      "Authorization",
      `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
    );
    headers.append("Content-Type", "application/json");

    const body = {
      prompt: searchParams.get("question"),
    };

    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/ai/run/@cf/meta/llama-3.1-8b-instruct`,
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      },
    );

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Error fetching data", error: e },
      { status: 500 },
    );
  }
}
