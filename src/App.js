import React from "react";
import Heading from "./components/Heading";
import Bookings from "./components/Bookings";
import "./App.css";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Bookings />
      <Heading />
      <TouristInfoCards />
      <Footer
        element={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
