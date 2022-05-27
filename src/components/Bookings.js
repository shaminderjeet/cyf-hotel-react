import React, { useState, useEffect } from "react";

import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState(null);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then(data => {
        setBookings(data);
      })
      .catch(error => console.log(error));
  }, []);

  const search = searchVal => {
    //console.info("TO DO!", searchVal);

    const filteredBookings = bookings.filter(booking => {
      return (
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setBookings(filteredBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />

        {bookings !== null ? (
          bookings.length == 0 ? (
            <h3 className="loading-data-h1">No Data.....</h3>
          ) : (
            <SearchResults results={bookings} />
          )
        ) : (
          <h3 className="loading-data-h1">LOADING DATA.....</h3>
        )}
      </div>
    </div>
  );
};
export default Bookings;
