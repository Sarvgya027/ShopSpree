'use client'

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Heading } from "@/components/ui/Heading"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { zodResolver } from "@hookform/resolvers/zod"
import { Store } from "@prisma/client"
import { log } from "console"
import { Trash } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

interface SettingsFormStore {
  initialData: Store
}

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
})
type SettingsFormValues = z.infer<typeof formSchema>

export const SettingsForm = ({ initialData }: SettingsFormStore) => {

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);


  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData
  })

  const onSubmit = async (data: SettingsFormValues) => {
    console.log('this works')
    console.log(data)
  }




  return (
    <>
      <div className="flex items-center justify-between ml-4">
        <Heading title="Settings" description="Update your store settings" />
        <Button variant="destructive" size="icon" onClick={() => { }}>
          <Trash className="h-4 w-4" />
        </Button>
      </div >
      <Separator />
      <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => console.log('form data'))} className="space-y-8 w-full">
          <div className="grid grid-cols-3 mt-4 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Store name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            Save Changes
          </Button>
        </form>

      </Form>
    </>
  )
}