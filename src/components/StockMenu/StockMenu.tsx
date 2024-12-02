import React from "react";
import "./StockMenu.css";

interface Stock {
  code: string;
  stockName: string;
  price: number;
}

interface StockMenuProps {
  stocks: Stock[];
  onSelectStock: (stock: Stock) => void;
  onGoBack: () => void;
}

const StockMenu: React.FC<StockMenuProps> = ({ stocks, onSelectStock, onGoBack }) => {
  return (
    <div className="stock-menu">
      <h2>Select a Stock</h2>
      {stocks.map((stock) => (
        <button key={stock.code} onClick={() => onSelectStock(stock)}>
          {stock.stockName}
        </button>
      ))}
      <button className="go-back-button" onClick={onGoBack}>
        Go Back
      </button>
    </div>
  );
};

export default StockMenu;
