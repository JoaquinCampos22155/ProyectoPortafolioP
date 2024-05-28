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
            <p className="max-w-xxl text-2xl text-justify">
                Joaquin Campos, actualmente cursando 3er año de la carrera ciencias de la computación y tecnologías de la información, 
                dentro de los proyectos que he trabajado la mayoría han sido trabajos de la universidad, de las cuales solos 3 han tenido 
                product-owners, pero dejando de lado, la experiencia como ingeniero en CC&TI ha sido gratificante y les presento por este 
                medio algunos de los proyectos que he tenido el placer de poder hacerlos públicos, sobre todo también tengo algunos proyectos
                no públicos de los cuales me gustaría poder enseñar algún día. 
            </p>
        </ContainerPage>
        </>
     );
}
 
export default PageAboutMe;