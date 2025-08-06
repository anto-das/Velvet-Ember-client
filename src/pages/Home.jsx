import Banner from "../components/Banner"
import Category from "../components/Category"
import PopularMenu from "../components/PopularMenu"

const Home = () => {
  return (
    <div >
      <Banner></Banner>
      <div className="w-11/14 mx-auto my-5">
      <Category></Category>
      <PopularMenu></PopularMenu>
      </div>
    </div>
  )
}

export default Home