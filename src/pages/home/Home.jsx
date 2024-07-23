import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useFetch } from '../../utils/useFetch'

export default function HomePage() {
    const { data } = useFetch('https://menus-api.vercel.app/')
    const [restaurantMenu, setRestaurantMenu] = useState([]);

    useEffect(() => {
        const fetchMenuData = async () => {
                let menu = [];
                Object.keys(data).forEach(category => {
                    Object.values(data[category]).forEach(item => {
                        if (!menu.includes(item.name)) {
                            menu.push(item);
                        }
                    });
                });
                setRestaurantMenu(menu);
        };

        fetchMenuData();

    }, []);


    return (
        <div className="max-w-md mx-auto mx-4">
            {restaurantMenu.map(item => (
                <Link to={`/${item.name}`} key={item.id}>
                    <div className="flex items-center justify-between gap-10 bg-gray-100 rounded-lg py-4 px-4">
                        <section className="flex flex-col gap-10 items-start w-1/2">
                            <p className="font-bold">{item.name}</p>
                        </section>
                    </div>
                </Link>
            ))}
        </div>
    );
}