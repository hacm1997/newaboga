import styles from './experts.module.css';
import useTranslation from "next-translate/useTranslation";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Swiper as SwiperType, Navigation, Pagination, A11y, Autoplay } from "swiper";
import ExpertCardComponent from "./card/expertCard.component";
import {useRef} from "react";

SwiperCore.use([Autoplay, Navigation]);
export default function ExpertsComponent(props:any){
    const {t, lang} = useTranslation('services');
    const item_experts = t<any>("our_experts.list", {}, {returnObjects: true});
    const swiperRef = useRef<SwiperType>();
    const experts_id = t<any>(`${props.typeService}.${props.service}.experts_id`, [], {returnObjects: true})

    return(
        <>
            <div className={styles.section}>
                <div className={styles.general}>
                    <div className="pl-0 xl:pl-24 w-full ">
                        <div className="flex justify-center">
                            <h2>{t('our_experts.title')} <span>{t('our_experts.title_pt2')}</span></h2>
                        </div>

                        <div className={styles.content_swiper}>
                            <Swiper
                                modules={[A11y, Navigation, Pagination]}
                                autoplay={{ delay: 10000 }}
                                className={styles.swiper}
                                onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                slidesPerView={1}
                                spaceBetween={500}
                            >

                                {
                                    item_experts?.filter((item:any) => experts_id.includes(item.id)).map((item: any, index: any) => (
                                        <SwiperSlide key={index}>
                                            <ExpertCardComponent
                                                name={item.name} ability={item.ability}
                                                position={item.position} description={item.description} experience={item.exp_text}
                                                years_exp={item.exp_number} photo={item.photo}
                                            />
                                        </SwiperSlide>
                                    ))
                                }

                            </Swiper>
                        </div>
                        <div className={"flex justify-center gap-10 md:gap-64 xl:-mt-8 pl-60 "+styles.footer_experts}>
                            <button onClick={() => props.gaEventTracker('Clic Agendar cita 3 - nuestros expertos')}>Agendar cita</button>
                            <div className={"flex gap-14 "+styles.arrows}>
                                <a className="cursor-pointer" type="button" onClick={() => swiperRef.current?.slidePrev()}>
                                    <img className="w-[52px]" src="/images/experts/left-arrow.png" alt="Flecha izquierda" title="Flecha izquierda"/>
                                </a>
                                <a className="cursor-pointer" type="button" onClick={() => swiperRef.current?.slideNext()}>
                                    <img className="w-[51px]" src="/images/experts/right-arrow.png" alt="Flecha derecha" title="Flecha derecha"/>
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
