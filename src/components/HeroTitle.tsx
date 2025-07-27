import SplitText from "./TextAnimations/SplitText/SplitText";

export default function HeroTitle() {
  return (
    <div className="my-5 flex flex-row items-center justify-center md:justify-between">
      
      {/* md and up */}
      <SplitText
        text="🌱 Digital Garden"
        className="hidden md:block text-7xl font-semibold text-center"
        delay={100}
        duration={2}
        ease="power3.out"
        splitType="words"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
    </div>
  );
}
