import React, { useState } from "react";
import fakeBookings from "../data/fakeBookings.json";
import moment from "moment";
const SearchResults = props => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">First_Name</th>
          <th scope="col">surName</th>
          <th scope="col">Email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scope="col">number of nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(result => {
          return <SearchResult booking={result} />;
        })}
      </tbody>
    </table>
  );
};
const SearchResult = ({ booking }) => {
  let checkInDate = moment(booking.checkInDate);
  let checkOutDate = moment(booking.checkOutDate);
  const [selected, setSelected] = useState(false);
  /*const handleClick = () => {
    if (selected == true) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  };*/
  const handleClick = () => {
    setSelected(!selected);
  };
  return (
    <tr className={selected ? "select" : ""} onClick={handleClick}>
      <td>{booking.id}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td> {checkOutDate.diff(checkInDate, "days")}</td>
    </tr>
  );
};

export default SearchResults;
