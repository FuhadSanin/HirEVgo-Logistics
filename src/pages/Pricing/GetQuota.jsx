import React from "react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@components/ui/dialog"
import { Button } from "@components/ui/button"
import { useForm } from "react-hook-form"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@components/ui/form"
import { Input } from "@components/ui/input"

const GetQuota = () => {
  const form = useForm({
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
    <Dialog>
      <DialogTrigger>
        <Button className="w-full">Get Quote Now</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-3">Get Quote Now</DialogTitle>
          <DialogDescription>
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
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your First Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="p-2 w-1/2">
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Your Last Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Subject Field */}
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="p-2 w-full">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Your Email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="p-2 w-full">
                      <FormLabel>Phone No.</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Your Phone No."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="p-2 w-full">
                      <FormLabel>Vehicle Model</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Your Vehicle Model"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Submit Button */}
                <div className="p-2 w-full">
                  <Button type="submit">Send Message</Button>
                </div>
              </form>
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default GetQuota
