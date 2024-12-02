import React from "react";
import "./HomeMenu.css";

interface HomeMenuProps {
  onSelectExchange: (exchangeCode: string) => void;
}

const HomeMenu: React.FC<HomeMenuProps> = ({ onSelectExchange }) => {
  const exchanges = [
    { code: "LSE", name: "London Stock Exchange" },
    { code: "NYSE", name: "New York Stock Exchange" },
    { code: "NASDAQ", name: "Nasdaq" },
  ];

  return (
    <div className="home-menu">
      <h2>Select a Stock Exchange</h2>
      {exchanges.map((exchange) => (
        <button key={exchange.code} onClick={() => onSelectExchange(exchange.code)}>
          {exchange.name}
        </button>
      ))}
    </div>
  );
};

export default HomeMenu;
