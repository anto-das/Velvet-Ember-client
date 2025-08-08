import IntroSection from "../components/IntroSection"
import bgImg from '../assets/menu/banner3.jpg'
import PopularMenu from "../components/PopularMenu"
const OurMenu = () => {
  return (
    <div>
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