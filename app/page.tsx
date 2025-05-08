import SelectDate from "@/components/SelectDate";

// const getMovies = async (releaseDate: string) => {
//   const res = await fetch(
//     `http://localhost:3000/api/filter?releaseDate=${releaseDate}`
//   );
//   const data = await res.json();
//   return data;
// };

export default async function Home() {
  // const movies = await getMovies("2025-01-01");

  return (
    <div>
      <h1 className="text-2xl font-bold p-6">Movie Directory</h1>
      <SelectDate />
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {sortedMoviesByDate.map((movie: Movie) => (
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
      </div> */}
    </div>
  );
}
