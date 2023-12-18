import Image from "next/image";
import React from "react";

const AnimepageNo = async ({ params }) => {
  const id = params.id;

  const Animeurl = `https://api.jikan.moe/v4/anime?q&sfw/${id}`;

  const Animeresponse = await fetch(Animeurl);
  const Animeresult = await Animeresponse.json();

  const animeData = Animeresult.data.map((el) => ({
    id: el.mal_id,
    title: el.title,
    imageUrl: el.images.jpg.large_image_url,
    rating: el.score,
    rank: el.rank,
    synopsis: el.synopsis,
  }));

  console.log("object", animeData.id);

  return (
    <div className="container  mx-10 m-2  text-white">
      <div className="flex flex-col items-center ">
        <div className=" font-bold mb-2 text-center">
          <h1 className="py-2 text-4xl">{animeData.title}</h1>
          <h2 className="text-3xl">
            Rank : {Animeresult.rank} | Year : {Animeresult.year}
          </h2>
        </div>

        <div className="flex m-5">
          <Image
            src={animeData.imageUrl}
            alt="Movie Poster"
            width={400}
            height={250}
          />

          <div className="flex flex-col gap-4 m-5">
            <p className="text-xl font-bold ">{animeData.description}</p>

            <p className="font-semibold text-lg">
              Categories: {animeData.genre}
            </p>
            <p className="font-semibold text-lg">
              Director: {animeData.director}
            </p>
            <p className="font-semibold text-lg">
              Writers: {animeData.writers}
            </p>
            <p className="font-semibold text-lg">IMDb ID: {animeData.imdbid}</p>
            <iframe
              width="400"
              height="250"
              src={`https://www.youtube.com/embed/${animeData.trailer_youtube_id}`}
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

export default AnimepageNo;
