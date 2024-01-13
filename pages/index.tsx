import type { NextPage } from 'next'
import Layout from "../components/general/layout/layout.component";
import HomeComponent from "../components/general/views/home/home.component";
import ReactGA from "react-ga4";
import Head from 'next/head';

const Home: NextPage = () => {
    ReactGA.send({ hitType: "pageview", page: "/", title: "Page: INICIO" });
  return (
    <Layout>
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/24392166.js"></script>
      <Head>
        <link rel="canonical" href="https://aboga.com"/>
        <title>Aboga - Somos su mayor aliado legal</title>
      </Head>
      <HomeComponent/>
    </Layout>
  )
}

export default Home
