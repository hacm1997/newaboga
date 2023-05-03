import type { NextPage } from 'next'
import Layout from "../components/general/layout/layout.component";
import HomeComponent from "../components/general/views/home/home.component";

const Home: NextPage = () => {
  return (
    <Layout>
      <HomeComponent/>
    </Layout>
  )
}

export default Home
