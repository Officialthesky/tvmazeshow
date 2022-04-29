import React, { useEffect, useState } from "react";
import "./index.css";
export default function Modal({ openModalBox, toggleModal, location }) {
  const [bookTkt, setBookTkt] = useState(false);
  const [name, setName] = useState();
  const [mobileNumber, setMobileNumber] = useState();

  let bookedShow = JSON.parse(localStorage.getItem("bookedShow"));

  const bookTicket = () => {
    setBookTkt(true);

    let bookedData = [];

    let moveeBooked = {
      name,
      mobileNumber,
      id: location.state.id,
    };

    bookedData.push(moveeBooked);

    let newArr = bookedShow ? bookedShow : [];

    localStorage.setItem(
      "bookedShow",
      JSON.stringify([...bookedData, ...newArr])
    );
  };

  const cancelTicket = () => {
    setBookTkt(false);

    let remainingData = bookedShow?.filter(
      (item) => location.state.id !== item.id
    );

    localStorage.setItem("bookedShow", JSON.stringify(remainingData));
  };

  const saveName = (e) => {
    setName(e.target.value);
  };

  const saveMobileNumber = (e) => {
    setMobileNumber(e.target.value);
  };
  useEffect(() => {
    let isBooked =
      bookedShow?.filter((item) => location.state.id == item.id)?.length !== 0;

    if (isBooked) {
      setBookTkt(true);
    }
  }, []);

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
                  <button className="bookBtn" onClick={cancelTicket}>
                    Cancel Ticket
                  </button>
                </>
              ) : (
                <>
                  <div className="formDetails">
                    <form>
                      <h1 className="modalShowName">{location.state.name}</h1>
                      <label for="fname">Name</label>
                      <br />
                      <input
                        type="text"
                        name="fname"
                        onChange={saveName}
                        value={name}
                      />
                      <br />
                      <label for="mobileNo">Mobile Number</label>
                      <br />
                      <input
                        type="number"
                        name="mobileNo"
                        onChange={saveMobileNumber}
                        value={mobileNumber}
                      />
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
