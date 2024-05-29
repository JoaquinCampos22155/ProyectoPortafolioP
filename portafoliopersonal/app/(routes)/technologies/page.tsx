import SliderTech from "@/components/slider-technologies";
import TransitionPage from "@/components/transition-page";

const PageTech = () => {
    return ( 
        <>
            <TransitionPage />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
                <div className="max-w-[450px] mt-20">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10 font-bold text-secondary">
                        Tec
                        <span className="font-bold text-white">
                            nologías
                        </span>
                    </h1>
                    
                </div>
                <div>
                    <SliderTech />
                </div>
            </div>
        </>
     );
}
 
export default PageTech ;