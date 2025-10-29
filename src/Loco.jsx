import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loco() {
  const textWrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = textWrapperRef.current;

    // Duplicate the content dynamically
    const text = wrapper.querySelector(".scroll-text");
    const clone = text.cloneNode(true);
    wrapper.appendChild(clone);

    // Smooth infinite loop animation
    gsap.to(wrapper, {
      xPercent: -50,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div className="absolute bottom-10 left-0 w-full overflow-hidden">
      <div
        ref={textWrapperRef}
        className="flex whitespace-nowrap text-5xl font-extrabold text-white tracking-wide"
       
      >
        <span className="scroll-text mr-10 mb-5">
  <span className="text-cyan-400">Three.js</span>&nbsp;
  <span className="text-yellow-300">Motion&nbsp;Demo</span>&nbsp;•&nbsp;
  Smooth&nbsp;•&nbsp;Dynamic&nbsp;•&nbsp;Infinite&nbsp;•&nbsp;
  <span className="text-cyan-400">Three.js</span>&nbsp;
  <span className="text-yellow-300">Motion&nbsp;Demo</span>&nbsp;•&nbsp;
  Smooth&nbsp;•&nbsp;Dynamic&nbsp;•&nbsp;Infinite&nbsp;•&nbsp;
  <span className="text-cyan-400">Three.js</span>&nbsp;
  <span className="text-yellow-300">Motion&nbsp;Demo</span>&nbsp;•&nbsp;
  Smooth&nbsp;•&nbsp;Dynamic&nbsp;•&nbsp;Infinite&nbsp;•&nbsp;
  <span className="text-cyan-400">Three.js</span>&nbsp;
  <span className="text-yellow-300">Motion&nbsp;Demo</span>&nbsp;•&nbsp;
  Smooth&nbsp;•&nbsp;Dynamic&nbsp;•&nbsp;Infinite&nbsp;•&nbsp;
  <span className="text-cyan-400">Three.js</span>&nbsp;
  <span className="text-yellow-300">Motion&nbsp;Demo</span>&nbsp;•&nbsp;
  Smooth&nbsp;•&nbsp;Dynamic&nbsp;•&nbsp;Infinite&nbsp;•&nbsp;
   <span className="text-cyan-400">Three.js</span>&nbsp;
  <span className="text-yellow-300">Motion&nbsp;Demo</span>&nbsp;•&nbsp;
  Smooth&nbsp;•&nbsp;Dynamic&nbsp;•&nbsp;Infinite&nbsp;•&nbsp;
   <span className="text-cyan-400">Three.js</span>&nbsp;
  <span className="text-yellow-300">Motion&nbsp;Demo</span>&nbsp;•&nbsp;
  Smooth&nbsp;•&nbsp;Dynamic&nbsp;•&nbsp;Infinite&nbsp;•&nbsp;
   <span className="text-cyan-400">Three.js</span>&nbsp;
  <span className="text-yellow-300">Motion&nbsp;Demo</span>&nbsp;•&nbsp;
  Smooth&nbsp;•&nbsp;Dynamic&nbsp;•&nbsp;Infinite&nbsp;•&nbsp;
   <span className="text-cyan-400">Three.js</span>&nbsp;
  <span className="text-yellow-300">Motion&nbsp;Demo</span>&nbsp;•&nbsp;
  Smooth&nbsp;•&nbsp;Dynamic&nbsp;•&nbsp;Infinite&nbsp;•&nbsp;
   <span className="text-cyan-400">Three.js</span>&nbsp;
  <span className="text-yellow-300">Motion&nbsp;Demo</span>&nbsp;•&nbsp;
  Smooth&nbsp;•&nbsp;Dynamic&nbsp;•&nbsp;Infinite&nbsp;•&nbsp;
   <span className="text-cyan-400">Three.js</span>&nbsp;
  <span className="text-yellow-300">Motion&nbsp;Demo</span>&nbsp;•&nbsp;
  Smooth&nbsp;•&nbsp;Dynamic&nbsp;•&nbsp;Infinite&nbsp;•&nbsp;
   <span className="text-cyan-400">Three.js</span>&nbsp;
  <span className="text-yellow-300">Motion&nbsp;Demo</span>&nbsp;•&nbsp;
  Smooth&nbsp;•&nbsp;Dynamic&nbsp;•&nbsp;Infinite&nbsp;•&nbsp;
</span>

      </div>
    </div>
  );
}
