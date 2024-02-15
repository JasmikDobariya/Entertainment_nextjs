import Image from "next/image";
import React from "react";

const PageNo = async ({ params }) => {
  const id = params.id;

  const url = `https://imdb-top-100-movies.p.rapidapi.com/${id}`;
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
    <div className="container  mx-10 m-2  text-white">
      <div className="flex flex-col items-center ">
        <div className=" font-bold mb-2 text-center" key={data.id}>
          <h1 className="py-2 text-4xl">{data.title}</h1>
          <h2 className="text-3xl">
            Rank : {data.rank} | Year : {data.year}
          </h2>
        </div>

        <div className="flex m-5">
          <Image
            src={data.big_image}
            alt="Movie Poster"
            width={400}
            height={250}
          />

          <div className="flex flex-col gap-4 m-5">
            <p className="text-xl font-bold ">{data.description}</p>

            <p className="font-semibold text-lg">
            Categories: {data.genre.join(", ")}
            </p>
            <p className="font-semibold text-lg">
              Director: {data.director.join(", ")}
            </p>
            <p className="font-semibold text-lg">
              Writers: {data.writers.join(", ")}
            </p>
            <p className="font-semibold text-lg">IMDb ID: {data.imdbid}</p>
            <iframe
              width="400"
              height="250"
              src={`https://www.youtube.com/embed/${data.trailer_youtube_id}`}
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

export default PageNo;
