import Hero from '@/components/trainers/Hero'
import TrainerCard from '@/components/trainers/TrainerCard'
import React from 'react'

export default function Trainers() {
  return (
    <div className='border p-4 rounded-2xl'>
      <Hero/>
      <TrainerCard/>
    </div>
  )
}
