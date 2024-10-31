import Gyms from '@/components/findGym/Gyms'
import Hero from '@/components/findGym/Hero'
import React from 'react'

export default function FindGym() {
  return (
    <div className='grid gap-4'>
      <Hero />
      <Gyms />
    </div>
  )
}
