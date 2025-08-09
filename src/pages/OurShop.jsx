import { Helmet } from '@dr.pogodin/react-helmet';
import shopBg from '../assets/shop/banner2.jpg'
import IntroSection from '../components/IntroSection';
import TabCategories from '../components/TabCategories';

const OurShop = () => {
    return (
        <div>
            <Helmet>
                <title>Velvet Ember | Shop</title>
                <meta name='description' content='Welcome to Velvet Ember Shop' />
            </Helmet>
            <IntroSection
            title={"Our shop"}
            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            bgImg={shopBg}
            ></IntroSection>
            <TabCategories></TabCategories>
        </div>
    );
};

export default OurShop;