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
    </div>
  );
}
