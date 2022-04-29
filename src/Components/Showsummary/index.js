import React, { useState } from "react";
import "./index.css";
import { useLocation } from "react-router-dom";
import Modal from "../Modal";

export default function Showsummary() {
  const location = useLocation();
  const [openModalBox, setOpenModalBox] = useState();
  const toggleModal = () => {
    setOpenModalBox(!openModalBox);
  };
  return (
    <>
      <div className="showSummary">
        <div className="summaryNavigation">
          <p>
            HOME / <span>{location.state.name}</span>
          </p>
        </div>
        <div className="showImgAndInfo">
          <div className="showImgAndSummary">
            <div className="showImgAndBookBtn">
              <img
                className="showImage"
                alt="showImg"
                src={location.state.image.original}
              />
              <button onClick={toggleModal}>Book Show</button>
            </div>

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
      <Modal
        openModalBox={openModalBox}
        toggleModal={toggleModal}
        location={location}
      />
    </>
  );
}
