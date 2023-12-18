import Image from "next/image";
import Link from "next/link";

const Anime = async () => {
  const Animeurl = "https://api.jikan.moe/v4/anime?q&sfw";

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

//   console.log("Anime Data:", animeData);

  return (


    <div className="bg-black">
      <div className="container mx-auto  text-white">
        <div className="py-10 bg">
          <h1 className="text-4xl font-bold text-center">Anime</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {animeData.map((el) => (
            <Link href={`/Anime/${el.id}`}>
              <div
                key={el.rank}
                className="bg-black p-4 rounded-md shadow-md transition duration-300 transform hover:scale-105 hover:bg-white hover:text-black"
              >
                <div className="p-1">Rank : {el.rank}</div>
                <div className="p-1">Title : {el.title}</div>
                <div className="p-1">Rating : {el.rating}</div>
                <div className="flex justify-center">
                  <Image src={el.imageUrl} height={200} width={250} style={{width:"250", height:"200"}} alt="movies image" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>



    /* <div className="text-white">
      <h1>Anime List</h1>
      {animeData.map((anime) => (
        <div key={anime.title}>
          <h2>{anime.title}</h2>
          <img src={anime.imageUrl} alt={anime.title} />
          <p>Rating: {anime.rating}</p>
          <p>Rank: {anime.rank}</p>
          <p>Synopsis: {anime.synopsis}</p>
        </div>
      ))}
    </div> */
  );
};

export default Anime;
