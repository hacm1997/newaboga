import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Head from "next/head";
import Layout from "../../components/general/layout/layout.component";
import RightBannerComponent from "../../components/general/views/servicesRight/principalBanner/rightBanner.component";

export default function Home() {
    const [titlePage, setTitlePage] = useState('');
    const router = useRouter();
    const {id}:any = router.query;
    // console.log("id => ",id)
    const [service, setService] = useState('');
    useEffect(()=>{
        if(id === "sp1"){
            setService('sp1');
        }else if(id === "derecho-comercial"){
            setService('derecho-comercial');
        }else if(id === "derecho-constitucional-laboral") {
            setService('derecho-constitucional-laboral');
        }else{
            setService('');
        }
    },[router.asPath])

    return (
        <>
            <>
                <Layout>
                    <Head>
                        <title>{titlePage} | Aboga</title>
                    </Head>
                    <RightBannerComponent service={service} setTitlePage={setTitlePage}/>
                </Layout>

            </>
        </>
    )
}
