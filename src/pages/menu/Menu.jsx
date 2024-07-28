import { useState, useEffect } from "react";
import { Icons } from '../../components/Icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useRouteLoaderData } from 'react-router-dom';
import MenuItems from '../../components/menu/menuItems'

export default function Menu() {
    const menu = useRouteLoaderData('menu');
    const [loading, setLoading] = useState(true);
    const { name } = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const [searchValue, setSearchValue] = useState('');
    const allMenus = menu ? Object.values(menu).flat() : [];
   

    useEffect(() => {
        setLoading(true);
        if (name && !allMenus.some(item => item.name === name)) {
            navigate('/error'); // Redirect to error page if name doesn't exist
            return;
        }
        setLoading(false); 
    }, []);

    const menuData = allMenus.reduce((menuData, item) => {
        if (item.name === name && !menuData.some(menu => menu.id === item.id)) {
            menuData.push(item);
        }
        return menuData;
    }, []);      


    const filteredMenu = menuData.filter(item =>
        item.dsc.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (loading) {
        return <p>Loading...</p>; // Display loading message or spinner while fetching data
    }
    
    return (
        <div className="max-w-md mx-auto mx-4">
        <section className="grid grid-cols-3 gap-4 mt-5 mb-2 items-center">
            <button onClick={goBack} className="flex items-center">
                <Icons.back className="w-6 h-6 mr-2" />
            </button>
            <h2 className="col-span-2 capitalize font-work-sans font-semibold text-2xl text-black truncate">
                {name}
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
                    <MenuItems items={filteredMenu.length > 0 ? filteredMenu : menuData} />
                )}
        </section>
    </div>
    );    
}
