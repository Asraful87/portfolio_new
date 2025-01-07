import React from 'react'

const Statitistic = () => {
  return (
    <div  className="w-full md:container mx-auto flex flex-wrap items-center justify-around relative min-h-[350px] overflow-hidden shrink-0 pl-2 md:pl-0 pr-2 ">
    <div className=" flex flex-col items-start justify-start">
      <div className="relative capitalize font-semibold text-[25px] md:text-[40px] lg:text-[60px]">245%</div>
      <div className="w-[150px] md:w-[215px] relative text-base leading-[24px] font-medium text-gray-500 inline-block">
        More revenues for the brand
      </div>
    </div>
    <div className=" flex flex-col items-start justify-start">
      <div className="relative capitalize font-semibold text-[25px] md:text-[40px] lg:text-[60px]">130K+</div>
      <div className="w-[155px] relative text-base leading-[24px] font-medium text-gray-500 inline-block">{`Audiences reached `}</div>
    </div>
    <div className=" flex flex-col items-start justify-start">
      <div className="relative capitalize font-semibold text-[25px] md:text-[40px] lg:text-[60px]">50+</div>
      <div className="w-[155px] relative text-base leading-[24px] font-medium text-gray-500 inline-block">
        <span className="capitalize">b</span>rands trust us
      </div>
    </div>
    
    <div className=" flex flex-col items-start justify-start gap-5 text-black">
      <div className="w-[502px] relative tracking-[-1px] capitalize font-medium inline-block text-[38px]">
        commitments
      </div>
      <div className="w-[calc(100vw-20px)]  !pr-3 md:w-[576px]  text-lg leading-[25px] font-normal text-gray-500 inline-block">
        We are committed to working with you collaboratively to understand
        your goals and create a strategy that will achieve them.
      </div>
    </div>
  </div>
  )
}

export default Statitistic