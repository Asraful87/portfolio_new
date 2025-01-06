import React from 'react'

const Statitistic = () => {
  return (
    <div className="w-full md:container mx-auto flex flex-wrap items-center justify-around relative min-h-[400px] overflow-hidden shrink-0">
    <div className=" flex flex-col items-start justify-start">
      <div className="relative capitalize font-semibold">245%</div>
      <div className="w-[215px] relative text-base leading-[24px] font-medium text-gray-500 inline-block">
        More revenues for the brand
      </div>
    </div>
    <div className=" flex flex-col items-start justify-start">
      <div className="relative capitalize font-semibold">130K+</div>
      <div className="w-[155px] relative text-base leading-[24px] font-medium text-gray-500 inline-block">{`Audiences reached `}</div>
    </div>
    <div className=" flex flex-col items-start justify-start">
      <div className="relative capitalize font-semibold">50+</div>
      <div className="w-[155px] relative text-base leading-[24px] font-medium text-gray-500 inline-block">
        <span className="capitalize">b</span>rands trust us
      </div>
    </div>
    
    <div className=" flex flex-col items-start justify-start gap-5 text-black">
      <div className="w-[502px] relative tracking-[-1px] capitalize font-medium inline-block">
        commitments
      </div>
      <div className="w-[576px] relative text-lg leading-[32px] font-medium text-gray-500 inline-block">
        We are committed to working with you collaboratively to understand
        your goals and create a strategy that will achieve them.
      </div>
    </div>
  </div>
  )
}

export default Statitistic