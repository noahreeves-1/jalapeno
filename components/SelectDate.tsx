"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import { Input } from "@/components/ui/input";

// Movie type definition
type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

const fetchMovies = async (releaseDate: string): Promise<Movie[]> => {
  const res = await fetch(`/api/filter?releaseDate=${releaseDate}`);
  if (!res.ok) return [];
  return res.json();
};

const sortedMoviesByDate = (movies: Movie[]) => {
  return movies.sort((a: Movie, b: Movie) => {
    return (
      new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
    );
  });
};

export default function SelectDate() {
  const [date, setDate] = useState("2025-01-01");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchMovies(date).then((data) => {
      setMovies(sortedMoviesByDate(data));
      setLoading(false);
    });
  }, [date]);

  return (
    <div>
      <h1 className="text-2xl font-bold p-6">Movie Directory</h1>
      <Input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="mb-4"
      />
      {loading ? (
        <p className="p-6">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {movies.map((movie: Movie) => (
            <Card key={movie.id} className="hover:scale-105 transition-all">
              <CardContent>
                <CardHeader>
                  <CardTitle>{movie.title}</CardTitle>
                </CardHeader>
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  width={500}
                  height={750}
                  className="rounded-lg"
                  priority
                />
                <p className="mt-2 text-sm text-muted-foreground">
                  {movie.release_date}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
