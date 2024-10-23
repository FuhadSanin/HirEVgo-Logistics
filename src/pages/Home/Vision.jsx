import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../../components/ui/card"
import { Cpu, Forklift, PackageOpen, Timer } from "lucide-react"

const cardData = [
  {
    id: 1,
    title: "Eco-Friendly Transport Solutions",
    description:
      "Our electric vehicle fleet ensures your goods are transported with zero emissions, contributing to a greener environment while offering efficient and reliable delivery services within the district.",
    imgSrc: Forklift, // Pass the Forklift component
  },
  {
    id: 2,
    title: "Real-Time Tracking with IoT",
    description:
      "Stay informed with real-time tracking of your shipments using our advanced IoT technology. Monitor every step of the journey, ensuring transparency and peace of mind for your business.",
    imgSrc: Timer, // Pass the Timer component
  },
  {
    id: 3,
    title: "Fast and Reliable Deliveries",
    description:
      "We prioritize speed and reliability, ensuring your goods reach their destination on time, every time. Our district-wide logistics network guarantees timely and seamless delivery services tailored to your needs.",
    imgSrc: PackageOpen, // Pass the PackageOpen component
  },
  {
    id: 4,
    title: "Technology-Driven Efficiency",
    description:
      "Using cutting-edge technology, we optimize delivery routes and reduce operational costs, providing you with high-quality logistics solutions that boost efficiency without compromising sustainability or service quality.",
    imgSrc: Cpu, // Pass the Cpu component
  },
]

const Cards = ({ title, description, imgSrc: Icon }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <Icon size={50} className="mb-3" strokeWidth={1.3} />
        <CardTitle className="mb-3 mt-3 leading-tight">{title}</CardTitle>{" "}
        <CardDescription className="text-justify">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}

const Vision = () => {
  return (
    <section className="overflow-hidden h-fit pb-12 md:px-24 bg-white dark:bg-dark">
      <div className="container mx-auto">
        <div className="flex-wrap flex items-center justify-between -mx-4 space-y-8">
          <div className="flex flex-row flex-wrap lg:w-1/2 md:w-full sm:justify-between justify-center gap-12">
            {cardData.map(card => (
              <Cards
                key={card.id}
                title={card.title}
                description={card.description}
                imgSrc={card.imgSrc}
              />
            ))}
          </div>
          <div className="lg:w-1/2 md:w-full flex justify-center items-center rounded-xl">
            <iframe
              title="HireEVgo Location"
              className="rounded-lg w-[500px] h-[400px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.3069364819326!2d76.3527867793513!3d10.15568674745637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0805222a280ba1%3A0xa16e89cca149dbd7!2sHirevgo!5e0!3m2!1sen!2sin!4v1729097750549!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision
