import { cn } from '@/lib/utils'
import React from 'react'

const MobileMemberCard = ({img,name,role}:{
    img:string,
    name:string,
    role:string
}) => {
  return (
    <div className=' flex flex-col items-center justify-center gap-3 md:hidden'>
        <img src={img} alt="" className='rounded-full size-20 md:w-36 md:h-36 flex-shrink-0 object-cover'/>
        <h2 className='text-[20px] text-white sour-gummy'>{name}</h2>
        <p className={cn('text-lg font-bold text-black bangers-regular')}>{role}</p>
    </div>
  )
}

export default MobileMemberCard