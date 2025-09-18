
import About from "./About/About";
import ContactComp from "./Contact/ContactComp";
import Home from "./Home/Home";
import ProjectComp from "./Projects/Projects";
import SkillSets from "./Skills/SkillSet";

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