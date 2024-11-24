import GymList from '@/components/findGym/GymList'
import Hero from '@/components/findGym/Hero'
import React from 'react'

export default function FindGym() {
  return (
    <div className='grid gap-4'>
      <Hero />
      <GymList />
    </div>
  )
}
