import styles from './services.module.css'
import {useState} from "react";

export default function ServicesComponent(props:any){
    const [selectedService, setSelectedService] = useState<any>(props.servicesP);
    const [id, setId] = useState('SP');

    const chooseServiceP = () => {
        setSelectedService(props.servicesP)
        setId('SP')
    }
    const chooseServiceB = () => {
        setSelectedService(props.servicesB)
        setId('SB');
    }

    return(
        <>
            <div className="pl-10 xl:pl-14 md:pl-[110px] bg-[#F2F2F2] pb-20 ">
                <div className={"pt-16 "+styles.title}>
                    <h2>{props.translate('services-persons.title')}</h2>
                </div>
                <div className={"flex pt-10 gap-10 "}>
                    <button className={id === 'SP' ? styles.chooseButtons : styles.buttonNoActive} onClick={chooseServiceP}>{props.translate('list_services.s_persons')}</button>
                    <button className={id === 'SB' ? styles.chooseButtons : styles.buttonNoActive} onClick={chooseServiceB}>{props.translate('list_services.s_business')}</button>
                </div>
                <div className="grid w-[90%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[243px_243px_243px_243px_243px] 2xl:xl:grid-cols-[280px_280px_280px_280px_280px] gap-y-9 gap-x-0 pt-10 pb-16 ">
                    {Array.isArray(selectedService) ? selectedService.map((item:any, index:number) => (
                        <div key={index} className={"w-[240px] xl:w-[235px] xl:h-[300px] h-[290px] p-5 "+styles.card}>
                            <div className="flex">
                                <img className={styles.img_principal} src={item.img} alt="Servicios" title={item.title} />
                                <a>
                                    <img className={styles.img_second} src={item.img_hover} alt="Servicios" title={item.title} />
                                </a>
                                <div className={"opacity-0 "+styles.hover}>
                                    <h3 className={"w-full pl-[18px] "+styles.title_hover}>{item.title}</h3>
                                    <a>
                                        <img className="pl-[18px] pt-1" src="/images/home/services/arrow_button.png" alt="Button" title={item.title} />
                                    </a>
                                </div>
                            </div>
                            <div className={"w-full "+styles.description}>
                                <p className="pt-4">
                                    {item.description}
                                </p>
                            </div>
                            <div className={"flex pt-20 items-center align-baseline "+styles.title_card}>
                                <h3 className="self-start">{item.title}</h3>
                                <img className="pl-8 w-18 h-8 " src="/images/home/services/arrow_button1.png" alt="Arrow" title={item.title} />
                            </div>
                        </div>
                    )): null}
                </div>
                <div className={"flex w-[85%] "+styles.button}>
                    <button>Agendar cita</button>
                </div>
            </div>
        </>
    );
}
