import './FeatureCard.css';
import { FaChessBoard } from "react-icons/fa6";
import { FaRegFloppyDisk } from 'react-icons/fa6';
import { BiDevices } from 'react-icons/bi';

interface FeatureCardProps {
  icon: string;
  title: string;
  paragraph: string;
}

const FeatureCard = ({ icon, title, paragraph }: FeatureCardProps) => (
  <div className='features__card'>
    <figure className='card__picture'>
      {icon === 'chess' && <FaChessBoard className='card__img' />}
      {icon === 'save' && <FaRegFloppyDisk className='card__img' />}
      {icon === 'devices' && <BiDevices className='card__img card__img--devices' />}
    </figure>
    <h3 className='card__title'>{title}</h3>
    <p className='card__text'>{paragraph}</p>
  </div>
);

export default FeatureCard;
