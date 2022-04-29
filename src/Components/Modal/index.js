import React, { useState } from "react";
import "./index.css";
export default function Modal({ openModalBox, toggleModal, location }) {
  const [bookTkt, setBookTkt] = useState(false);
  const bookTicket = () => {
    setBookTkt(true);
  };
  return (
    <div className="modal">
      {openModalBox ? (
        <>
          <div className="modalOpen">
            <div className="modalBox">
              {bookTkt ? (
                <>
                  {" "}
                  <p>Show booked successfully !!</p>
                  <p className="close" onClick={toggleModal}>
                    X
                  </p>
                </>
              ) : (
                <>
                  <div>
                    <form>
                      <h1 className="modalShowName">{location.state.name}</h1>
                    </form>
                  </div>
                  <p className="close" onClick={toggleModal}>
                    X
                  </p>
                  <button className="bookBtn" onClick={bookTicket}>
                    Book Ticket
                  </button>
                </>
              )}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
