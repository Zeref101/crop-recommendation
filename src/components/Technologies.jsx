import Card from "./Card";
import axios from "axios";
import { useState } from "react";
import react from "../assets/react.png";
import therm from "../assets/temp.png";
import humid from "../assets/hum.png";
import light from "../assets/light.png";
import sm from "../assets/sm.jpeg";
import tcss from "../assets/tcss.svg";
import flask from "../assets/flask.svg";
import lg from "../assets/lr.png";
import uno from "../assets/uno.svg";
import dht from "../assets/dht22.svg";
import ldr from "../assets/ldr.png";
import esp from "../assets/esp.webp";
// import rice from "../assets/rice.jpg"
import { cropData } from "../cropData";
function Technologies() {
  async function fetchData() {
    const res = await axios.get("http://localhost:5000/get_recommendation");
    let crop = res.data.RecommendedCrop;
    let rain = res.data.Rainfall;
    let hum = res.data.Humidity;
    let light = res.data.Light;
    let temp = res.data.Temperature;
    setData(() => {
      return {
        crop: crop,
        rain: rain,
        hum: hum,
        l: light,
        temp: temp,
      };
    });

    setCropAvailable(true);

    const desiredNewCrop = cropData.find((crop) => crop.crop === data.crop);
    setCrop(desiredNewCrop || null);
  }
  const [data, setData] = useState({
    crop: "",
    rain: 0.0,
    hum: 0.0,
    l: 0,
    temp: 0.0,
  });
  const [desiredCrop, setCrop] = useState(null);
//   const desiredCrop = {
//     "crop": "rice",
//     "img" : rice,
//     "cli": "Paddy can be grown under widely varying conditions of altitude and climate. Rice can be cultivated as high as 3000 m (mean sea level). Basically, Rice crop requires hot and humid climatic conditions for its successful cultivation. Rice crop is suited for the regions where abundant water supply, high humid and prolonged sunshine is available. The ideal temperature required throughout the life period of the crop ranges from 20°C to 40°C. However, the rice crop can tolerate the temperature up to 42°C.",
//     "soil": "Rice can be cultivated on a wide variety of soils such as silts, loams, and gravels and can tolerate acidic as well as alkaline soils. However, deep fertile (rich in organic matter) clayey or loamy soils which can easily be puddled into the mud and develop cracks on drying conditions are considered to be ideal for growing rice crop."
// };
  const [cropAvailable, setCropAvailable] = useState(false);

  return (
    <div>
      <div className="tech-cards frontEnd">
        <span
          data-aos="fade-up"
          data-aos-duration="600"
          className="performance-heading"
        >
          FrontEnd Technologies
        </span>
        <div className="tech-cards-fr">
          <Card img={react} name="REACTJS"></Card>
          <Card img={tcss} name="TAILWINDCSS"></Card>
        </div>
      </div>
      <div className="tech-cards">
        <span
          data-aos="fade-up"
          data-aos-duration="600"
          className="performance-heading"
        >
          BackEnd Technologies
        </span>
        <div className="tech-cards-fr">
          <Card img={flask} name="FLASK"></Card>
          <Card img={lg} name="Logistic Regression"></Card>
        </div>
      </div>
      <div className="tech-cards frontEnd">
        <span
          data-aos="fade-up"
          data-aos-duration="600"
          className="performance-heading"
        >
          Hardware Technologies
        </span>
        <div className="tech-cards-fr">
          <Card img={uno} name="Arduino Uno R3"></Card>
          <Card img={dht} name="DHT22 Sensor"></Card>
          <Card img={ldr} name="Light Intensity Sensor"></Card>
          <Card img={sm} name="Soil Moisture Sensor"></Card>
          <Card img={esp} name="ESP8266 Wifi Module"></Card>
        </div>
      </div>
      <div className="data w-full flex flex-col items-center h-auto">
        <h1
          data-aos="fade-up"
          data-aos-duration="600"
          className="params text-7xl performance-heading mt-5"
        >
          Parameters
        </h1>
        <section className="p-6 my-6 dark:text-gray-100 w-full ">
          <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-primary-grey-#1e2127 dark:text-gray-100"
            >
              <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-primary-green-#c8ea61">
                <img src={therm} alt="" />
              </div>
              <div className="flex flex-col justify-center align-middle">
                <p className="text-3xl font-semibold leadi">{data.temp}</p>
                <p className="capitalize">Temperature</p>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-primary-grey-#1e2127 dark:text-gray-100"
            >
              <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-primary-green-#c8ea61">
                <img src={light} alt="" />
              </div>
              <div className="flex flex-col justify-center align-middle">
                <p className="text-3xl font-semibold leadi">{data.l}</p>
                <p className="capitalize">Light Intensity</p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-primary-grey-#1e2127 dark:text-gray-100"
            >
              <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-primary-green-#c8ea61">
                <img src={humid} alt="" />
              </div>
              <div className="flex flex-col justify-center align-middle">
                <p className="text-3xl font-semibold leadi">{data.hum}</p>
                <p className="capitalize">Humidity</p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-primary-grey-#1e2127 dark:text-gray-100"
            >
              <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-primary-green-#c8ea61">
                <img src={sm} alt="" />
              </div>
              <div className="flex flex-col justify-center align-middle">
                <p className="text-3xl font-semibold leadi">{data.rain}</p>
                <p className="capitalize">Soil Moisture</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="buttons flex justify-center items-center h-56 w-full gap-6">
        <button
          className="btn-donate m-6 btn-custom"
          onClick={() => {
            fetchData();
          }}
        >
          Get Conditions
        </button>
        <button className="plant m-6 btn-custom">Get Crop</button>
      </div>

      {cropAvailable && (
        <section className="flex justify-center items-center w-full h-[100vh]">
          <div className="flex flex-col justify-center items-center w-1/2 h-[100vh] ">
            <div className="flex flex-col justify-center items-center gap-8 w-1/2">
              <span className="text-primary-green-#c8ea61 text-4xl font-extrabold ">{(desiredCrop.crop).toUpperCase()}</span>
              <img className="w-[30rem] h-auto rounded-2xl mb-[4rem]" src={desiredCrop.img} alt="crop-image" />
            </div>
            <div className="flex flex-col justify-center items-center gap-10">
              <div className="text-primary-green-#c8ea61 text-2xl rounded-3xl bg-primary-grey-#1e2127 p-7 flex flex-col justify-start gap-5">
                <span className="font-extrabold">CLIMATE</span>
                <span>{desiredCrop.cli}</span>
                </div>
              <div className="text-primary-green-#c8ea61 text-2xl rounded-3xl bg-primary-grey-#1e2127 p-7 flex flex-col justify-start gap-5">
                <span className="font-extrabold">SOIL</span>
                <span>{desiredCrop.soil}</span>
                </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Technologies;
