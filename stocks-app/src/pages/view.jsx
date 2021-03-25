import React, { Component } from "react";
import SavedTable from "../components/veiwTable";

import googleLogo from "../Assets/google.png";
import facebookLogo from "../Assets/facebook.png";
import amazonLogo from "../Assets/amazon.svg";
import Card from "../components/card";

function view() {
  return (
    <div>
      <div className="navBar">
        <h1>Quikie</h1>
        <h5> Apps</h5>
      </div>
      <div className="mainContainer">
        <div>
          <div className="cardsContainer">
            <Card logo={googleLogo} name="GOOGL" price={206} />
            <Card logo={facebookLogo} name="FB" price={206} />
            <Card logo={amazonLogo} name="AMZN" price={206} />
          </div>
          <SavedTable />
        </div>
      </div>
    </div>
  );
}
export default view;
