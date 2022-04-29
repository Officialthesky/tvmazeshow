import React, { useEffect, useState } from "react";
import axios from "axios";

import "./index.css";
export default function Showscontainer() {
  const [apiData, setApiData] = useState([]);

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
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
              <img src={shows.show.image.original} alt={shows.show.name} />
              <p className="showName">
                {shows.show.name} <span>({shows.show.language})</span>
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
