import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import Layout from "./layouts/Layout.jsx"
import { Toaster } from "@components/ui/toaster.jsx"
import { BrowserRouter as Router } from "react-router-dom"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
        <Layout>
          <App />
          <Toaster />
        </Layout>
    </Router>
  </StrictMode>
)
