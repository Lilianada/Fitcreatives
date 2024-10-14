"use client";

import React, { useState } from "react";
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
import { Label } from "@/components/ui/label";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

export default function CommunityForm({ triggerText }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    age: "",
    location: "",
    fitnessGoal: "",
    experienceLevel: "",
    creativeField: "",
    fitnessPreferences: [],
    workoutSchedule: "",
    dietaryPreferences: "",
    injuries: "",
    fitnessExperience: "",
    referral: "",
    socialMediaLinks: "",
    emergencyContact: "",
    preferredClub: "",
    consentTerms: false,
    consentPrivacy: false,
  });

  const [currentStep, setCurrentStep] = useState(0);
  const steps = 4;

  const nextStep = () => {
    if (currentStep < steps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="cursor-pointer rounded-lg border text-sm border-dashed px-3 py-2 text-muted-foreground transition-all duration-300"
        >
          {triggerText}
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Community Membership Form</DialogTitle>
          <DialogDescription className="">
            Fill in the form to join the community
          </DialogDescription>
        </DialogHeader>

        <Progress value={(currentStep + 1) * (100 / steps)} className="mb-4" />

        <div className="grid gap-4 py-4">
          {currentStep === 0 && <PersonalInfo />}

          {currentStep === 1 && (
            <IndividualInfo />
          )}

          {currentStep === 2 && <FitnessInfo />}

          {currentStep === 3 && <OtherInfo />}
        </div>

        <DialogFooter className="flex justify-between">
          {currentStep > 0 && (
            <Button
              variant="outline"
              className="font-semibold"
              onClick={prevStep}
            >
              Previous
            </Button>
          )}
          {currentStep < steps - 1 ? (
            <Button className="font-semibold" onClick={nextStep}>
              Next
            </Button>
          ) : (
            <Button onClick={handleSubmit}>Submit</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const PersonalInfo = () => {
  return (
    <>
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

      <div className="flex flex-col gap-1">
        <Label className="mb-2 font-medium" htmlFor="contactNumber">
          Tel number
        </Label>
        <Input
          id="contactNumber"
          type="tel"
          value={formData.contactNumber}
          onChange={(e) =>
            setFormData({ ...formData, contactNumber: e.target.value })
          }
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label className="mb-2 font-medium" htmlFor="emergencyContact">
          Emergency Contact Information
        </Label>
        <Input
          id="emergencyContact"
          placeholder="Emergency contact details"
          value={formData.emergencyContact}
          onChange={(e) =>
            setFormData({
              ...formData,
              emergencyContact: e.target.value,
            })
          }
        />
      </div>
      
    </>
  );
};

const IndividualInfo = () => {
    return (
        <>
        <div className="flex flex-col gap-1">
        <Label className="mb-2 font-medium" htmlFor="age">
          Age
        </Label>
        <Input
          id="age"
          type="number"
          min="18"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label className="mb-2 font-medium" htmlFor="weight">
          Weight
        </Label>
        <Input
          id="weight"
          type="number"
          value={formData.weight}
          onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label className="mb-2 font-medium" htmlFor="height">
          Height
        </Label>
        <Input
          id="height"
          type="number"
          value={formData.height}
          onChange={(e) => setFormData({ ...formData, height: e.target.value })}
        />
      </div>
      </>
    )
}

const FitnessInfo = () => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <Label className="mb-2 font-medium" htmlFor="fitnessGoal">
          Primary Fitness Goal
        </Label>
        <Select
          id="fitnessGoal"
          value={formData.fitnessGoal}
          onValueChange={(value) =>
            setFormData({ ...formData, fitnessGoal: value })
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a goal" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Goals</SelectLabel>
              <SelectItem value="weight_loss">Weight Loss</SelectItem>
              <SelectItem value="muscle_gain">Muscle Gain</SelectItem>
              <SelectItem value="improved_endurance">
                Improved Endurance
              </SelectItem>
              <SelectItem value="stress_reduction">Stress Reduction</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-1">
        <Label className="mb-2 font-medium" htmlFor="experienceLevel">
          Experience Level
        </Label>
        <Select
          id="experienceLevel"
          value={formData.experienceLevel}
          onValueChange={(value) =>
            setFormData({ ...formData, experienceLevel: value })
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a level" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Levels</SelectLabel>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-1">
        <Label className="mb-2 font-medium" htmlFor="workoutSchedule">
          Workout Schedule
        </Label>
        <Input
          id="workoutSchedule"
          placeholder="Preferred days and times for workouts"
          value={formData.workoutSchedule}
          onChange={(e) =>
            setFormData({
              ...formData,
              workoutSchedule: e.target.value,
            })
          }
        />
      </div>

      <div className="flex flex-col gap-1">
        <Label className="mb-2 font-medium" htmlFor="dietaryPreferences">
          Dietary Restrictions or Preferences
        </Label>
        <Input
          id="dietaryPreferences"
          placeholder="e.g., vegetarian, vegan, allergies"
          value={formData.dietaryPreferences}
          onChange={(e) =>
            setFormData({
              ...formData,
              dietaryPreferences: e.target.value,
            })
          }
        />
      </div>

      <div className="flex flex-col gap-1">
        <Label className="mb-2 font-medium" htmlFor="injuries">
          Injuries or Medical Conditions
        </Label>
        <Input
          id="injuries"
          placeholder="If applicable"
          value={formData.injuries}
          onChange={(e) =>
            setFormData({ ...formData, injuries: e.target.value })
          }
        />
      </div>
    </>
  );
};

const OtherInfo = () => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <Label className="mb-2 font-medium" htmlFor="creativeField">
          Creative Field (Optional)
        </Label>
        <Input
          id="creativeField"
          value={formData.creativeField}
          onChange={(e) =>
            setFormData({ ...formData, creativeField: e.target.value })
          }
        />
      </div>
      
      <div className="flex flex-col gap-1">
        <Label className="mb-2 font-medium" htmlFor="location">
          Location
        </Label>
        <Input
          id="location"
          value={formData.location}
          onChange={(e) =>
            setFormData({ ...formData, location: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col gap-1">
        <Label className="mb-2 font-medium" htmlFor="referral">
          Referral
        </Label>
        <Input
          id="referral"
          placeholder="How did you hear about FitCreatives?"
          value={formData.referral}
          onChange={(e) =>
            setFormData({ ...formData, referral: e.target.value })
          }
        />
      </div>
    </>
  );
};
