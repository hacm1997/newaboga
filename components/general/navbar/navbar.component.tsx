import {inspect} from "util";
import styles from './navbar.module.css'
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/router";

export default function NavbarComponent(){
    const {t, lang} = useTranslation('header');
    const service_persons = t<any>("nav.service_person.services", {}, {returnObjects: true});
    const service_business = t<any>("nav.service_business.services", {}, {returnObjects: true});
    const [icon, setIcon] = useState("bx bx-menu-alt-right");
    const [menu, setMenu] = useState(styles.menu);
    const router = useRouter();

    const handleMenu = () => {
        if (icon === "bx bx-menu-alt-right") {
            setIcon("bx bx-menu-alt-left");
            setMenu(styles.menuActive);
        } else {
            setIcon("bx bx-menu-alt-right");
            setMenu(styles.menu);
        }
    }

    return(
        <>
            <div className={"flex h-28 items-center place-content-around z-50 "+styles.menuNav}>
                <div className="inline-flex w-auto ">
                    <img src='/images/logo-aboga.png' alt="Aboga" title="Logo Aboga" />
                    <div className={"flex items-center pl-10 "+styles.list_menu}>
                        <ul className={"flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row gap-5 "+ menu}>
                            <li className={router.asPath === "/" ? styles.active : ""}>
                                <Link href="/" title="Inicio">{t('nav.home')}</Link>
                            </li>

                            <div className={styles.dropdown}>

                               <li className={router.asPath.split('/')[1] === 'servicio-personas' ? styles.active : ""}>
                                   {t('nav.service_person.title')} <i className='bx bx-chevron-down'></i>
                               </li>

                                <div className={styles.dropdown_content}>
                                    {
                                        service_persons?.map((item: any, index: number) => {
                                            return (
                                               <li key={index} >
                                                   <Link  href={`${item.url}`} title={item.title}>
                                                       <p className={router.asPath === item.url ? styles.active : ""}>{item.title}</p>
                                                   </Link>
                                               </li>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className={styles.dropdown}>

                                <li className={router.asPath.split('/')[1] === 'servicio-empresas' ? styles.active : ""}>
                                    {t('nav.service_business.title')} <i className='bx bx-chevron-down'></i>
                                </li>

                                <div className={styles.dropdown_content}>
                                    {
                                        service_business?.map((item: any, index: number) => {
                                            return (
                                                <li key={index}>
                                                    <Link  href={`${item.url}`} title={item.title}>
                                                        <p className={router.asPath === item.url ? styles.active : ""}>{item.title}</p>
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <li className={router.asPath === "/asesorias-legales" ? styles.active : ""}>
                                <Link href="/asesorias-legales" title="Advices">{t('nav.advice')}</Link>
                            </li>
                            <div className="flex-initial w-32 items-center ">
                                <div className={"flex w-auto gap-4 "+ styles.socials_mob}>

                                    <a className="w-9">
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                    <a className="w-9">
                                        <i className='bx bxl-facebook'></i>
                                    </a>

                                </div>
                            </div>
                        </ul>

                    </div>

                </div>
                <div className="flex-initial w-32 items-center ">
                    <div className={"flex w-auto gap-4 "+ styles.socials}>

                        <a className="w-9">
                            <i className='bx bxl-instagram'></i>
                        </a>
                        <a className="w-9">
                            <i className='bx bxl-facebook'></i>
                        </a>

                    </div>
                </div>
                <div onClick={handleMenu} className={styles.botonMovil}>
                    <Link href="#" title="Botón Móvil"><i className={icon}></i></Link>
                </div>
            </div>
        </>
    );
}
