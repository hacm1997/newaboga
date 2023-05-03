import styles from './banner.module.css';

export default function BannerComponent(){

    return(
        <>
            <div className={"bg-[url('/images/home/background-home.png')] -mt-32 bg-no-repeat bg-right "+styles.content}>
                <div className={"flex items-center gap-10 pt-40 w-full "+ styles.general}>
                    <div className={"w-3/4 "+styles.texts}>
                        <h1 className={"pl-32 sm:text-base sm:pl-10 "+styles.title}>
                            ¡Somos su mayor aliado
                            legal! En Aboga, velamos por usted y su empresa
                        </h1>
                        <p className={"pl-32 pt-4 sm:pl-10 "+styles.description}>
                            En nuestro equipo contamos con abogados altamente capacitados y
                            con amplia experiencia en diversas áreas del derecho. Nos especializamos
                            en derecho familiar, derecho comercial, derecho constitucional o laboral,
                            y ofrecemos servicios de asesoría legal.
                        </p>
                        <div className={"pl-32 pt-4 sm:pl-10 "+ styles.button}>
                            <button >
                                Agendar cita
                            </button>
                        </div>

                    </div>
                    <div className="">
                        <img className="float-right" src="/images/home/banner-home.png"/>
                    </div>
                </div>
            </div>
        </>
    );
}
