import Details from '@/components/events/Details'
import Organizers from '@/components/events/Organizers'
import Process from '@/components/home/Process'
import React from 'react'

export default function Events() {
  return (
    <div className='w-full grid gap-8'>
      <Organizers />
      <Details />
    </div>
  )
}
