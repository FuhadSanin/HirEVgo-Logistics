import React from "react"
import tech from "../../assets/image.png"
import { Button } from "../../components/ui/button"
import { CardDescription } from "@components/ui/card"

const Partner = () => {
  return (
    <section className="overflow-hidden pb-12 pt-12 md:px-24 px-10 bg-[#f0f8ff] ">
      <div className="w-full flex flex-col lg:flex-row items-center justify-evenly container h-fit rounded-3xl space-y-10 lg:space-y-0 lg:space-x-16">
        <div className="w-full lg:w-1/2">
          <img
            src={tech}
            className="rounded-3xl shadow-lg w-full h-auto object-cover"
            alt="Partner with us"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
          <h2 className="mb-5 text-3xl font-bold text-black  sm:text-[40px]/[48px]">
            Partner with us
          </h2>
          <CardDescription className="mb-5 text-base  text-justify">
            Join our growing network of EV drivers and vehicle owners to
            revolutionize district-level logistics. Partnering with us means
            expanding your opportunities, while contributing to sustainable
            transport. Together, we deliver faster, smarter, and greener
            services for our clients. Let’s drive the future of logistics, one
            electric mile at a time!
          </CardDescription>
          <Button>Join us</Button>
        </div>
      </div>
    </section>
  )
}

export default Partner
