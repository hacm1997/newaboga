import styles from './home.module.css';
import BannerComponent from "./principalBanner/banner.component";
import useTranslation from "next-translate/useTranslation";
import ServicesComponent from "./services/services.component";
import AboutComponent from "./about/about.component";
import VideoComponent from "./video/video.component";
import FormComponent from "./form/form.component";
import {useEffect, useState} from "react";
import axios from "axios";

export default function HomeComponent(){
    const {t, lang} = useTranslation('home');
    const services = t<any>("services.items", {}, {returnObjects: true});

    const colData = "https://www.datos.gov.co/resource/xdk5-pm3f.json";
    const [dataCol, setDataCol] = useState<Array<any>>([]);
    const [dpto, setDpto] = useState<Array<any>>([]);
    const city: any[] = [];
    const [selectDpto, setSelectDpto] = useState('');

    const getDataColombia = () => {
        axios.get(colData)
            .then(function (res) {
                    setDataCol(res.data)
                    //console.log("DATOS => ", res.data);
                }
            )
            .catch(function (error) {
                console.log(error);
            })
    }

    const getDptos = async () => {
        for (let d = 0; d < dataCol.length; d++) {
            if (dpto.includes(dataCol[d]['departamento'])) {

            } else {
                dpto.push(dataCol[d]['departamento']);
            }

        }
        const selectCity = async () => {
            for (let m = 0; m < dataCol.length; m++) {
                if (dataCol[m]["departamento"] === selectDpto) {
                    //console.log("hola mundo xd")
                    city.push(dataCol[m]["municipio"]);
                }
            }
        }
        selectCity()
    }
    getDptos()
    if (selectDpto === "Bolívar") {
        city.unshift("Cartagena")
    }

    useEffect(() => {
        getDataColombia();
    }, []);

    return(
        <>
            <BannerComponent translate={t}/>
            <ServicesComponent translate={t} services={services}/>
            <AboutComponent translate={t}/>
            <VideoComponent />
            <FormComponent translate={t} setSelectDpto={setSelectDpto} dpto={dpto} city={city}/>
        </>
    );
}
