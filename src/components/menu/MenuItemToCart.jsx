import { Icons } from '../../components/Icons';

const MenuItemToCart = ({ quantity, setQuantity, handleSubmit }) => {
  
 
    return (
    <form className="flex flex-col gap-4 py-4 px-2" onSubmit={handleSubmit}>
      <div className="relative flex items-center">
        <button
          type="button"
          onClick={() => {
            quantity > 0 && setQuantity(quantity - 1)
          }}
          className="bg-purple-100 rounded-l-lg px-5 h-11"
          disabled={quantity === 0}
        >
          <Icons.minus className="w-4 h-4" />
        </button>

        <span className="bg-purple-100 h-11 flex items-center justify-center text-purple-600 text-normal block w-full placeholder-purple-600 select-none">
          {quantity}
        </span>

        <button
          type="button"
          onClick={() => setQuantity(quantity + 1)}
          className="bg-purple-100 rounded-r-lg px-6 h-11"
        >
          <Icons.plus className="w-4 h-4" />
        </button>
      </div>
      <div>
        <button
          type="submit"
          className='bg-primary-violet text-xl font-semibold text-white py-3 w-full my-3 text-center flex items-center text-nowrap hover:opacity-50 justify-center rounded-lg'
        >
          Add to Order
        </button>
      </div>
    </form>
  );
};

export default MenuItemToCart;
