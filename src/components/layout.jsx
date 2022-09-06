import Head from "next/head";
import { Footer } from "./Footer";
import Header from "./Header";

const layout = ({children}) => {
   return (
      <div>
         <Head>
            <title>Academia Sabiduria</title>
            <meta name="description" content="Website for academic created by Luis Reynaga" />
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Fredoka+One&display=swap" rel="stylesheet"/>
            
         </Head>
         <Header/>
         <div className="">
            {children}
         </div>
         <Footer/>
      </div>
   )
}

export default layout