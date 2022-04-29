import React from "react";
import "./index.css";
import { useLocation } from "react-router-dom";

export default function Showsummary() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="showSummary">
      <div className="summaryNavigation">
        <p>
          HOME / <span>{location.state.name}</span>
        </p>
      </div>
      <div className="showImgAndInfo">
        <div className="showImgAndSummary">
          <img
            className="showImage"
            alt="showImg"
            src={location.state.image.original}
          />
          <p
            className="summary"
            dangerouslySetInnerHTML={{ __html: location.state.summary }}
          ></p>
        </div>
        <div className="showInfo">
          <p>Show Info</p>
          <h6>
            Premiered:<span>{location.state.premiered}</span>
          </h6>
          <h6>
            Schedule:<span>{location.state.schedule.time},</span>
            <span>{location.state.schedule.days}</span>
          </h6>
          <h6>
            Status:<span>{location.state.status}</span>
          </h6>
          <h6>
            Show Type:<span>{location.state.type}</span>
          </h6>
          <h6>
            Official site:<span>{location.state.officialSite}</span>
          </h6>
        </div>
      </div>
    </div>
  );
}
