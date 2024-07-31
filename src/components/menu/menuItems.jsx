import { Link } from 'react-router-dom';

const MenuItems = ({ items }) => {
    return items.map(item => (
        <Link to={`/menu/${item.id}`} key={item.id} >
            <div className="flex items-center justify-between gap-10 bg-gray-100 rounded-lg py-4 px-4">
                <section className="flex flex-col gap-10 items-start w-1/2">
                    <p className="font-bold">{item.dsc}</p>
                    <p>${item.price}</p>
                </section>
                <img src={item.img} className="w-full max-w-32 h-auto rounded-lg object-cover" alt="image"/>
            </div>
        </Link>
    ));
};

export default MenuItems;