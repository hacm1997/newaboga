import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Head from "next/head";
import Layout from "../../../components/general/layout/layout.component";

export default function Home() {

    const router = useRouter();
    const [titlePage, setTitlePage] = useState('');
    const {id}:any = router.query;
    const [service, setService] = useState('');
    useEffect(()=>{
        if(id[0] === "sp1"){
            setService('sp1');
        }else if(id[0] === "derecho-comercial"){
            setService('derecho-comercial');
        }else if(id[0] === "derecho-constitucional-laboral") {
            setService('derecho-constitucional-laboral');
        }else{
            setService('');
        }
    },[router.asPath])

    //console.log("path => ",service)

    return (
        <>
            <>
                <Layout>
                    <Head>
                        <title>{titlePage} - Aboga</title>
                    </Head>

                </Layout>
            </>
        </>
    )
}
