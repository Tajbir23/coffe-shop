import { IoEyeOutline } from "react-icons/io5";
import { MdEdit, MdDelete } from "react-icons/md";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextCoffee } from "../../Root";

const CardPopularProducts = ({coffee}) => {
    const {user, setDeleteModal, setDeleteItem} = useContext(ContextCoffee)

    const handleDeleteModal = (e) => {
        e.preventDefault();
        setDeleteModal(true)
        setDeleteItem(coffee)
    }

  return (
    <div className="bg-[#eec533] z-50 bg-opacity-10 flex md:flex-row flex-col gap-3 justify-between items-center p-5 rounded-lg">
        <img className="md:h-[239px] h-[150px] lg:max-w-[200px]" src={coffee?.photo} alt="image not found" />
        <div className="font-Raleway text-left">
            <h1 className="text-[20px]"><span className="font-semibold">Name: </span> <span>{coffee?.name}</span></h1>
            <h1 className="text-[20px]"><span className="font-semibold">Chef: </span> <span>{coffee?.chef}</span></h1>
            <h1 className="text-[20px]"><span className="font-semibold">Price: </span> <span>{coffee?.price || 'free'} Taka</span></h1>
        </div>
        {user && <div className="flex md:flex-col flex-row gap-3 ">
            <Link to={`/coffee_details/${coffee?._id}`} className="p-2 bg-[#D2B48C] rounded-sm hover:bg-white hover:!text-black text-white cursor-pointer">
                <IoEyeOutline  />
            </Link>
            <Link to={`/update_coffee/${coffee?._id}`} className="p-2 bg-[#3C393B] rounded-sm hover:bg-white hover:!text-black text-white cursor-pointer">
                <MdEdit />
            </Link>
            <button onClick={handleDeleteModal} className="p-2 bg-[#EA4744] rounded-sm hover:bg-white hover:!text-black text-white cursor-pointer">
                <MdDelete />
            </button>
        </div>}

    </div>
  )
}

CardPopularProducts.propTypes = {
    coffee: PropTypes.object.isRequired,
  };

export default CardPopularProducts