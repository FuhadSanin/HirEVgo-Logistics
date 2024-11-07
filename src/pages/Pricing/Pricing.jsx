import React, { useState } from "react"
import pricing from "@/assets/pricing.jpg"
import { useForm } from "react-hook-form"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SendHorizonal } from "lucide-react"
import { Card, CardContent, CardDescription } from "@components/ui/card"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const Pricing = () => {
  const formSchema = z.object({
    phone: z.string().min(1, "Phone is required"),
    distance: z.string().min(1, "Distance is required"),
    weight: z.string().min(1, "Weight is required"),
    ordertime: z.string().min(1, "Order Time is required"),
    fromLocation: z.string().min(1, "From Location is required"),
    toLocation: z.string().min(1, "To Location is required"),
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      distance: "",
      weight: "",
      ordertime: "",
      fromLocation: "",
      toLocation: "",
    },
  })

  // State to manage pricing details
  const [pricingDetails, setPricingDetails] = useState({
    itemTotal: 0,
    platformFee: 50,
    additionalDistanceCharges: 0,
    waitingTimeCharges: 0,
    overtimeCharges: 0,
    couponDiscount: 0,
    taxes: 0,
    total: 0,
  })

  const onSubmit = data => {
    console.log(data)
    const baseCharge = 300

    let distanceCharge = data.distance > 5 ? (data.distance - 5) * 20 : 0
    let timeMultiplier = 1
    const hour = new Date(data.orderTime).getHours()

    if ((hour >= 10 && hour < 12) || (hour >= 15 && hour < 18)) {
      timeMultiplier = 1.25
    } else if (hour >= 5 && hour < 8) {
      timeMultiplier = 0.85
    } else if (hour >= 20 || hour < 2) {
      timeMultiplier = 1.5
    }

    let weightCharge =
      data.weight > 500 ? Math.ceil((data.weight - 500) / 50) * 50 : 0
    let additionalDistanceCharge =
      data.distance > 30 ? (data.distance - 30) * 15 : 0
    let couponDiscount = data.coupon || 0

    const totalPrice =
      baseCharge +
      distanceCharge * timeMultiplier +
      weightCharge +
      additionalDistanceCharge -
      couponDiscount

    setPricingDetails({
      itemTotal: baseCharge,
      platformFee: 50,
      additionalDistanceCharges: additionalDistanceCharge,
      waitingTimeCharges: 20, // Assume constant for example
      overtimeCharges: 15, // Assume constant for example
      couponDiscount,
      taxes: 40, // Assume constant for example
      total: totalPrice + 50 + 20 + 15 + 40 - couponDiscount,
    })

    console.log("Total Price:", totalPrice)
  }

  return (
    <section className="overflow-hidden pt-28 pb-12 lg:px-24 scroll-px-6 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
      <div className="container mx-auto md:flex justify-between items-center space-x-6">
        <div className="md:w-1/2 lg:1/2 flex items-center justify-center">
          <img src={pricing} alt="Pricing" className="w-[500px]" />
        </div>
        <div>
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">
              Pricing
            </h1>
            <CardDescription className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Our pricing is tailored to your needs. Contact us for a quote.
            </CardDescription>
          </div>
          <div className="lg:flex lg:justify-evenly md:w-full mx-auto">
            <div className="lg:w-[70%] md:w-full ">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-wrap -m-2"
                >
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="p-2 w-full">
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter Phone Number"
                            type="number"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  {/* Distance Field */}
                  <FormField
                    control={form.control}
                    name="distance"
                    render={({ field }) => (
                      <FormItem className="p-2 w-1/2">
                        <FormLabel>Distance (Km)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter Distance"
                            type="number"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  {/* Weight Field */}
                  <FormField
                    control={form.control}
                    name="weight"
                    render={({ field }) => (
                      <FormItem className="p-2 w-1/2">
                        <FormLabel>Weight (Kg)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter Weight"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  {/* From Location Field */}
                  <FormField
                    control={form.control}
                    name="fromLocation"
                    render={({ field }) => (
                      <FormItem className="p-2 w-1/2 ">
                        <FormLabel>From Location</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter From Location" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  {/* To Location Field */}
                  <FormField
                    control={form.control}
                    name="toLocation"
                    render={({ field }) => (
                      <FormItem className="p-2 w-1/2">
                        <FormLabel>To Location</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter To Location" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  {/* Time Field */}
                  <FormField
                    control={form.control}
                    name="ordertime"
                    render={({ field }) => (
                      <FormItem className="p-2 w-1/2">
                        <FormLabel>Order Time</FormLabel>
                        <FormControl>
                          <Input
                            type="time"
                            placeholder="Enter Time"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="coupon"
                    render={({ field }) => (
                      <FormItem className="p-2 w-full">
                        <FormLabel>Coupon No.</FormLabel>
                        <FormControl>
                          <div className="relative w-full rounded-full p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
                            <Input
                              type="text"
                              placeholder="Enter Coupon No."
                              {...field}
                              className="w-full p-2 bg-white rounded-full focus:outline-none"
                            />
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  {/* Submit Button */}
                  <div className="p-2 w-full mt-4">
                    <Button type="submit">Generate Quota</Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
          <div className="flex justify-center items-center mt-10">
            <Card className="rounded-3xl w-[80%] h-fit">
              <CardContent className="p-4">
                <table className="w-full">
                  <tbody>
                    <tr className="flex items-center justify-between">
                      <CardDescription>Item Total</CardDescription>
                      <td className="break-words whitespace-normal">
                        ₹{pricingDetails.itemTotal}
                      </td>
                    </tr>
                    <tr className="flex items-center justify-between">
                      <CardDescription>Platform Fee</CardDescription>
                      <td className="break-words whitespace-normal">
                        ₹{pricingDetails.platformFee}
                      </td>
                    </tr>
                    <tr className="flex items-center justify-between">
                      <CardDescription>
                        Additional Distance Charges
                      </CardDescription>
                      <td className="break-words whitespace-normal">
                        ₹{pricingDetails.additionalDistanceCharges}
                      </td>
                    </tr>
                    <tr className="flex items-center justify-between">
                      <CardDescription>Waiting Time Charges</CardDescription>
                      <td className="break-words whitespace-normal">
                        ₹{pricingDetails.waitingTimeCharges}
                      </td>
                    </tr>
                    <tr className="flex items-center justify-between">
                      <CardDescription>Overtime Charges</CardDescription>
                      <td className="break-words whitespace-normal">
                        ₹{pricingDetails.overtimeCharges}
                      </td>
                    </tr>
                    <tr className="flex items-center justify-between">
                      <CardDescription>Coupon Discount</CardDescription>
                      <td className="break-words whitespace-normal">
                        -₹{pricingDetails.couponDiscount}
                      </td>
                    </tr>
                    <tr className="flex items-center justify-between">
                      <CardDescription>Taxes</CardDescription>
                      <td className="break-words whitespace-normal">
                        ₹{pricingDetails.taxes}
                      </td>
                    </tr>
                    <hr className="my-2 w-full" />
                    <tr className="flex items-center justify-between font-semibold">
                      <CardDescription>Total</CardDescription>
                      <td className="break-words whitespace-normal">
                        ₹{pricingDetails.total}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
