import { Helmet } from "@dr.pogodin/react-helmet"
import Banner from "../components/Banner"
import Category from "../components/Category"
import ChefRecomends from "../components/ChefRecomends"
import Featured from "../components/Featured"
import PopularMenu from "../components/PopularMenu"
import Testimonials from "../components/Testimonials"

const Home = () => {
  return (
    <div >
      <Helmet>
        <title>Velvet Ember | Home</title>
        <meta name="description" content="Welcome to Velvet Ember Home Page" />
      </Helmet>
      <Banner></Banner>
      <div className="w-11/14 mx-auto my-10">
      <Category></Category>
      <PopularMenu></PopularMenu>
      <ChefRecomends></ChefRecomends>
      <Featured></Featured>
      <Testimonials></Testimonials>
      </div>
    </div>
  )
}

export default Home