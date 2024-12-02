import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchStocks } from "../api/fetchStocks";

interface Stock {
  code: string;
  stockName: string;
  price: number;
}

interface StockExchange {
  code: string;
  stockExchange: string;
  topStocks: Stock[];
}

interface Message {
  type: "user" | "bot";
  content: string;
  actions?: string[];
}

interface ChatContextProps {
  messages: Message[];
  addMessage: (message: Message) => void;
  handleAction: (action: string) => void;
  loading: boolean;
  error: string | null;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      content: "Loading stock data...",
    },
  ]);
  const [stockData, setStockData] = useState<StockExchange[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data from fake API
    fetchStocks()
      .then((data) => {
        setStockData(data);
        setLoading(false);
        setMessages((prev) => [
          {
            type: "bot",
            content: "Hello! Welcome to LSEG. I'm here to help you.",
            actions: data.map((exchange) => exchange.stockExchange),
          },
        ]);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
        setMessages((prev) => [
          {
            type: "bot",
            content: "Oops! Something went wrong while loading stock data.",
          },
        ]);
      });
  }, []);

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  const handleAction = (action: string) => {
    addMessage({ type: "user", content: action });

    if (!stockData) return;

    const selectedExchange = stockData.find(
      (exchange) => exchange.stockExchange === action
    );

    if (selectedExchange) {
      addMessage({
        type: "bot",
        content: "Please select a stock:",
        actions: selectedExchange.topStocks.map((stock) => stock.stockName),
      });
      return;
    }

    for (const exchange of stockData) {
      const selectedStock = exchange.topStocks.find(
        (stock) => stock.stockName === action
      );
      if (selectedStock) {
        addMessage({
          type: "bot",
          content: `Stock Price of ${selectedStock.stockName} is $${selectedStock.price.toFixed(
            2
          )}.`,
          actions: ["Main Menu", "Go Back"],
        });
        return;
      }
    }

    if (action === "Main Menu") {
      addMessage({
        type: "bot",
        content: "Welcome back! Please select a Stock Exchange.",
        actions: stockData.map((exchange) => exchange.stockExchange),
      });
    } else if (action === "Go Back") {
      const lastExchange = messages
        .slice()
        .reverse()
        .find((msg) =>
          stockData.some((exchange) =>
            exchange.stockExchange === msg.content ? true : false
          )
        );
      if (lastExchange) {
        const exchange = stockData.find(
          (ex) => ex.stockExchange === lastExchange.content
        );
        if (exchange) {
          addMessage({
            type: "bot",
            content: "Please select a stock:",
            actions: exchange.topStocks.map((stock) => stock.stockName),
          });
        }
      }
    }
  };

  return (
    <ChatContext.Provider
      value={{ messages, addMessage, handleAction, loading, error }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
