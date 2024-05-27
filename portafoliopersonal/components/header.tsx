import { socialNetworks } from "@/data";
import MotionTransition from "./transition-component";
import Link from "next/link";

const Header = () => {
    return ( 
        <MotionTransition position="right" className="absolute z-40 inline-block w-full top-5 md:top-10">
            <header>
                <div className="container justify-between max-w-6xl mx-auto">
                    <Link href ="/">
                        <h1 className="my-3 text-2xl font-bold text-center md:text-center">
                            JJ
                            <span className="text-secondary">
                                Campos
                            </span>
                        </h1>
                        
                    </Link>
                    <div className="flex items-center justify-center gap-7">
                        {socialNetworks.map(({logo, src, id}) =>(
                            <Link key={id}
                                href= {src}
                                target="_blank"
                                className="transition-all duration-300 hover:text-secondary"
                            >
                                {logo}
                            </Link>
                        ))}

                    </div>
                </div>
            </header>
        </MotionTransition>
     );
}

export default Header;