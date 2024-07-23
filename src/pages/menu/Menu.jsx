import React, { useState, useEffect } from "react";
import { Icons } from '../../components/Icons';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useRouteLoaderData } from 'react-router-dom';
import MenuItems from '../../components/menu/menuItems'

export default function Menu() {
    const data = useRouteLoaderData('menu');
    const { restaurantName } = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const [searchValue, setSearchValue] = useState('');
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        const fetchMenuData = async () => {
                let menu = [];
                Object.keys(data).forEach(category => {
                Object.values(data[category]).forEach(item => {
                    if (item.name === restaurantName && !menu.some(existingItem => existingItem.id === item.id)) {
                    menu.push(item);
                    }
                });
                });
                setMenuData(menu)
        }

        fetchMenuData();

}, [data]);


    const filteredMenu = menuData.filter(item =>
        item.dsc.toLowerCase().includes(searchValue.toLowerCase())
    );

    
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
                        <MenuItems items={filteredMenu.length > 0 ? filteredMenu : menuData} restaurantName={restaurantName} />
                    )}
            </section>
        </div>
    );
}
