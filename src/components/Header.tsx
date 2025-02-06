import Link from 'next/link'; // Ensure you have this 
import { IoIosSearch } from 'react-icons/io'; // Ensure you have this import
import { MdShoppingCart } from 'react-icons/md'; // Ensure you have this import
import { FaRegUser } from 'react-icons/fa'; // Ensure you have this import

const Header = () => {
  return (
    <header className="relative h-[70px] w-full bg-white shadow-md">
      <div className="flex justify-between items-center h-full px-8">
        <h2 className="font-inter font-bold text-[24px] text-[#000000]">Bandage</h2>
        
        <nav className="lg:flex hidden">
          <ul className="flex gap-[15px] font-Montserrat font-semibold text-[#737373] text-[14px] leading-[24px]">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/pages">Pages</Link></li>
          </ul>
        </nav>

        <div className="flex gap-[10px] items-center">
          <button className='flex bg-[#F5F5F5] border-2 border-[#F5F5F5] pt-[7px] pb-[7px] pl-[20px] pr-[12px] gap-[10px] rounded-[4px]'>
            <input 
              type="text" 
              placeholder='What are you looking for?' 
              className='h-[18px] w-[130px] text-[#000000] text-[12px] font-poppins font-normal opacity-[50%]' 
              aria-label="Search"
            />
            <IoIosSearch className='h-[16px] w-[16px]' />
          </button>
          <MdShoppingCart className='w-[28px] h-[28px]' />
          <FaRegUser className='w-[28px] h-[28px]' />
        </div>
      </div>
    </header>
  );
};

export default Header;
