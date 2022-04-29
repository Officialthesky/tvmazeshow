import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./index.css";
export default function Showscontainer() {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  const getApiData = async () => {
    await axios({
      method: "get",
      url: `https://api.tvmaze.com/search/shows?q=all`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openShowSummary = (shows) => {
    navigate(`/${shows.show.id}`, { state: shows.show });
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="showsContainer">
      <div className="showswithDetails">
        {apiData?.map((shows, index) => {
          return (
            <div key={index} className="showImgAndDetails">
              <img
                src={shows.show.image.original}
                alt={shows.show.name}
                onClick={() => openShowSummary(shows)}
              />
              <p className="showName" onClick={() => openShowSummary(shows)}>
                {shows.show.name}
              </p>{" "}
              <p className="showGenres">
                {shows.show.genres.map((item, ind) => {
                  return (
                    <>
                      {item}

                      {shows.show.genres.length - 1 === ind ? "" : ","}
                    </>
                  );
                })}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
