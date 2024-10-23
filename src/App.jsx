import { Route, Routes } from "react-router-dom"

import Home from "@pages/Home/Home"
import Pricing from "@pages/Pricing/Pricing"
import Contact from "@pages/Home/Contact"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
