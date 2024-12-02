# LSEG Chatbot

This is an interactive chatbot that allows users to select stock exchanges (LSEG, NASDAQ, NYSE) and view the current stock prices for the top traded stocks on these exchanges.

---

## **Features**
- Select a stock exchange and display available stocks.
- View current prices for selected stocks.
- Intuitive navigation with options to return to the main menu or previous steps.
- Error handling for technical issues or missing data.

---

## **Technologies Used**
- **React** with TypeScript
- **CSS** for styling
- **Context API** for global state management
- Simulated API (`fetchStocks`) for loading stock data

---

## **How to Run the Application**

### **1. Prerequisites**
- **Node.js**: Ensure Node.js is installed. Download the latest version from [Node.js official website](https://nodejs.org/).

### **2. Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/EneCatalinM/chat-bot
   cd chat-bot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the application in your browser at:
   ```
   http://localhost:3000
   ```

---

## **Project Structure**

```
src/
├── api/                      # Fake API for stock data
│   └── fetchStocks.ts        # Simulated API calls
│
├── components/               # Reusable React components
│   ├── ChatInterface/        # Main chat interface components
│   │   ├── ChatInterface.css
│   │   ├── ChatInterface.tsx
│   │   └── index.ts
│   ├── ChatPopup/            # Chat popup window components
│   │   ├── ChatPopup.css
│   │   ├── ChatPopup.tsx
│   │   └── index.ts
│   ├── HomeMenu/             # Home menu for selecting stock exchanges
│   │   ├── HomeMenu.css
│   │   ├── HomeMenu.tsx
│   │   └── index.ts
│   ├── StockDetails/         # Display stock details and prices
│   │   ├── StockDetails.css
│   │   ├── StockDetails.tsx
│   │   └── index.ts
│   ├── StockMenu/            # Stock menu for selecting stocks
│   │   ├── StockMenu.css
│   │   ├── StockMenu.tsx
│   │   └── index.ts
│
├── context/                  # Context API for global state management
│   └── ChatContext.tsx
│
├── data/                     # Static JSON data
│   └── stocks.json           # JSON file with stock exchange data
│
├── utils/                    # Utility functions
│   └── formatPrice.ts        # Format stock prices
├── App.tsx                   # Main application component
```

