import useTranslation from 'next-translate/useTranslation';
import styles from './contact.module.css';

export default function ContactComponent(props: any) {
    const { t, lang } = useTranslation('services');

    return (
        <>
            <div className={'flex items-center justify-center pt-[50px] xl:pt-10 gap-0 ' + styles.general_content}>
                <div className={'w-[45%] -mt-20 '+styles.principal_text}>
                    <div className='float-right '>
                        <div className={'flex w-[400px]  ' + styles.text}>
                            <p>
                                {t(`${props.service}.need_assessor.title_pt1`)}
                                <span> {t(`${props.service}.need_assessor.title_span`)} </span>
                                {t(`${props.service}.need_assessor.title_pt2`)}
                            </p>
                        </div>
                        <div className={'pt-10  '+styles.contact_button}>
                            <button>{t('general_button')}</button>
                        </div>
                        <div className={'pt-32 md:pt-10 lg:pt-32 '+styles.arrow_top}>
                            <img src='/images/servicios/contact/arrow-top.png' alt='Arrow' title='Arrow top' />
                        </div>
                    </div>
                </div>
                <div className={'w-[55%] pr-32 -ml-12 '+styles.people}>
                    <img src='/images/servicios/contact/people-contact.png' alt='Persona-asesor' title='Persona asesorada' />
                </div>
            </div>
        </>
    );
}