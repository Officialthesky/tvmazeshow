import React, { useEffect, useState } from "react";
import "./index.css";
export default function Modal({ openModalBox, toggleModal, location }) {
  const [bookTkt, setBookTkt] = useState(false);
  const [name, setName] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [bookedDataFromLocal, setBookedDataFromLocal] = useState({});

  let bookedShow = JSON.parse(localStorage.getItem("bookedShow"));

  const bookTicket = () => {
    if (!name) {
      alert("please provide your name!");
      return;
    }

    if (!mobileNumber) {
      alert("please provide your mobile Number!");
      return;
    }

    if (mobileNumber.length !== 10) {
      alert("Mobile number should be of 10 digits!");
      return;
    }

    setBookTkt(true);

    let bookedData = [];

    let moveeBooked = {
      name,
      mobileNumber,
      id: location.state.id,
      bookingTime: new Date(),
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
    let bookedData = bookedShow?.filter((item) => location.state.id == item.id);

    if (bookedData?.length > 0) {
      setBookTkt(true);

      setBookedDataFromLocal(bookedData[0]);
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
                  <br />
                  <p style={{ fontSize: 12 }}>
                    {bookedDataFromLocal?.bookingTime &&
                      `${new Date(bookedDataFromLocal?.bookingTime)}`}
                  </p>
                  <p className="close" onClick={toggleModal}>
                    X
                  </p>
                  <button className="bookBtn cancelBtn" onClick={cancelTicket}>
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
