import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import Layout from "./layouts/Layout.jsx"
import { Toaster } from "@components/ui/toaster.jsx"
import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "@components/ui/theme-provider.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ThemeProvider>
        <Layout>
          <App />
          <Toaster />
        </Layout>
      </ThemeProvider>
    </Router>
  </StrictMode>
)
