import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FITNESS_GOAL_OPTIONS, EXPERIENCE_LEVEL_OPTIONS } from "./constants";  

export const PersonalInfo = () => {
    const {
        register,
        formState: { errors, touchedFields },
      } = useFormContext();
    
    return (
      <>
        <div className="flex flex-col gap-1">
          <Label className="mb-2 font-medium" htmlFor="name">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            {...register("name")}
          />
          {errors.name && touchedFields.name && <span className="text-red-500 text-xs py-0 my-0">{errors.name.message}</span>}
        </div>
  
        <div className="flex flex-col gap-1">
          <Label className="mb-2 font-medium" htmlFor="email">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            name="email"
            {...register("email")}
          />
          {errors.email && touchedFields.email && <span className="text-red-500 text-xs py-0 my-0">{errors.email.message}</span>}
        </div>
  
        <div className="flex flex-col gap-1">
          <Label className="mb-2 font-medium" htmlFor="contactNumber">
            Tel number
          </Label>
          <Input
            id="contactNumber"
            type="tel"
            name="contactNumber"
            {...register("contactNumber")}
          />
          {errors.contactNumber && touchedFields.contactNumber && <span className="text-red-500 text-xs py-0 my-0">{errors.contactNumber.message}</span>}
        </div>
        <div className="flex flex-col gap-1">
          <Label className="mb-2 font-medium" htmlFor="emergencyContact">
            Emergency Contact Information
          </Label>
          <Input
            id="emergencyContact"
            placeholder="Emergency contact details"
            name="emergencyContact"
            {...register("emergencyContact")}
          />
          {errors.emergencyContact && touchedFields.emergencyContact && <span className="text-red-500 text-xs py-0 my-0">{errors.emergencyContact.message}</span>}
        </div>
      </>
    );
  };
  


  export const IndividualInfo = () => {
    const { register, formState: { errors, touchedFields } } = useFormContext()
    return (
      <>
        <div className="flex flex-col gap-1">
          <Label className="mb-2 font-medium" htmlFor="age">
            Age
          </Label>
          <Input
            id="age"
            type="number"
            name="age"
            min="18"
            {...register("age")}
          />
          {errors.age && touchedFields.age && <span className="text-red-500 text-xs py-0 my-0">{errors.age.message}</span>}
        </div>
        <div className="flex flex-col gap-1">
          <Label className="mb-2 font-medium" htmlFor="weight">
            Weight (kg)
          </Label>
          <Input
            id="weight"
            type="number"
            name="weight"
            {...register("weight")}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label className="mb-2 font-medium" htmlFor="height">
            Height (cm)
          </Label>
          <Input
            id="height"
            type="number"
            name="height"
            {...register("height")}
          />
        </div>
      </>
    );
};
  


export const FitnessInfo = () => {
    const {
        register,
        setValue,
        watch,
        formState: { errors, isSubmitted, touchedFields },
    } = useFormContext();
    
    return (
      <>
         <div className="flex flex-col gap-1">
            <Label className="mb-2 font-medium" htmlFor="fitnessGoal">
                Primary Fitness Goal
            </Label>
            <Select
                id="fitnessGoal"
                name="fitnessGoal"
                onValueChange={(value) => {
                  setValue("fitnessGoal", value, { shouldValidate: true });
                }}
                defaultValue={watch("fitnessGoal") || ""}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a goal" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Goals</SelectLabel>
                        {FITNESS_GOAL_OPTIONS.map((goal) => (
                            <SelectItem key={goal} value={goal}>
                                {goal
                                    .replace("_", " ")
                                    .toLowerCase()
                                    .replace(/\b\w/g, (char) => char.toUpperCase())}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            {errors.fitnessGoal && (
                <span className="text-red-500 text-xs py-0 my-0"> {(touchedFields.fitnessGoal || isSubmitted) && errors.fitnessGoal.message}</span>
            )}
        </div>
  
        <div className="flex flex-col gap-1">
          <Label className="mb-2 font-medium" htmlFor="experienceLevel">
            Experience Level
          </Label>
          <Select
            id="experienceLevel"
            name="experienceLevel"
            onValueChange={(value) => {
              setValue("experienceLevel", value, { shouldValidate: true });
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a level" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Levels</SelectLabel>
                {EXPERIENCE_LEVEL_OPTIONS.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {(touchedFields.experienceLevel || isSubmitted) && errors.experienceLevel && (
          <span className="text-red-500 text-xs py-0 my-0">
            {errors.experienceLevel.message}
          </span>
        )}
        </div>
  
        <div className="flex flex-col gap-1">
          <Label className="mb-2 font-medium" htmlFor="workoutSchedule">
            Workout Schedule
          </Label>
          <Input
            id="workoutSchedule"
            name="workoutSchedule"
            placeholder="Preferred days and times for workouts"
            {...register("workoutSchedule")}
          />
        </div>
  
        <div className="flex flex-col gap-1">
          <Label className="mb-2 font-medium" htmlFor="dietaryPreferences">
            Dietary Restrictions or Preferences
          </Label>
          <Input
            id="dietaryPreferences"
            name="dietaryPreferences"
            placeholder="e.g., vegetarian, vegan, allergies"
            {...register("dietaryPreferences")}
          />
        </div>
  
        <div className="flex flex-col gap-1">
          <Label className="mb-2 font-medium" htmlFor="injuries">
            Injuries or Medical Conditions
          </Label>
          <Input
            id="injuries"
            name="injuries"
            placeholder="If applicable"
            {...register("injuries")}
          />
        </div>
      </>
    );
};
  

export const OtherInfo = () => {
    const { register, formState: { errors, touchedFields } } = useFormContext()
    return (
      <>
        <div className="flex flex-col gap-1">
          <Label className="mb-2 font-medium" htmlFor="creativeField">
            Creative Field (Optional)
          </Label>
          <Input
            id="creativeField"
            name="creativeField"
            {...register("creativeField")}
          />
        </div>
  
        <div className="flex flex-col gap-1">
          <Label className="mb-2 font-medium" htmlFor="location">
            Location
          </Label>
          <Input
            id="location"
            name="location"
            {...register("location")}
          />
        </div>
  
        <div className="flex flex-col gap-1">
          <Label className="mb-2 font-medium" htmlFor="referral">
            Referral
          </Label>
          <Input
            id="referral"
            name="referral"
            placeholder="How did you hear about FitCreatives?"
            {...register("referral")}
          />
          {errors.referral && touchedFields.referral && <span className="text-red-500 text-xs py-0 my-0">{errors.referral.message}</span>}
        </div>
      </>
    );
};
  