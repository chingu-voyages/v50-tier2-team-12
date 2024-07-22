import { Icons } from '../../components/Icons';

const MenuItemToCart = ({ quantity, updateQuantity, handleChange, handleSubmit }) => {
    return (
        <form className="px-4 flex flex-col gap-4 py-4 px-2" onSubmit={handleSubmit}>
            <div className="relative flex items-center">
                <button
                    type="button"
                    onClick={() => updateQuantity(-1)}
                    className="bg-purple-100 rounded-l-lg p-3 h-11"
                    disabled={quantity === 0}
                >
                    <Icons.minus className="w-4 h-4" />
                </button>

                <input
                    type="text"
                    value={quantity}
                    onChange={handleChange}
                    className="bg-purple-100 h-11 text-center text-purple-600 text-normal block w-full py-2.5 placeholder-purple-600"
                    placeholder="0"
                    required
                />
                
                <button
                    type="button"
                    onClick={() => updateQuantity(1)}
                    className="bg-purple-100 rounded-r-lg p-3 h-11"
                >
                    <Icons.plus className="w-4 h-4" />
                </button>
            </div>
            <div>
                <button
                    type="submit"
                    className="w-full bg-purple-600 text-white rounded-lg p-3 h-11"
                >
                    Add to Order
                </button>
            </div>
        </form>
    );
};

export default MenuItemToCart;
