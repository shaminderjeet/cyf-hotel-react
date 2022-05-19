import React from "react";
const TouristInfoCards = () => {
  return (
    <div className="tourist-cards d-flex justify-content-between container">
      <div className="card">
        <img
          src="https://media.istockphoto.com/photos/aerial-view-on-nantes-city-island-picture-id828503932"
          className="card-img-top"
        />
        <div className="card-body">
          <h1>Glasglow</h1>
          Glasgow, Gaelic Glaschu, city, west-central Scotland. It is situated
          along both banks of the River Clyde 20 miles (32 km) from that river's
          mouth on the western, or Atlantic, coast. Glasgow is Scotland's
          largest city, and it forms an independent council area that lies
          entirely within the historic county of Lanarkshire
          <a
            href="https://www.peoplemakeglasgow.com"
            className="btn btn-primary"
          >
            Visit website
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://a.cdn-hotels.com/gdcs/production134/d1969/748a572f-8f66-4cef-81b2-1cb3780b1714.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h1>Manchester</h1>
          Manchester, city and metropolitan borough in the metropolitan county
          of Greater Manchester urban county, northwestern England. Most of the
          city, including the historic core, is in the historic county of
          Lancashire, but it includes an area south of the River Mersey in the
          historic county of Cheshire. Manchester is the nucleus of the largest
          metropolitan area in the north of England, and it remains an important
          regional city, but it has lost the extraordinary vitality and unique
          influence that put it at the forefront of the Industrial Revolution.
          <a
            href="https://www.visitmanchester.com/"
            target="_blank"
            className="btn btn-primary"
          >
            visit site
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://media.istockphoto.com/photos/aerial-view-on-nantes-city-island-picture-id828503932"
          className="card-img-top"
        />
        <div className="card-body">
          <h1>London</h1>
          London, city, capital of the United Kingdom. It is among the oldest of
          the world's great cities—its history spanning nearly two millennia—and
          one of the most cosmopolitan. By far Britain's largest metropolis, it
          is also the country's economic, transportation, and cultural centre.
          <a
            href="https://www.peoplemakeglasgow.com"
            className="btn btn-primary"
          >
            Visit website
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
