import SkillComp from "@/components/skillcomp/SkillComp";

export default function SkillSets() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col">
      <div className="py-6">
        <h2 className="text-3xl font-bold text-center">Skills</h2>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <SkillComp />
      </div>
    </div>
  );
}
