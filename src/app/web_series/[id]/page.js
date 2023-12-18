import Image from "next/image";
import React from "react";

const WebSeriespageNo = async ({ params }) => {
  const id = params.id;

  const urlweb = `https://imdb-top-100-movies.p.rapidapi.com/series/${id}`;
  const optionsweb = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "18952654bemsh007bdc8966aa229p1310fbjsnf8289594f592",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };
  const response = await fetch(urlweb, optionsweb);
  const result = await response.json();

  
  console.log("result", result);

  return (
    <div className="container mx-10 m-1  text-white">
      <div className="flex flex-col items-center ">
        <div className="text-4xl font-bold text-center">
          <h1 className="py-2">{result.title}</h1>
          Rank : {result.rank} | Year : {result.year}
        </div>

        <div className="flex m-5">
          <Image
            src={result.big_image}
            alt="Movie Poster"
            width={400}
            height={250}
          />

          <div className="flex flex-col gap-3 m-5">
            <p className="text-xl font-bold ">{result.description}</p>

            <p className="font-semibold text-lg">
              Genres: {result.genre}
            </p>
            <p className="font-semibold text-lg">
              Director: {result.director}
            </p>
            <p className="font-semibold text-lg">
              Writers: {result.writers}
            </p>
            <p className="font-semibold text-lg">IMDb ID: {result.imdbid}</p>
            <p className="font-semibold text-lg">Categories : {result.genre.join(", ")}</p>

            <iframe
              width="400"
              height="250"
              src={`https://www.youtube.com/embed/${result.trailer_youtube_id}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebSeriespageNo;
