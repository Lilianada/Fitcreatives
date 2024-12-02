'use client'

import React, {useState} from 'react'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '../ui/button';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        category: "",
    })

    const handleSubmit = () => {
        console.log("Form submitted:", formData);
    };

  return (
    <div>
        <section className="w-full border rounded-2xl bg-background text-foreground flex flex-col mb-10">
            <div className='grid place-items-center border m-4 bg-backdrop bg-cover bg-center py-12 sm:py-16  rounded-tl-2xl rounded-tr-2xl bg-opacity-70 dark:filter dark:grayscale'>
                <div className="rounded-lg border border-light text-sm border-dashed px-3 py-2 text-muted-foreground flex gap-2 my-3">
                    <div className="h-4 w-4 mr-4 rounded-full border-dashed border-2 border-light animate-spin"></div>
                    <p className="text-sm font-medium text-primary">Contact Us</p>
                    <div className="h-4 w-4 ml-4 rounded-full border-dashed border-2 border-light animate-spin "></div>
                </div>
                <div className='py-3 my-3'>
                    <h3 className="text-lg sm:text-xl font-medium text-center text-light px-3">
                    Have questions, feedback, or need assistance? Our team is here to help. Feel free to contact us using the form below.
                    </h3>
                </div>
            </div>  
        </section>

        <section className="border rounded-2xl p-8 flex flex-col justify-center gap-4 my-3 px-20">
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex flex-col gap-1">
                    <Label className="mb-2 font-medium" htmlFor="name">
                    Name
                    </Label>
                    <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <Label className="mb-2 font-medium" htmlFor="email">
                    Email Address
                    </Label>
                    <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-1 py-3">
                <Label className="mb-2 font-medium" htmlFor="category">
                Category
                </Label>
                <Select
                id="category"
                value={formData.category}
                onValueChange={(value) =>
                    setFormData({ ...formData, category: value })
                }
                >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Feedback" className="italic" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="weight_loss">Feedback</SelectItem>
                    <SelectItem value="muscle_gain">Support</SelectItem>
                    <SelectItem value="improved_endurance">
                        Membership Enquiry
                    </SelectItem>
                    </SelectGroup>
                </SelectContent>
                </Select>
            </div>
            
            <div className="flex flex-col gap-1">
                <Label className="mb-2 font-medium" htmlFor="message">
                Message/Inquiry
                </Label>
                <textarea
                id="message"
                placeholder="What's on your mind?"
                rows="5"
                value={formData.message}
                onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                }
                className='p-3 border rounded-2xl'
                ></textarea>
            </div>
            <div className='my-3 flex items-center justify-center'>
            <Button onClick={handleSubmit}>Send Message</Button>
            </div>
        </section>
    </div>
  )
}
