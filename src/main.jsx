import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import DailyCases from './pages/Daily-Cases.jsx'
import CoinFlip from "./pages/CoinFlip.jsx";
import Jackpot from "./pages/Jackpot.jsx";
import Mines from "./pages/Mines.jsx";
import Mint from "./pages/Mint.jsx";
import Plinko from "./pages/Plinko.jsx";
import Upgrade from "./pages/Upgrade.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "daily-cases",
        element: <DailyCases />
      },
      {
        path: "coin-flip",
        element: <CoinFlip />
      },
      {
        path: "jackpot",
        element: <Jackpot />
      },
      {
        path: "mines",
        element: <Mines />
      },
      {
        path: "mint",
        element: <Mint />
      },
      {
        path: "plinko",
        element: <Plinko />
      },
      {
        path: "upgrade",
        element: <Upgrade />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
