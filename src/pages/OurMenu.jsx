import IntroSection from "../components/IntroSection"
import bgImg from '../assets/menu/banner3.jpg'
import PopularMenu from "../components/PopularMenu"
import { Helmet } from "@dr.pogodin/react-helmet"
const OurMenu = () => {
  return (
    <div>
        <Helmet>
            <title>Velvet Ember | Menu Page</title>
            <meta name="description" content="Order your best" />
        </Helmet>
        <IntroSection
        bgImg={bgImg}
        heading={'OUR MENU'}
        description={'Would you like to try a dish?'}
        ></IntroSection>
       <div className="w-11/14 mx-auto my-10">
         <PopularMenu></PopularMenu>
       </div>
        <IntroSection
        bgImg={bgImg}
        heading={'OUR MENU'}
        description={'Would you like to try a dish?'}
        ></IntroSection>
       <div className="w-11/14 mx-auto my-10">
         <PopularMenu></PopularMenu>
       </div>
        <IntroSection
        bgImg={bgImg}
        heading={'OUR MENU'}
        description={'Would you like to try a dish?'}
        ></IntroSection>
       <div className="w-11/14 mx-auto my-10">
         <PopularMenu></PopularMenu>
       </div>
        <IntroSection
        bgImg={bgImg}
        heading={'OUR MENU'}
        description={'Would you like to try a dish?'}
        ></IntroSection>
       <div className="w-11/14 mx-auto my-10">
         <PopularMenu></PopularMenu>
       </div>
        <IntroSection
        bgImg={bgImg}
        heading={'OUR MENU'}
        description={'Would you like to try a dish?'}
        ></IntroSection>
       <div className="w-11/14 mx-auto my-10">
         <PopularMenu></PopularMenu>
       </div>
    </div>
  )
}

export default OurMenu