
import About from "./About/page";
import ContactComp from "./Contact/page";
import Home from "./Home/page";
import ProjectComp from "./Projects/page";
import SkillSets from "./Skills/page";

export default function main(){
    return (
        <div className="pointer-events-auto">
            <Home/>
            <About/>
            <SkillSets/>
            <ProjectComp/>
            <ContactComp/>
        </div>
    )
}