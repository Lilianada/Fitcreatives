'use client'

import React, {useState, useRef} from 'react'
import { useForm } from "react-hook-form";
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
import emailjs from 'emailjs-com';
//import './style.css'

export default function Contact() {
    const [status, setStatus] = useState('');
    const form = useForm({
        defaultValues: {
        name: "",
        email: "",
        message: "",
        category: "",
        },
        mode: "onSubmit"
    })

    const { register, handleSubmit, reset, setValue, formState: { errors } } = form;

    const formRef = useRef(null);

    const onSubmit = async (data) => {
        try {
            await emailjs.sendForm(
                'service_8zxo8xv',
                'template_4699adf',
                formRef.current, 
                '9t1mNFYawhe7JCJzi'
            );
    
            setStatus('Message sent successfully!');

            setTimeout(() => {
              setStatus('');
              reset(); 
            }, 3000); 
          } catch (error) {
            setStatus('Failed to send the message. Please try again.');
        
            setTimeout(() => {
              setStatus('');
            }, 3000);
          }
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

        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="border rounded-2xl p-8 flex flex-col justify-center  my-3 px-20">
            <div className="flex flex-col lg:flex-row gap-4 my-3">
                <div className="flex flex-col gap-1">
                    <Label className="mb-2 font-medium" htmlFor="name">
                    Name
                    </Label>
                    <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    {...register('name', { required: 'Please enter your Name' })}
                    />
                     {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
                </div>
                <div className="flex flex-col gap-1">
                    <Label className="mb-2 font-medium" htmlFor="email">
                    Email Address
                    </Label>
                    <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="john@gmail.com"
                    {...register('email', {
                        required: 'Enter your Email',
                        pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email address' },
                      })}
                    />
                    {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
                </div>
            </div>

            <div className="flex flex-col gap-1 py-3">
                <Label className="mb-2 font-medium" htmlFor="category">
                Category
                </Label>
                <Select
                id="category"
                name='category'
                onValueChange={(value) => setValue('category', value, { shouldValidate: true })} 
                >
                <SelectTrigger className="w-full" {...register('category', { required: 'Please select a category' })}>
                    <SelectValue placeholder="Select a Category" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="feedback">Feedback</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                    <SelectItem value="membership_enquiry">
                        Membership Enquiry
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    </SelectGroup>
                </SelectContent>
                </Select>
                {errors.category && <p className="text-red-600 text-sm">{errors.category.message}</p>}
            </div>
            
            <div className="flex flex-col gap-1 my-3">
                <Label className="mb-2 font-medium" htmlFor="message">
                Message/Inquiry
                </Label>
                <textarea
                id="message"
                name='message'
                placeholder="What's on your mind?"
                rows="5"
                {...register('message', { required: 'Please enter a message' })}
                className="rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                ></textarea>
                {errors.message && <p className="text-red-600 text-sm">{errors.message.message}</p>}
            </div>
            <div className='my-3 flex items-center justify-center'>
            <Button type='submit'>Send Message</Button>
            </div>
            {status && <p className='bg-transparent text-green-600 text-sm p-3'>{status}</p>}
        </form>
    </div>
  )
}
