import { useRef, useEffect, useState } from "react";
import ServiceInquiryModal from "./ServiceInquiryModal";

const items = [
  "Celebrity Portraits",
  "Award Ceremonies",
  "Brand Campaign Films",
  "Red Carpet Events",
  "Private Commissions",
  "Wedding Photography & Film",
];

// Map strip labels to service titles
const stripToService: Record<string, string> = {
  "Celebrity Portraits": "Celebrity Photography",
  "Award Ceremonies": "Event Cinematography",
  "Brand Campaign Films": "Brand Campaign Films",
  "Red Carpet Events": "Red Carpet Coverage",
  "Private Commissions": "Custom Packages",
  "Wedding Photography & Film": "Wedding Photography & Film",
};

const CredibilityStrip = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isDragging = useRef(false);
  const hasDragged = useRef(false);
  const startX = useRef(0);
  const scrollLeftVal = useRef(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animId: number;
    const speed = 0.5;

    const step = () => {
      if (!isPaused && !isDragging.current && el) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(step);
    };
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeftVal.current = scrollRef.current?.scrollLeft || 0;
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    hasDragged.current = true;
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeftVal.current - (x - startX.current);
  };
  const handleMouseUp = () => { isDragging.current = false; };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeftVal.current = scrollRef.current?.scrollLeft || 0;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    hasDragged.current = true;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeftVal.current - (x - startX.current);
  };
  const handleTouchEnd = () => { isDragging.current = false; };

  const handleItemClick = (item: string) => {
    if (hasDragged.current) return;
    setSelectedService(stripToService[item] || item);
    setModalOpen(true);
  };

  const renderItems = () =>
    items.map((item, i) => (
      <div key={`${item}-${i}`} className="flex items-center shrink-0">
        {i > 0 && (
          <span
            className="w-[1px] h-4 mx-6 shrink-0"
            style={{ background: "rgba(255,255,255,0.2)" }}
          />
        )}
        <span
          onClick={() => handleItemClick(item)}
          className="font-body text-[10px] uppercase whitespace-nowrap cursor-pointer hover:opacity-100 transition-opacity duration-300"
          style={{ letterSpacing: "4px", color: "rgba(255,255,255,0.85)" }}
        >
          {item}
        </span>
      </div>
    ));

  return (
    <>
      <div
        className="w-full bg-wine py-[22px] overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { setIsPaused(false); isDragging.current = false; }}
      >
        <div
          ref={scrollRef}
          className="flex items-center overflow-hidden cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex items-center shrink-0 px-6">
            {renderItems()}
            <span className="w-[1px] h-4 mx-6 shrink-0" style={{ background: "rgba(255,255,255,0.2)" }} />
          </div>
          <div className="flex items-center shrink-0 px-6">
            {renderItems()}
            <span className="w-[1px] h-4 mx-6 shrink-0" style={{ background: "rgba(255,255,255,0.2)" }} />
          </div>
        </div>
      </div>

      <ServiceInquiryModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        serviceName={selectedService}
      />
    </>
  );
};

export default CredibilityStrip;
