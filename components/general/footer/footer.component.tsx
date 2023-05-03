import styles from './footer.module.css'

export default function FooterComponent(){

    return(
        <>
            <div className={"flex h-auto justify-center gap-20 pt-20 pb-20 pl-10 flex-col sm:items-center sm:pl-10 sm:flex-col md:flex-row md:pl-0 lg:flex-row lg:pl-0 xl:flex-row "+ styles.content_footer}>
                <div className="w-56 ">
                    <img src='/images/logo-aboga-white.png' alt="Aboga" title="Logo Aboga Blanco" />
                    <h4 className="pt-6">Sobre nosotros</h4>
                    <p className={"pt-6 w-58 "}>
                        Lorem ipsum dolor sit amet, conse
                        tetuer adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt ut.
                    </p>
                </div>
                <div className="w-68 ">
                    <div className={"flex flex-col gap-8  "+styles.contact}>
                        <div>
                            <h4>Contacto</h4>
                        </div>
                        <div className="flex gap-8 items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 7.35q3.05-2.8 4.525-5.088T18 10.2q0-2.725-1.738-4.462T12 4Q9.475 4 7.737 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35ZM12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Zm0-11.8Z"/>
                            </svg>
                            <p>
                                Calle 29a ##22-46 Esquina<br/>
                                Cartagena, Bolívar, Colombia
                            </p>
                        </div>
                        <div className="flex gap-8 items-center ">
                            <i className='bx bxs-phone'></i>
                            <p>
                                (+57) 300 123 4567<br/>
                                (+57) 312 234 5678
                            </p>
                        </div>
                        <div className="flex gap-8 items-center ">
                            <i className='bx bx-time-five'></i>
                            <p>
                                Horario de atención<br/>
                                9:00 am a 7:00 pm
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-60 ">
                    <div className={"flex flex-col gap-8  "+styles.networks}>
                        <div>
                            <h4>Redes sociales</h4>
                        </div>
                        <div className="flex gap-4 items-center ">
                            <i className='bx bxl-instagram'></i>
                            <i className='bx bxl-facebook'></i>
                            <i className='bx bxl-linkedin'></i>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 pt-10 ">
                        <div>
                            <h4>Legales</h4>
                        </div>
                        <div className="flex gap-4 items-center ">
                            <p>
                                Terminos y condiciones.<br/>
                                NIT. 1226852962
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
