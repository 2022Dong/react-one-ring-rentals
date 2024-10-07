import Footer from './Footer';
import Hearder from './Hearder';
import HomeSlider from './HomeSlider';
import HomeAdvancedSearch from './HomeAdvancedSearch';
import ContentWrapper from './ContentWrapper';

const Wrapper = () => {
  return (
    <div id="wrapper">
    <Hearder />
    <HomeSlider />
    <HomeAdvancedSearch />
    <ContentWrapper />
    <Footer />
  </div>
  )
}

export default Wrapper
