import styles from './styles.module.css';
import useTranslation from "next-translate/useTranslation";

export default function OurTeamComponent(props:any){
    const {t, lang} = useTranslation('services');

    return(
        <>
            <div className="block md:flex h-[auto] pb-10 gap-14">
                <div className={"pl-[30px] w-[100%] mt-8 md:mt-0 flex items-center md:w-[45%] md:pl-[100px] "+styles.text1}>
                    <div>
                        <h2 className="text-lg md:-w[95%] xl:w-[430px]">
                            {t(`${props.typeService}.${props.service}.our_team.title`)} <span>{t(`${props.typeService}.${props.service}.our_team.title_span`)}</span>
                        </h2>
                        <div className="flex justify-center md:block">
                            <button>{t('general_button')}</button>
                        </div>
                    </div>
                </div>
                <div className={"w-[100%] mt-5 flex items-center md:mt-0 md:w-[55%] h-[220px] "+styles.text2}>
                    <p className="text-center md:text-left md:pl-10 md:w-80">
                        {t(`${props.typeService}.${props.service}.our_team.title2`)} <span>{t(`${props.typeService}.${props.service}.our_team.title2_span`)}</span>
                    </p>
                </div>
            </div>
        </>
    );
}
