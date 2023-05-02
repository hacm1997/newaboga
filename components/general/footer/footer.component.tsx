import styles from './footer.module.css'

export default function FooterComponent(){

    return(
        <>
            <div className={"flex h-96 justify-center gap-10 pt-20 "+ styles.content_footer}>
                <div className="w-80 ">
                    <img src='/images/logo-aboga-white.png' alt="Aboga" title="Logo Aboga Blanco" />
                    <h4>Sobre nosotros</h4>
                    <p>
                        Lorem ipsum dolor sit amet, conse
                        tetuer adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt ut.
                    </p>
                </div>
                <div className="w-60 ">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h4>Contacto</h4>
                        </div>
                        <div>02</div>
                        <div>03</div>
                    </div>
                </div>
                <div className="w-60 ">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h4>Redes sociales</h4>
                        </div>
                        <div>02</div>
                        <div>03</div>
                    </div>
                </div>
            </div>
        </>
    );
}
