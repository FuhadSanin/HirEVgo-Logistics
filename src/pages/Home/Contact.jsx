import React from "react"
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
import { MapPin, Phone, Mail } from "lucide-react"
import { useToast } from "@components/ui/use-toast"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const Contact = () => {
  const { toast } = useToast()
  // Initialize react-hook-form
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
    if (!data.name || !data.email || !data.subject || !data.message) {
      toast({
        title: "Error: Empty fields",
        description: "Please fill all the fields",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Message Sent",
      description: "We will connect with you soon",
      variant: "success",
    })

    form.reset()
  }

  return (
    <section
      id="Contact"
      className="overflow-hidden pb-12 pt-12 md:px-24 px-10 bg-white dark:bg-black"
    >
      <div className="container md:px-5 py-14  mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <CardDescription className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Please type your message here, our agent will connect with you.
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
          <div className="lg:w-1/3 w-full mt-10 lg:mt-0 lg:ml-8">
            <div className="p-6 h-full flex flex-col justify-center space-y-5">
              <h2 className="text-lg font-bold title-font text-gray-900">
                Contact Details
              </h2>
              <p className="mt-4 text-md leading-relaxed text-gray-700 flex items-center">
                <MapPin size={60} className="mr-4" />
                V/ 314, Opp. Kerala Judicial Academy, Athani, Chengamanad Road,
                Nedumbasserry, Ernakulam, Kerala -683585.
              </p>
              <p className="mt-2 text-base leading-relaxed text-gray-700 flex items-center">
                <Phone size={20} className="mr-4" />
                (123) 456-7890
              </p>
              <p className="mt-2 text-base leading-relaxed text-gray-700 flex items-center">
                <Mail className="mr-4" size={20} />
                office@hirevgo.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
