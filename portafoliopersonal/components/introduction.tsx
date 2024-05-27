'use client'
import { Radius } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return ( 
        <div className='z-20 w-full bg-darkBg/60'>
            <div className='z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2'>
            <Image  className= "justify-center" src="/home-4.jpeg" priority width="300" height="300" alt='Profile pic' style={{borderRadius: "50%"}}/>
            <div className='flex flex-col justify-center max-w-md'>
                <h1 className='mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10'>
                    Y pensar que todo comenzó con, 
                    <TypeAnimation sequence={[
                        " Scratch",
                        1000,
                        ' "Es por dinero"',
                        500,
                        " inspeccionar elemento",
                        1000,
                        ' Greenfoot',
                        1000,

                    ]}
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}
                    className='font-bold text-secondary'/>
                </h1>
                <h2 className='mb-5 text-4xl leading-tight text-center md:text-left md:text-4xl md:mb-10'>
                    Joaquín Campos
                </h2>
                <h3 className='mb-5 text-2xl leading-tight text-center md:text-left md:text-2xl md:mb-10'>
                    Estudiante de CC&TI - Universidad del Valle de Guatemala
                </h3>
                <div className='flex item-center justify-center gap-3 md:justify-start md:gap-10'>
                    <Link href="about-me" className="px-3 py-2 transition-all border-2 cursor-pointer text-white border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary/50">
                        SOBRE MI
                    </Link>
                    <Link href="projects" className="px-3 py-2 transition-all border-2 cursor-pointer text-white border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary/50">
                        PROYECTOS
                    </Link>

                </div>
            </div>
            </div>
            
        </div>
     );
}
 
export default Introduction;