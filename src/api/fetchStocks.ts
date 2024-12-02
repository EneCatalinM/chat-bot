import stockData from "../data/stocks.json";

export const fetchStocks = (): Promise<typeof stockData> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject("Failed to fetch stock data. Please try again later.");
      } else {
        resolve(stockData);
      }
    }, 1000);
  });
};
