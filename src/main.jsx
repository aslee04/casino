import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import DailyCases from './pages/Daily-Cases.jsx'
import Jackpot from './pages/Jackpot.jsx'
import Coinflip from './pages/Coinflip.jsx'
import Mines from './pages/Mines.jsx'
import Plinko from './pages/Plinko.jsx'
import Upgrader from './pages/Upgrader.jsx'
import Mint from './pages/Mint.jsx'

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
        path: "jackpot",
        element: <Jackpot />
      },
      {
        path: "coinflip",
        element: <Coinflip />
      },
      {
        path: "plinko",
        element: <Plinko />
      },
      {
        path: "mines",
        element: <Mines />
      },
      {
        path: "upgrader",
        element: <Upgrader />
      },
      {
        path: "mint",
        element: <Mint />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
