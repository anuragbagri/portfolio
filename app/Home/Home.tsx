import BackGround from "@/components/background/BackGround";
import NavBarComponent from "@/components/navBar/NavBarComponent";

export default function Home() {
  return (
   <div className="relative h-screen w-screen">
  <div className="fixed top-0 left-0 w-full z-50">
    <NavBarComponent />
  </div>

  {/* Background (hover enabled) */}
<BackGround />
    
  <div className="absolute inset-0 flex items-center justify-center text-center px-4 pointer-events-none">
    <h1 className="text-white text-5xl md:text-6xl font-bold pointer-events-auto">
      Hello, How's all going? <br /> Welcome to my portfolio website !
    </h1>
  </div>
</div>

  );
}
