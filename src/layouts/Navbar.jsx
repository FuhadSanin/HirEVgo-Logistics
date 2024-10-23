import React, { useState } from "react"
import { List, Menu, X } from "lucide-react" // Ensure you import the Menu icon if you intend to use it
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

const Navbar = () => {
  const navigation = [
    { name: "Home", to: "" },
    { name: "Pricing", to: "pricing" },
    { name: "Contact Us", to: "contact" },
  ]

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50  ">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-3 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img alt="Company Logo" src={logo} className="h-28 w-auto" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
          >
            <span className="sr-only">Open main menu</span>
            <Menu />
          </button>
        </div>

        {/* Contact Us Link */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map(item => (
            <Link
              key={item.name}
              to={item.to}
              className="text-md font-semibold leading-6"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-0 h-screen flex justify-center items-center left-0 w-full bg-white p-6">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 "
          >
            <X />
          </button>
          <div className="flex flex-col w-full text-center gap-y-6">
            {navigation.map(item => (
              <>
                <List
                  key={item.name}
                  to={item.to}
                  className="text-xl font-semibold"
                >
                  {item.name}
                </List>
                <hr className="w-full" />
              </>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
