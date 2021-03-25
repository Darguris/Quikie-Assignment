import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Card(props) {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    var currencySymbol = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    const url =
      "https://cloud.iexapis.com/stable/stock/" +
      props.name +
      "/quote?token=" +
      "pk_6597511372e94e10891b36e3ee70e81b";
    //enter url//
    axios
      .get(url)
      .then((res) => {
        const stocksData = res.data.latestPrice;
        setPrice(currencySymbol.format(stocksData));
      })
      .catch((err) => {});
  }, [props]);

  return (
    <div className="card">
      <div className="cardUpperRow">
        <p>{props.name}</p>
        <img src={props.logo} alt="" className="cardLogo" />
      </div>
      <div className="cardLowerRow">
        <p>{price}</p>
      </div>
    </div>
  );
}
