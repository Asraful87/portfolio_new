import React from 'react'

const MemberCard = ({img,name,role}:{
    img:string,
    name:string,
    role:string
}) => {
  return (
    <div className=' items-center justify-start w-[300px] h-[100px] gap-4 member_card_gradient rounded-l-full rounded-r-full hidden md:flex'>
        <img src={img} alt="" className='size-20 rounded-full object-cover'/>
        <div className='flex flex-col gap-1 '>
            <p className='text-sm font-semibold sour-gummy'>{name}</p>
            <p className='text-sm font-semibold bangers-regular'>{role}</p>
        </div>
    </div>
  )
}

export default MemberCard