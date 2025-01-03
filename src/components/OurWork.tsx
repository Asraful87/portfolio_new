import { FunctionComponent, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type OurWorkType = {
  className?: string;
};

const images = [
  "/rectangle-251@2x.png",
  "/rectangle-252@2x.png",
  "/rectangle-253@2x.png",
  "/rectangle-254@2x.png",
  "/rectangle-255@2x.png",
  "/rectangle-256@2x.png",
  "/rectangle-257@2x.png",
  "/rectangle-258@2x.png",
  "/rectangle-259@2x.png",
  "/rectangle-260@2x.png",
];

const OurWork: FunctionComponent<OurWorkType> = ({ className = "" }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div
      className={`w-full md:container mx-auto relative overflow-hidden shrink-0 text-left text-45xl text-black font-general-sans-variable ${className}`}
    >
      <div className="w-full text-center capitalize font-medium">Our Work</div>
      <div className="w-full text-lg leading-[32px] font-medium text-gray-500 text-center inline-block mb-8">
        A glimpse of our portfolio
      </div>

      <div className="flex w-full items-center flex-wrap gap-3 ">
        {images.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(item)}
            className="p-0 border-0 bg-transparent cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <img
                    src={item}
                    alt={`Portfolio item ${index + 1}`}
                    className="w-[200px] h-[300px] object-cover rounded-lg hover:scale-105 transition"
                  />
                </TooltipTrigger>
                <TooltipContent className="h-7 my-4">
                  <p>Click For more details</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </button>
        ))}
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogPortal>
          <DialogOverlay className="bg-black/80" />
          <DialogContent className="border-none bg-transparent shadow-none max-w-[90vw] max-h-[90vh]">
            {selectedImage && (
              <div className="relative group">
                <img
                  src={selectedImage}
                  alt="Selected portfolio item"
                  className="w-full h-full object-contain rounded-lg"
                  style={{ maxHeight: "90vh" }}
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Close dialog"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            )}
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </div>
  );
};

export default OurWork;
