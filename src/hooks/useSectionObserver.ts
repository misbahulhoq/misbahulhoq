import { useCurrentSection } from "@/app/Provider";
import { useEffect, useRef } from "react";

const useSectionObserver = (sectionId: string) => {
  const ref = useRef<HTMLDivElement>(null);
  const { setCurrentSection } = useCurrentSection();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentSection(sectionId);
        }
      },
      {
        root: null,
        threshold: 0.5, // 50% visible triggers
      },
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [sectionId, setCurrentSection]);

  return ref;
};

export default useSectionObserver;
