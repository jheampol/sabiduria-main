

import { Area } from "../components/Area";
import { Becas } from "../components/Becas";
import { Contact } from "../components/Contact";
import Layout from "../components/layout";
import { Services } from "../components/Services";
import { Testimonials } from "../components/Testimonials";


export default function Home() {
  return (
    <Layout>
      <Becas />
      <Services/>
      <Area/>
      <Testimonials/>
      <Contact />
    </Layout>
  )
}
