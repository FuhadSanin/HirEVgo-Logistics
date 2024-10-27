import React from "react"
import pricing from "../../assets/pricing.jpg"
import { useForm } from "react-hook-form"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "../../components/ui/form"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { SendHorizonal } from "lucide-react"
import { CardDescription } from "@components/ui/card"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const Pricing = () => {
  const formSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    subject: z.string().min(1),
    message: z.string().min(1),
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <section className="overflow-hidden pt-28 pb-12 md:px-10 px-10 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
      <div className="container mx-auto md:flex justify-between items-center space-y-6">
        <div className="md:w-1/2 lg:1/2 flex items-center justify-center">
          <img src={pricing} alt="" className="w-[500px]" />
        </div>
        <div>
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">
              Pricing
            </h1>
            <CardDescription className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Our pricing is tailored to your needs. Contact us for a quote
            </CardDescription>
          </div>
          <div className="lg:flex lg:justify-evenly md:w-full mx-auto">
            {/* Contact Form */}
            <div className="lg:w-1/2 w-full">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-wrap -m-2"
                >
                  {/* Name Field */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="p-2 w-1/2">
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  {/* Email Field */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="p-2 w-1/2">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Your Email"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  {/* Subject Field */}
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem className="p-2 w-full">
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Your Subject"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  {/* Message Field */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="p-2 w-full">
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <textarea
                            {...field}
                            className="w-full text-sm bg-opacity-50 rounded-3xl border border-gray-300 focus:border-black-500 focus:bg-white focus:ring-2 focus:ring-black h-32  outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  {/* Submit Button */}
                  <div className="p-2 w-full">
                    <Button type="submit">
                      Send Message
                      <SendHorizonal className="w-6 h-6 ml-2" />
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
