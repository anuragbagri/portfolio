import Profile from "@/components/profile/Profile";

export default function About() {
  return (
    <div className="relative bg-black min-h-screen flex flex-col items-center p-8">
      {/* Heading */}
      <h2 className="text-white text-5xl font-bold mb-8 text-center">About</h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* About Me Card */}
        <div className="bg-gray-900 text-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">About Me</h3>
          <p className="text-m ">
            Hi, I’m Anurag Bagri. I build Web3 apps (mostly on solana blockchain) and have good skills in web2 development
            ,from sratch building to scaling apps to production-level application. I enjoy
            experimenting with new technologies, solving  problems
            and learning continuously.Always learning from experienced people across industry.
            <br/>
            so Keep learning and keep Contributing. 
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-gray-900 text-white rounded-2xl shadow-lg p-6 flex items-center justify-center">
          <Profile />
        </div>
      </div>
    </div>
  );
}
