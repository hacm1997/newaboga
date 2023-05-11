import styles from './rightBanner.module.css'
import useTranslation from "next-translate/useTranslation";
import {useEffect} from "react";

export default function RightBannerComponent(props:any){
    const {t, lang} = useTranslation('services');

    useEffect(()=>{
        props.setTitlePage(t(`${props.service}.title`))
    })
    return(
        <>
            <div className={"flex -mt-32 bg-no-repeat bg-right "+styles.content}>
                <div className={"w-[65%] pt-[170px] pl-[50px] md:pl-[100px] md:pt-[260px] md:w-[75%] items-center "+styles.general}>
                    <div className={"w-[100%] "+styles.information}>
                        <h1>{t(`${props.service}.banner.title`)}</h1>
                        <p className="pt-6">{t(`${props.service}.banner.description`)}</p>
                        <div className="flex justify-center md:block">
                            <button>{t('general_button')}</button>
                        </div>
                    </div>
                </div>
                <div className={"flex justify-end pt-[160px] md:pt-0 pl-[30px] w-[100%] "+styles.image}>
                    <img className="h-[430px] md:h-full" src="/images/servicios/background_banner.png"/>
                </div>
                <div className={styles.arrow_style}>
                    <img src='/images/servicios/arrow-style-left.png'/>
                </div>
            </div>
        </>
    );
}