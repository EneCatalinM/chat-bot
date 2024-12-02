import React from "react";
import formatPrice from "../../utils/formatPrice";
import "./StockDetails.css";

interface Stock {
  stockName: string;
  price: number;
}

interface StockDetailsProps {
  stock: Stock;
  onGoBack: () => void;
  onMainMenu: () => void;
}

const StockDetails: React.FC<StockDetailsProps> = ({ stock, onGoBack, onMainMenu }) => {
  return (
    <div className="stock-details">
      <h2>{stock.stockName}</h2>
      <p>Price: {formatPrice(stock.price)}</p>
      <button className="go-back-button" onClick={onGoBack}>
        Go Back
      </button>
      <button onClick={onMainMenu}>Main Menu</button>
    </div>
  );
};

export default StockDetails;
