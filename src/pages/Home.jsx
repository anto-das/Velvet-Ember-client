import Banner from "../components/Banner"
import Category from "../components/Category"
import IntroSection from "../components/IntroSection"
import TitleBox from "../components/TitleBox"

const Home = () => {
  return (
    <div >
      <Banner></Banner>
      <div className="w-11/14 mx-auto my-5">
        <TitleBox 
        title={'---From 11:00am to 10:00pm---'}
         heading={'order online'}></TitleBox>
      <Category></Category>
      <div className="py-8">
        <IntroSection></IntroSection>
      </div>
      </div>
    </div>
  )
}

export default Home