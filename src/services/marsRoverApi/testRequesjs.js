import { useEffect, useState } from "react";
import "./sass/index.scss";
import axios from "axios";
import PhotoList from "./components/PhotoList";

export function App() {
  const [curiosityPhotos, setCuriosityPhotos] = useState([]);
  const [opportunity, setOpportunity] = useState([]);
  const [perseverance, setPerseverance] = useState([]);
  const [spirit, setSpirit] = useState([]);

  useEffect(() => {
    (async () => {
      var curiosityPhotosConfig = {
        method: "get",
        url: "https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/latest_photos",
        headers: {},
      };
      // var opportunityConfig = {
      //   method: "get",
      //   url: "https://mars-photos.herokuapp.com/api/v1/rovers/opportunity/latest_photos",
      //   headers: {},
      // };
      // var perseveranceConfig = {
      //   method: "get",
      //   url: "https://mars-photos.herokuapp.com/api/v1/rovers/perseverance/latest_photos",
      //   headers: {},
      // };
      // var spiritConfig = {
      //   method: "get",
      //   url: "https://mars-photos.herokuapp.com/api/v1/rovers/spirit/latest_photos",
      //   headers: {},
      // };

      try {
        const curiosityPhotosRes = await axios(curiosityPhotosConfig);
        // const opportunityRes = await axios(opportunityConfig);
        // const perseveranceRes = await axios(perseveranceConfig);
        // const spiritRes = await axios(spiritConfig);

        const curiosityPhotosPhotos = curiosityPhotosRes.data.latest_photos;
        // const opportunityPhotos = opportunityRes.data.latest_photos;
        // const perseverancePhotos = perseveranceRes.data.latest_photos;
        // const spiritPhotos = spiritRes.data.latest_photos;

        setCuriosityPhotos([...curiosityPhotosPhotos]);
        // setOpportunity([...opportunityPhotos]);
        // setPerseverance([...perseverancePhotos]);
        // setSpirit([...spiritPhotos]);

        console.log(curiosityPhotosPhotos[0]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <main className="page">
      <h2>Curiosity Photos</h2>
      <PhotoList photos={curiosityPhotos} />
      {/* <h2>Opportunity</h2>
      <PhotoList photos={opportunity} />
      <h2>Perseverance</h2>
      <PhotoList photos={perseverance} />
      <h2>Spirit</h2>
      <PhotoList photos={spirit} /> */}
    </main>
  );
}
