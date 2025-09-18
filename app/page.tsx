import About from "./About/About";
import Home from "./Home/Home";

export default function main(){
    return (
        <div className="pointer-events-auto">
            <Home/>
            <About/>
        </div>
    )
}