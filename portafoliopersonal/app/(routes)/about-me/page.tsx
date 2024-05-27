import ContainerPage from "@/components/container";
import CounterServices from "@/components/counter-services";
import TransitionPage from "@/components/transition-page";

const PageAboutMe = () => {
    return ( 
        <>
        <TransitionPage />
        <ContainerPage>
            <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10 font-bold text-secondary">
                Trayectoria {''}
                <span className="text-white">
                    Profesional
                </span>
            </h1>
            <CounterServices />
        </ContainerPage>
        </>
     );
}
 
export default PageAboutMe;