import type { NextPage } from 'next'
import Layout from "../components/general/layout/layout.component";
import HomeComponent from "../components/general/views/home/home.component";
import ReactGA from "react-ga4";

const Home: NextPage = () => {
    ReactGA.send({ hitType: "pageview", page: "/", title: "Page: INICIO" });
  return (
    <Layout>
      <HomeComponent/>
    </Layout>
  )
}

export default Home
