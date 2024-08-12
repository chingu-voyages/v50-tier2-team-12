import { Icons } from '../Icons';

const Ratings = ({ rate }) => {
    const filledStars = Math.min(Math.round(rate), 5);
  
    const stars = [...Array(5)].map((_, index) => (
        <Icons.star
          key={index}
          className={index < filledStars ? "text-gold" : "text-disabled"} 
        />
      ));
    
      return (
      <div className="flex flex items-center gap-1">
        <div className="flex item-center">
        {stars}
        </div>
        <p className="text-sm">{`${rate}.0`}</p>
        </div>
        );
  };
  
  export default Ratings;