import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const faqItems = [
  {
    question: "How do I sign up for the project?",
    answer:
      "You can easily Contact us through our online portal. The process takes less than 1 minutes to complete.",
  },
  {
    question: "What should I prepare before starting?",
    answer:
      "Prepare your business goals, target audience information, and any existing marketing materials you'd like us to review.",
  },
  {
    question: "Does my company need marketing advice?",
    answer:
      "If you're looking to grow your business and reach new customers, our expert marketing advice can help you achieve better results.",
  },
];

const Help = () => {
  return (
    <section className="container mx-auto pr-4   flex flex-col md:flex-row items-center justify-around gap-4 md:min-h-screen ">
      {/* Left Column - FAQ Accordion */}
      <div className="w-[360px]md:w-full max-w-xl flex flex-col gap-3">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-200 py-0"
            >
              <AccordionTrigger className="text-lg ma py-4 w-[340px] md:w-full hover:no-underline bg-transparent border-b border-b-[#E5E5E5] border-t my-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#D2691E] text-[14px] pb-2 py-4 w-[340px] md:w-full font-medium">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Right Column - Newsletter */}
      <div className="w-full max-w-md flex flex-col gap-8 mt-14">
        <div className="">
          <h2 className="text-2xl md:text-[40px] font-medium tracking-tight">
            How we can help you?
          </h2>
          <p className="text-[14px] md:text-lg text-gray-600 mt-3">
            Follow our newsletter. We will regularly update our latest project
            and availability.
          </p>
        </div>

        <div className="space-y-8">
          <div className="flex fflex-row gap-3">
            <Input
              placeholder="Enter your email"
              className="h-12 bg-[#FAFAFA] text-gray-500 rounded-2xl"
            />
            <Button className="h-12 px-8 bg-blue-600 hover:bg-blue-700 rounded-full text-white">
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
