# 📈 Stock Trading & Investment Platform

A modern, full-stack stock trading and investment platform built with the **MERN (MongoDB, Express.js, React.js, Node.js)** stack. This platform features an all-in-one financial ecosystem comprising an informational marketing portal, secure authentication, a comprehensive **Trading Terminal & Dashboard** with real-time portfolio tracking, interactive data visualization, dynamic watchlists, and order placement functionality.

---

## 🚀 Key Features

### 1. 🌐 Marketing & Informational Portal (`/frontend`)
- **Ecosystem & Products Showcase**: Comprehensive overview of investment products, trading technology suite, and financial tools.
- **Pricing & Fee Structure**: Transparent breakdown of brokerage charges, equity delivery (₹0), intraday, and F&O fee schedules.
- **Support & Ticket Desk**: Integrated customer support portal and knowledge base.
- **User Authentication**: Secure user registration and login interfaces with client-side validation and toast notifications.

### 2. 📊 Trading Terminal & Dashboard (`/dashboard`)
- **Interactive Stock Watchlist**:
  - Live stock ticker with percentage gain/loss indicators.
  - Hover-activated quick-action bar (Buy, Sell, Analytics, Charting).
- **Buy Order Execution Modal (`BuyActionWindow`)**:
  - Modal window to specify quantity, price, order type (Market, Limit), and product type (CNC/MIS).
  - Instant dispatch to the backend API to record and execute orders.
- **Holdings & Portfolio Management**:
  - Real-time calculation of total investment value, current value, total P&L, and daily P&L.
  - Interactive portfolio visualizations using **Chart.js** (Doughnut charts for asset distribution, Bar graphs for stock performance).
- **Positions Tracker**:
  - Track intraday (MIS) and overnight (CNC) open contracts with net gain/loss metrics.
- **Summary & Funds Management**:
  - Margin tracking for Equity and Commodity segments.
  - Balance, margin used, and available collateral overview.
- **Order Book**:
  - Historical list of placed orders with status and execution details.

### 3. 🛡️ Backend REST API (`/backend`)
- **Authentication & Security**: User signup and login powered by **bcrypt.js** for password hashing and **JSON Web Tokens (JWT)** via secure cookies.
- **Portfolio & Order APIs**: Robust endpoints to query user holdings, active positions, and persist new trading orders in **MongoDB**.
- **CORS & Middleware**: Secure cross-origin communication between the frontend apps and backend service.

---

## 🛠️ Technology Stack

| Layer | Technologies & Libraries |
| :--- | :--- |
| **Marketing Portal** | React.js, React Router DOM, React-Toastify, Axios, CSS3 |
| **Trading Terminal** | React.js, React Router DOM, Material UI (MUI Icons), Chart.js, React-Chartjs-2, Axios |
| **Backend API** | Node.js, Express.js, Mongoose, CORS, Cookie-Parser, Body-Parser |
| **Database** | MongoDB Atlas (Cloud Database) |
| **Security / Auth** | JSON Web Tokens (JWT), BcryptJS, Protected Middleware |

---

## 📁 Project Architecture

```plaintext
Stock-Trading-Platform/
├── backend/                  # Node.js + Express REST API
│   ├── middlewares/          # Auth & verification middlewares
│   ├── model/                # Mongoose Models (Users, Holdings, Positions, Orders)
│   ├── schemas/              # Mongoose Data Schemas
│   ├── index.js              # Server entry point & API routes
│   └── package.json
│
├── frontend/                 # Marketing Website & Auth Pages
│   ├── public/               # Static assets & HTML template
│   ├── src/
│   │   ├── Landing_page/     # Modular pages (home, about, products, pricing, signup, support)
│   │   ├── index.js          # App entry point & client-side routes
│   │   └── index.css         # Global styling
│   └── package.json
│
├── dashboard/                # Trading Terminal Application
│   ├── public/               # Dashboard public assets
│   ├── src/
│   │   ├── components/       # WatchList, Holdings, Positions, Orders, Funds, BuyActionWindow, Charts
│   │   ├── data/             # Market data & watchlists
│   │   ├── index.js          # Dashboard root entry
│   │   └── index.css         # Trading terminal styles
│   └── package.json
│
└── README.md
```

---

## 🔌 API Reference

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/signup` | Register a new user account and set auth cookie |
| `POST` | `/login` | Authenticate user credentials and return JWT token |
| `GET` | `/allHoldings` | Retrieve all current stock holdings and investment values |
| `GET` | `/allPositions` | Retrieve all open intraday/delivery trading positions |
| `POST` | `/newOrder` | Place and persist a new buy/sell order |

---

## ⚙️ Installation & Local Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account or local MongoDB instance

---

### Step 1: Clone the Repository
```bash
git clone https://github.com/Supreet-30/Stock-trading-Platform.git
cd Stock-trading-Platform
```

---

### Step 2: Configure & Start the Backend
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend/` directory:
   ```env
   PORT=3002
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```
4. Start the backend development server:
   ```bash
   npm start
   ```
   > The API will start on `http://localhost:3002`.

---

### Step 3: Start the Marketing Portal
1. Open a new terminal and navigate to `frontend`:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```
   > The marketing portal will run on `http://localhost:3000`.

---

### Step 4: Start the Trading Terminal Dashboard
1. Open another terminal and navigate to `dashboard`:
   ```bash
   cd dashboard
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dashboard app:
   ```bash
   npm start
   ```
   > The trading terminal will run on `http://localhost:3001` (or next available port).

---

## 🌟 Future Roadmap & Enhancements

- [ ] **Real-time WebSockets**: Integrate Socket.io / WebSocket feeds for live price tick updates.
- [ ] **Technical Charting**: Embed TradingView lightweight charts for live candlestick analysis.
- [ ] **Sell Order Execution**: Enable square-off and sell order placement directly from positions/holdings.
- [ ] **Payment Gateway Integration**: Add simulated UPI / NetBanking funds deposit gateway.
- [ ] **Dark Mode**: Add dark mode toggle to the trading terminal.
