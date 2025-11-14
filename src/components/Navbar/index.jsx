import './index.css';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-logo'>Euphoria</div>
        <div className='navbar-links'>
            <a href='#home'>Shop</a>
            <a href='#about'>Men</a>
            <a href='#services'>Women</a>
            <a href='#contact'>Combos</a>
            <a href='#contact'>Joggers</a>
        </div>
        <div className='search-bar'>
            <input type='text' placeholder='Search...' />
        </div>
        <div className='navbar-icons'>
            <FaRegHeart size={20} />
            <MdOutlineAccountCircle size={24} />
            <FaShoppingCart size={20} />
        </div>
    </nav>
  )
}

export default Index