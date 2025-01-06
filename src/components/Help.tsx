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
      "You can easily sign up through our online portal. The process takes less than 5 minutes to complete.",
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
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-center justify-around">
          {/* Left Column - FAQ Accordion */}
          <div className="w-full max-w-xl">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-gray-200 py-0"
                >
                  <AccordionTrigger className="text-lg py-2 hover:no-underline bg-transparent">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#D2691E] text-[18px] pb-2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column - Newsletter */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-[40px] font-medium tracking-tight">
                How we can help you?
              </h2>
              <p className="text-lg text-gray-600">
                Follow our newsletter. We will regularly update our latest
                project and availability.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row gap-3">
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
        </div>
      </div>
    </section>
  );
};

export default Help;
