import React from "react";
import { Link } from 'react-router-dom';
import { useRouteLoaderData } from 'your-route-loader'; 

export default function HomePage() {
    const menus = useRouteLoaderData('menu');

    return (
        <div className="max-w-md mx-auto mx-4">
            {menus.map(item => (
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
