import React, { useState, useEffect } from "react";
import coin from "../apis/coin";

const CoinList = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await coin.get("/coins/markets", {
        params: {
          vs_currency: "usd",
          ids: "bitcoin,ethereum",
        },
      });
      console.log(res.data);
    };
    return fetchData();
  }, []);

  return <div></div>;
};

export default CoinList;
