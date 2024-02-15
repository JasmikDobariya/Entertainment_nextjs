import Image from "next/image";
import Link from "next/link";
import React from "react";


const Movies = async () => {
  const url = "https://imdb-top-100-movies.p.rapidapi.com/";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "18952654bemsh007bdc8966aa229p1310fbjsnf8289594f592",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  // console.log("data", data);

  return (
    <div className="bg-black">
      <div className="container mx-auto  text-white">
        <div className="py-10 bg">
          <h1 className="text-4xl font-bold text-center">Rank Movie</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {data.map((el) => (
            <Link href={`/movies/${el.id}`}>
              <div
                key={el.id}
                className="bg-black p-4 rounded-md shadow-md transition duration-300 transform hover:scale-105 hover:bg-white hover:text-black"
              >
                <div className="p-1">Rank : {el.rank}</div>
                <div className="p-1">Title : {el.title}</div>
                <div className="p-1">Rating : {el.rating}</div>
                <div className="flex justify-center">
                  <Image src={el.image} height={200} width={250} alt="movies image" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
