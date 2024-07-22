import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from 'react-router-dom';

export default function HomePage() {
    const [restaurantMenu, setRestaurantMenu] = useState([]);

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await fetch('https://menus-api.vercel.app/'); 
                if (!response.ok) {
                    throw new Error('Failed to fetch menu data');
                }
                const data = await response.json();

                let menu = [];
                Object.keys(data).forEach(category => {
                    Object.values(data[category]).forEach(item => {
                        if (!menu.includes(item.name)) {
                            menu.push(item);
                        }
                    });
                });
                setRestaurantMenu(menu);
            } catch (error) {
                console.error('Error fetching menu data:', error);
            }
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
