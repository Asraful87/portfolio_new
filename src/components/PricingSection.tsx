import PricingCards from "./PricingCards"


const PricingSection = () => {
  return (
    <div id="pricing" className='w-full  flex items-center justify-center  flex-col '>
      <h1 className='text-[32px] font-bold'>Pricing:</h1>
      <p className='text-2xl'>The best way to get started.</p>
      <PricingCards/>
    </div>
  )
}

export default PricingSection