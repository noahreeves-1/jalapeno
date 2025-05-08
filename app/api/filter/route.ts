import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const releaseDate = searchParams.get("releaseDate");

  if (!releaseDate) {
    return NextResponse.json(
      { error: "Missing releaseDate parameter" },
      { status: 400 }
    );
  }

  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=62df2cd3a4881de6558bc68cd67cca20&release_date.gte=${releaseDate}`
  );
  const data = await res.json();

  return NextResponse.json(data.results);
}
