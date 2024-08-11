import { Link } from 'react-router-dom';
import Ratings from '../menu/Ratings'

const MenuItems = ({ items }) => {
    return items.map(item => (
        <Link to={`/menu/${item.id}`} key={item.id} >
            <div className="flex items-center justify-between gap-4 shadow-big rounded-lg p-4 xl:max-w-sm xl:h-[180px]">                
                <section className="flex flex-col gap-6 items-start">
                    <div className="flex flex-col gap-1">
                        <p className="font-medium">{item.dsc}</p>
                        <Ratings rate={item.rate} />
                    </div>
                    <p className="font-medium md:text-lg">${item.price}</p>
                </section>
                <img src={item.img} className="h-[120px] md:w-[120px] md:h-[120px] w-ful rounded-lg object-cover" alt="image"/>
            </div>
        </Link>
    ));
};

export default MenuItems;