import React from 'react'

const MobileMemberCard = ({img,name,role}:{
    img:string,
    name:string,
    role:string
}) => {
  return (
    <div className=' flex flex-col items-center justify-center gap-3 md:hidden'>
        <img src={img} alt="" className='size-20 rounded-full'/>
        <h2 className='text-[20px] text-white'>{name}</h2>
        <p className='text-sm font-semibold text-green-500'>{role}</p>
    </div>
  )
}

export default MobileMemberCard