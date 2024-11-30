import { z } from 'zod'
import { FITNESS_GOAL_OPTIONS } from './constants';
import { EXPERIENCE_LEVEL_OPTIONS } from './constants';

export const StepSchemas = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().min(1, "Please enter your email address").email("Invalid Email address"),
    contactNumber: z.string().min(10, "Contact number must be at least 10 digits"),
    emergencyContact: z.string().min(1, "Please enter an emergency contact details"),
    age: z.coerce.number().min(1, "Please enter your age").min(18, "You must be at least 18 years old").max(100, "Age must be below 100"),
    fitnessGoal: z.enum(FITNESS_GOAL_OPTIONS).nullable() 
    .refine((val) => val !== null, {
      message: "Please select a fitness goal",
    }),
    experienceLevel: z.enum(EXPERIENCE_LEVEL_OPTIONS).nullable() 
    .refine((val) => val !== null, {
      message: "Please select your experience level",
    }),
    referral: z.string().min(1, "This can't be empty")   
})