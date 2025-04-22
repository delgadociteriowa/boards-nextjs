import './FeaturesSection.css';
import FeatureCard from '../FeatureCard/FeatureCard';

const FeaturesSection = () => (
<section className='features'>
    <div className='features__container'>
      <h2 className='features__title'>BOARDS makes it easy for you</h2>
      <div className='features__cards'>
      <FeatureCard
          icon={'chess'}
          title={'Your Choices'}
          paragraph={'Place the pieces wherever you want'}
        />
      <FeatureCard
          icon={'save'}
          title={'Save Game'}
          paragraph={'Save your game and continue later'}
        />
      <FeatureCard
          icon={'devices'}
          title={'Play Anywhere'}
          paragraph={'Play on mobile, tablet or desktop'}
        />
      </div>
    </div>
  </section>
);

export default FeaturesSection;
