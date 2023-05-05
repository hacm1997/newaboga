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
            <div className={"flex items-center bg-[url('/images/servicio-personas/background_banner.png')] -mt-32 bg-no-repeat bg-right "+styles.content}>
                <div className={"pl-[100px] w-full "}>
                    <div className={"w-[38%] "+styles.information}>
                        <h1>{t(`${props.service}.banner.title`)}</h1>
                        <p className="pt-6">{t(`${props.service}.banner.description`)}</p>
                        <button>{t('general_button')}</button>
                    </div>
                </div>
            </div>
        </>
    );
}
