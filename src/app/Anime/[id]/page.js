// "use client"

// import React, { useEffect, useState } from "react";

// const AnimepageNo = ({ params }) => {
//   const id = params.id;
//   const [animeData, setAnimeData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const Animeresponse = await fetch(`https://api.jikan.moe/v4/anime?q=id/${id}`);
//         const Animeresult = await Animeresponse.json();

//         // Check the actual structure of the API response and adjust the property names accordingly

//         const datas = Animeresult.data;

//         const data = {
//           id: datas?.mal_id,
//           title: datas?.title,
//           imageUrl: datas?.images?.jpg?.large_image_url,
//           rating: datas?.score,
//           rank: datas?.rank,
//           synopsis: datas?.synopsis,
//           // Add other properties as needed
//         };

//         setAnimeData(data);
//         setLoading(false);
//       } catch (error) {
//         setError("Error fetching data");
//         setLoading(false);
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [id]);
  

//   return (
//     <div className="container mx-10 m-2 text-white">
//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
//       {animeData && (
//         <div className="flex flex-col items-center">
//           <h1 className="py-2 text-4xl">{animeData.title}</h1>
//           <h2 className="text-3xl">
//             Rank: {animeData.rank} | Year: {animeData.year}
//           </h2>
//           {/* Add the rest of your rendering logic */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AnimepageNo;
