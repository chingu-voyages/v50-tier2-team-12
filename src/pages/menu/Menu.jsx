import React, { useState } from "react";
import { Icons } from '../../components/Icons';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { fetchMenuData } from '../../utils/MenuData';

export default function Menu() {
    const { restaurantName } = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const [searchValue, setSearchValue] = useState('');
    const [menuData, setMenuData] = useState('');

    const filteredMenu = menuData.filter(item =>
        item.dsc.toLowerCase().includes(searchValue.toLowerCase())
    );

    const renderMenuItems = (menuItems) => {
        return menuItems.map(item => (
            <Link to={`/${restaurantName}/${item.id}`} key={item.id} >
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

    return (
        <div className="max-w-md mx-auto mx-4">
            <section className="grid grid-cols-3 gap-4 mt-5 mb-2 items-center">
                <button onClick={goBack} className="flex items-center">
                    <Icons.back className="w-6 h-6 mr-2" />
                </button>
                <h2 className="col-span-2 capitalize font-work-sans font-semibold text-2xl text-black truncate">
                    {restaurantName}
                </h2>
            </section>

            <section className="flex justify-center items-center my-8">
                <div className="w-full max-w-xl bg-gray-100 flex items-center px-4 rounded-lg">
                    <button aria-label="search">
                        <Icons.search className="w-6 h-6" />
                    </button>
                    <input
                        type="search"
                        className="w-full bg-gray-100 py-2 px-4 rounded-lg placeholder-gray-500 font-light focus:outline-none"
                        placeholder="Search for food, restaurants..."
                        onChange={(e) => setSearchValue(e.target.value)}
                        value={searchValue}
                    />
                </div>
            </section>

            <section className="flex flex-col gap-6 my-4">
                {searchValue.trim() !== '' && filteredMenu.length === 0 ? 
                    (
                        <p className="text-gray-500 text-center">No items found matching your search.</p>
                    ) : (
                        renderMenuItems(filteredMenu.length > 0 ? filteredMenu : menuData)
                    )}
            </section>
        </div>
    );
}
