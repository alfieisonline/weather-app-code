import { useEffect, useState } from "react";
import "./App.css";
import DayOfWeek from "./Components/Cards/DayOfWeek";
import axios from "axios";
import MainLeftTop from "./Components/Sections/MainLeftTop";
import ExtensionTaskModal from "./Components/ExtensionTaskModal";

function App() {
  const [location, setLocation] = useState("Bilbao");
  const [loading, setLoading] = useState(true);
  const [weatherObject, setWeatherObject] = useState();
  const [showModal, setShowModal] = useState(false);
  const [backgroundImg, setBackgroundImg] = useState(
    `https://source.unsplash.com/random/?${location}`
  );
  const [indexForModal, setIndexForModal] = useState(1);

  // if this were a larger project i would use a custom hook for making this call but it isnt necessary here

  async function makeCall() {
    setLoading(true);
    let data = await axios.post(`https://bigfluffyelephant123.herokuapp.com/weather/${location}`);
    if (data?.data && data.data.daily) {
      data.data.daily.forEach((day, index) => {
        if (index > 0) {
          day.dayName = new Date(day.dt * 1000).toLocaleDateString("en", {
            weekday: "short",
          });

          const milliseconds = day.dt * 1000;
          const dateObject = new Date(milliseconds);
          day.date = dateObject;
        }
      });
      setBackgroundImg(`https://source.unsplash.com/random/?${location}`);
      setWeatherObject(data.data);
      setLoading(false);
    }
  }

  useEffect(() => {
    makeCall();
  }, []);

  function LoadModal(i) {
    setIndexForModal(i);
    setShowModal(true);
  }

  if (loading) {
    return <div>hello</div>;
  }

  return (
    <div
      className="PageContainer"
      style={{ backgroundImage: "url(" + backgroundImg + ")" }}
    >
      <div className="PageContainerTop">
        <MainLeftTop weatherObject={weatherObject} location={location} />
        <div className="PageContainerTopSearch">
          <div className="Location">{location}</div>
          <input
            value={location}
            // className="form"
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Enter Location"
            type="text"
          />
          <button onClick={() => makeCall(location)} className="button">
            Search Weather
          </button>
        </div>
      </div>
      {showModal && (
        <ExtensionTaskModal
          informationObject={weatherObject}
          index={indexForModal}
          location={location}
          close={() => setShowModal(false)}
        />
      )}
      <div className="PageContainerBottom">
        {loading
          ? "Getting weather for location"
          : weatherObject?.daily.map((item, index) => {
              return (
                <div onClick={() => LoadModal(index)}>
                  <DayOfWeek
                    Day={item.dayName}
                    temp={item.temp}
                    img={item.weather[0].icon}
                    date={item.date}
                    text={item.weather[0].description}
                    windSpeed={item.wind_speed}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default App;
