import {
  FunctionComponent,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
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
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export type OurWorkType = {
  className?: string;
};

interface ImageItem {
  src: string;
  title: string;
}

const images: ImageItem[] = [
  { src: "/reviews/1.png", title: "Project 1" },
  { src: "/reviews/2.png", title: "Project 2" },
  { src: "/reviews/3.png", title: "Project 3" },
  { src: "/reviews/4.png", title: "Project 4" },
  { src: "/reviews/5.png", title: "Project 5" },
  { src: "/reviews/6.png", title: "Project 6" },
  { src: "/reviews/7.png", title: "Project 7" },
  { src: "/reviews/8.png", title: "Project 8" },
  { src: "/reviews/9.png", title: "Project 9" },
  { src: "/reviews/10.png", title: "Project 10" },
];

const OurWork: FunctionComponent<OurWorkType> = ({ className = "" }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [visibleImages, setVisibleImages] = useState(5);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handlePrevious = useCallback(() => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex !== null
        ? prevIndex > 0
          ? prevIndex - 1
          : images.length - 1
        : null
    );
  }, []);

  const handleNext = useCallback(() => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex !== null
        ? prevIndex < images.length - 1
          ? prevIndex + 1
          : 0
        : null
    );
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handlePrevious();
      } else if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "Escape") {
        setSelectedImageIndex(null);
      }
    },
    [handlePrevious, handleNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

 

  return (
    <div
    id="our-work"
      className={`w-full md:container mx-auto relative overflow-hidden shrink-0 text-left text-45xl text-black font-general-sans-variable ${className} mt-10`}
    >
      <h2 className="w-full text-center capitalize font-medium text-[52px] ">
        Our Work
      </h2>
      <p className="w-full text-lg leading-[32px] font-medium text-gray-500 text-center inline-block mb-8">
        A glimpse of our portfolio
      </p>

      <div
        ref={scrollContainerRef}
        className="flex w-full items-start justify-start flex-nowrap gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
      >
        {images.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-[200px] flex-shrink-0 snap-start"
          >
            <div className="text-sm font-medium text-gray-700 mb-2 text-center h-8 flex items-center justify-center">
              {item.title}
            </div>
            <button
              onClick={() => setSelectedImageIndex(index)}
              className="p-0 border-0 bg-transparent cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src={item.src}
                      alt={`Portfolio item: ${item.title}`}
                      className="w-[200px] h-[300px] object-cover rounded-lg hover:scale-105 transition"
                    />
                  </TooltipTrigger>
                  <TooltipContent className="h-7 my-4">
                    <p>Click for more details</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </button>
          </div>
        ))}
      </div>

      

      <Dialog
        open={selectedImageIndex !== null}
        onOpenChange={() => setSelectedImageIndex(null)}
      >
        <DialogPortal>
          <DialogOverlay className="bg-black/80" />
          <DialogContent className="border-none bg-transparent shadow-none max-w-[90vw] max-h-[90vh]">
            {selectedImageIndex !== null && (
              <div className="relative group">
                <img
                  src={images[selectedImageIndex].src}
                  alt={`Selected portfolio item: ${images[selectedImageIndex].title}`}
                  className="w-full h-full object-contain rounded-lg"
                  style={{ maxHeight: "90vh" }}
                />
                
                
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
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
