import styles from './banner.module.css';

export default function BannerComponent(){

    return(
        <>
            <div className={"bg-[url('/images/home/background-home.png')] -mt-32 bg-no-repeat bg-right "+styles.content}>
                <div className="flex items-center gap-10 pt-40 w-full ">
                    <div className="w-2/4">
                        <h1 className={"pl-32 "+styles.title}>
                            ¡Somos su mayor aliado
                            legal! En Aboga, velamos por usted y su empresa
                        </h1>
                        <p className={"pl-32 pt-4 "+styles.description}>
                            En nuestro equipo contamos con abogados altamente capacitados y
                            con amplia experiencia en diversas áreas del derecho. Nos especializamos
                            en derecho familiar, derecho comercial, derecho constitucional o laboral,
                            y ofrecemos servicios de asesoría legal.
                        </p>
                    </div>
                    <div className="">
                        <img className="float-right" src="/images/home/banner-home.png"/>
                    </div>
                </div>
            </div>
        </>
    );
}
