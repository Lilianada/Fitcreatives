"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Progress } from "@/components/ui/progress";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { StepSchemas } from "./validationSchema";
import { PersonalInfo, IndividualInfo, FitnessInfo, OtherInfo } from "./steps";


export function InputForm() {
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit()} className="w-2/3 space-y-6">
        <FormField
          control={control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default function CommunityForm({ triggerText, isOpen, setIsOpen }) {
  const formRef = useRef(null)

   const methods = useForm({
    resolver: zodResolver(StepSchemas),
    defaultValues: {
      name: "",
      email: "",
      contactNumber: "",
      age: "",
      weight: "",
      height: "",
      location: "",
      fitnessGoal: null,
      experienceLevel: null,
      creativeField: "",
      //fitnessPreferences: [],
      workoutSchedule: "",
      dietaryPreferences: "",
      injuries: "",
      //fitnessExperience: "",
      referral: "",
      //socialMediaLinks: "",
      emergencyContact: "",
      // preferredClub: "",
      // consentTerms: false,
      // consentPrivacy: false,
    },
    mode: "onTouched"
  });


  const { handleSubmit, watch, reset, trigger, formState } = methods;
  const currentStep = watch("currentStep") || 0;
  const steps = 4;
  
  const nextStep = async () => {
    const fieldsToValidate = getStepFields(currentStep)
    const isStepValid = await trigger(fieldsToValidate);
    if (!isStepValid) {
      console.error("Validation failed:", formState.errors);
      return;
    }
    if (isStepValid) {
      methods.setValue("currentStep", currentStep + 1);
    }
    
  };
  

  const prevStep = () => {
    if (currentStep > 0) {
      methods.setValue("currentStep", currentStep - 1);
    }
  };

  // const onSubmit = async (data) => {
  //   console.log("Form Submitted:", data);
  //   setIsOpen(false); 
  //   reset(); 

  // }
  
  const onSubmit = async (data) => {
    console.log("Form Submitted:", data);

    const webAppUrl = `https://script.google.com/macros/s/AKfycbxJI1jMyZQX19pgPZ6a7UuQ_7mLzOpevkqJ28n2F-K8e3JYncMN7ikqHZB2J6255gTw-g/exec`
    try {
      const response = await fetch(webAppUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
          mode: "no-cors", 
      });
      setIsOpen(false); // Close modal
          reset(); // Reset form fields
          console.log("Form successfully submitted to Google Sheets.");
        } catch (error) {
            console.error('Error during fetch request:', error);
        }
 }

//  const onSubmit = async (data) => {
//   try {
//     const formData = new FormData();

//     for (const [key, value] of Object.entries(data)) {
//       formData.append(key, value);
//     }

//     const response = await fetch(
//       "https://script.google.com/macros/s/AKfycbxJI1jMyZQX19pgPZ6a7UuQ_7mLzOpevkqJ28n2F-K8e3JYncMN7ikqHZB2J6255gTw-g/exec",
//       {
//         method: "POST",
//         body: formData,
//         mode: "no-cors", 
//       }
//     );

//     const result = await response.json();
//     console.log("Response from Google Sheets:", result);

//     if (result.status === "error") {
//       alert(`Error: ${result.message}`);
//     } else {
//       alert("Form submitted successfully!");
//       reset();
//     }
//   } catch (error) {
//     console.error("Error submitting to Google Sheets:", error);
//   }
// };
  
  // const onSubmit = (data) => {
  //   const formEle = formRef.current;
  //   const formData = new FormData(formEle);
  //   const webAppUrl = `https://script.google.com/macros/s/AKfycbxJI1jMyZQX19pgPZ6a7UuQ_7mLzOpevkqJ28n2F-K8e3JYncMN7ikqHZB2J6255gTw-g/exec`

  //   fetch(webAppUrl, {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(formData);
  //       setIsOpen(false);
  //       reset(); 
  //     })
  //     .catch((error) => {
  //       console.log("Error submitting form:", error);
  //     });    
  //   }

  return (
    <Dialog className="m-4" open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          onClick={() => setIsOpen(true)}
          className="cursor-pointer rounded-lg border border-foreground text-sm border-dashed px-4 py-2 text-muted-foreground bg-primary-background transition-all duration-300"
        >
          {triggerText}
        </Button>
      </DialogTrigger>

      <DialogContent onClose={() => setIsOpen(false)}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Community Membership Form</DialogTitle>
              <DialogDescription className="">
                Fill in the form to join the community
              </DialogDescription>
            </DialogHeader>

            <Progress value={(currentStep + 1) * (100 / steps)} className="mb-4" />

            <div className="grid gap-4 py-4">
              {currentStep === 0 && <PersonalInfo />}
              {currentStep === 1 && <IndividualInfo />}
              {currentStep === 2 && <FitnessInfo />}
              {currentStep === 3 && <OtherInfo />}
            </div>

            <DialogFooter className="flex justify-between">
              {currentStep > 0 && (
                <Button
                  variant="outline"
                  className="font-semibold"
                  type="button"
                  onClick={prevStep}
                >
                  Previous
                </Button>
              )}
              {currentStep < steps - 1 ? (
                <Button className="font-semibold" type="button" onClick={nextStep}>
                  Next
                </Button>
              ) : (
                <Button onClick={onSubmit}>Submit</Button>
              )}
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}

const getStepFields = (step) => {
  switch (step) {
    case 0:
      return ["name", "email", "contactNumber", "emergencyContact"]; 
    case 1:
      return ["age", "weight", "height"]; 
    case 2:
      return ["fitnessGoal", "experienceLevel", "workoutSchedule", "dietaryPreferences", "injuries"]; 
    case 3:
      return ["creativeField", "location", "referral"]; 
    default:
      return [];
  }
};