import IntroSection from "../components/IntroSection"
import bgImg from '../assets/menu/banner3.jpg'
import dessertImg from '../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../assets/menu/pizza-bg.jpg'
import saladImg from '../assets/menu/salad-bg.jpg'
import soupImg from '../assets/menu/soup-bg.jpg'
import { Helmet } from "@dr.pogodin/react-helmet"
import useMenu from "../hooks/useMenu"
import TitleBox from "../components/TitleBox"
import MenuCategory from "../components/MenuCategory"
const OurMenu = () => {
  const [items] = useMenu();
  const offered = items.filter(item => item.category === 'offered');
  const desserts = items.filter(item => item.category === 'dessert');
  const pizza = items.filter(item => item.category === 'pizza');
  const soup = items.filter(item => item.category === 'soup');
  const salad = items.filter(item => item.category === 'salad');
 
  return (
    <div>
        <Helmet>
            <title>Velvet Ember | Menu Page</title>
            <meta name="description" content="Order your best" />
        </Helmet>
        <IntroSection
        bgImg={bgImg}
        title={'OUR MENU'}
        description={'Would you like to try a dish?'}
        ></IntroSection>
        <TitleBox
         title={"---Don't miss---"}
         heading={"TODAY'S OFFER"}
         ></TitleBox>
         {/* offered section */}
         <MenuCategory
         items={offered}
         btnName={'ORDER YOUR FAVOURITE FOOD'}
         ></MenuCategory>
         {/* dessert section */}
         <IntroSection
         title={"dessert"}
         description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
         bgImg={dessertImg}
         >
         </IntroSection>
         <MenuCategory
         items={desserts}
         btnName={"ORDER YOUR FAVOURITE FOOD"}
         ></MenuCategory>
         {/* pizza section */}
         <IntroSection
         title={"pizza"}
         description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
         bgImg={pizzaImg}
         >
         </IntroSection>
         <MenuCategory
         items={pizza}
         btnName={"ORDER YOUR FAVOURITE FOOD"}
         ></MenuCategory>
         {/* soup section */}
         <IntroSection
         title={"salads"}
         description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
         bgImg={saladImg}
         >
         </IntroSection>
         <MenuCategory
         items={salad}
         btnName={"ORDER YOUR FAVOURITE FOOD"}
         ></MenuCategory>
         {/* soup section */}
         <IntroSection
         title={"soups"}
         description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
         bgImg={soupImg}
         >
         </IntroSection>
         <MenuCategory
         items={soup}
         btnName={"ORDER YOUR FAVOURITE FOOD"}
         ></MenuCategory>
    </div>
  )
}

export default OurMenu