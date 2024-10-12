import React from "react"
import logo from "../assets/logo.png"
import { Facebook, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src={logo} alt="" className="w-24" />
          <span className="ml-3 text-xl">HirEVgo</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 HirEVgo —
          <a
            href="https://twitter.com/knyttneve"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            office@hirevgo.com
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500">
            <Instagram />
          </a>
          <a className="ml-3 text-gray-500">
            <Facebook />
          </a>
          <a className="ml-3 text-gray-500">
            <Linkedin />
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
