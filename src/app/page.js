import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = async () => {
  // movies api
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

  // webseries api

  const urlweb = "https://imdb-top-100-movies.p.rapidapi.com/series/";
  const optionsweb = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "18952654bemsh007bdc8966aa229p1310fbjsnf8289594f592",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };
  const response = await fetch(urlweb, optionsweb);
  const result = await response.json();
  // console.log(result);

  // anime api

  const Animeurl = "https://api.jikan.moe/v4/anime?q&sfw";

  const Animeresponse = await fetch(Animeurl);
  const Animeresult = await Animeresponse.json();

  const animeData = Animeresult.data.map((el) => ({
    title: el.title,
    image: el.images.jpg.large_image_url,   
    rank: el.rank,  
  }));

  console.log("Anime Data:", animeData);

  return (
    <div className="bg-black">
      <div className="container mx-auto  text-white">
        {/***************************** movie************************* */}

        <div className="py-10 bg">
          <h1 className="text-4xl font-bold text-center">Movies</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {data.slice(0, 4).map((el) => (
            <div
              key={el.id}
              className="bg-black p-4 rounded-md text-center shadow-md transition duration-300 transform hover:scale-105 hover:bg-white hover:text-black"
            >
              <Link href="/movies">
                <div className="flex justify-center">
                  <Image
                    className="p-1 rounded-[50%] "
                    src={el.image}
                    height={50}
                    width={100}
                    alt="movies image"
                  />
                </div>
                <div className="p-1">Rank : {el.rank}</div>
                <div className="p-1">{el.title}</div>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-white flex justify-center p-5 font-semibold">
          <Link href="/movies">
            <button className="border-2 p-3 w-36 hover:bg-white hover:text-black">
              View All
            </button>
          </Link>
        </div>

        {/***************************** Web Series************************* */}

        <div className="py-10 bg">
          <h1 className="text-4xl font-bold text-center">Web Series</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-10">
          {result.slice(0, 4).map((el) => (
            <div
              key={el.id}
              className="bg-black p-4 rounded-md text-center shadow-md transition duration-300 transform hover:scale-105 hover:bg-white hover:text-black"
            >
              <Link href="/web_series">
                <div className="flex justify-center">
                  <Image
                    className="p-1 rounded-[50%] "
                    src={el.image}
                    height={50}
                    width={100}
                    alt="movies image"
                  />
                </div>
                <div className="p-1">Rank : {el.rank}</div>
                <div className="p-1">{el.title}</div>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-white flex justify-center p-5 font-semibold">
          <Link href="/web_series">
            <button className="border-2 p-3 w-36 hover:bg-white hover:text-black">
              View All
            </button>
          </Link>
        </div>

        {/***************************** Anime************************* */}

        <div className="py-10 bg">
          <h1 className="text-4xl font-bold text-center">Anime</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-10">
          {animeData.slice(0, 4).map((el) => (
            <div
              key={el.id}
              className="bg-black p-4 rounded-md text-center shadow-md transition duration-300 transform hover:scale-105 hover:bg-white hover:text-black"
            >
              <Link href="/Anime">
                <div className="flex justify-center">
                  <Image
                    className="p-1 rounded-[50%] "
                    src={el.image}
                    height={50}
                    width={100}
                    alt="movies image"
                  />
                </div>
                <div className="p-1">Rank : {el.rank}</div>
                <div className="p-1">Title : {el.title}</div>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-white flex justify-center p-5 font-semibold">
          <Link href="/Anime">
            <button className="border-2 p-3 w-36 hover:bg-white hover:text-black">
              View All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
