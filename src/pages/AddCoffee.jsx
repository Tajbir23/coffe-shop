import { Link, useNavigate } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa6";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useContext, useEffect } from "react";
import { ContextCoffee } from "../Root";

const AddCoffee = () => {
    const {user} = useContext(ContextCoffee)

    const navigate = useNavigate()
    useEffect(() => {
        if(!user){
            navigate('/admin')
        }
    },[user])

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const chef = e.target.chef.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const price = e.target.price.value;
        const photo = e.target.photo.value;

        const newCoffee = {
            name,
            chef,
            supplier,
            taste,
            category,
            details,
            price,
            photo,
        }

        fetch('http://localhost:5000/add_coffee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .then(() => {
            toast.success(`${name} coffee upload successful`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
                e.target.reset()
        })
        .catch((err) => console.log(err))
    }

  return (
    <div className="lg:my-20">
    <ToastContainer />
        <div className="mx-20">
            <Link to='/' className="flex items-center gap-5" ><FaArrowLeft /> <span className="text-[30px] font-Rancho">Back to home</span></Link>
        </div>

        <div className="mx-20 bg-[#F4F3F0]">

            <div className="lg:mx-28 mx-5 text-center">
                <h1 className="lg:text-[45px] text-[30px] py-10 font-Rancho">Add New Coffee</h1>
                <p className="text-[18px] pb-10 text-[#1B1A1AB3]">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>

            <form onSubmit={handleSubmit} className="lg:mx-28 mx-5 pb-10">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-[20px] font-Raleway font-semibold">Name</label>
                        <input type="text" name="name" placeholder="Enter coffee name" className="w-full h-[48px] rounded-sm pl-5" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="chef" className="text-[20px] font-Raleway font-semibold">Chef</label>
                        <input type="text" name="chef" placeholder="Enter coffee Chef" className="w-full h-[48px] rounded-sm pl-5" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="supplier" className="text-[20px] font-Raleway font-semibold">Supplier</label>
                        <input type="text" name="supplier" placeholder="Enter coffee Supplier" className="w-full h-[48px] rounded-sm pl-5" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="taste" className="text-[20px] font-Raleway font-semibold">Taste</label>
                        <input type="text" name="taste" placeholder="Enter coffee Taste" className="w-full h-[48px] rounded-sm pl-5" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="category" className="text-[20px] font-Raleway font-semibold">Category</label>
                        <input type="text" name="category" placeholder="Enter coffee Category" className="w-full h-[48px] rounded-sm pl-5" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="details" className="text-[20px] font-Raleway font-semibold">Details</label>
                        <input type="text" name="details" placeholder="Enter coffee Details" className="w-full h-[48px] rounded-sm pl-5" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="photo" className="text-[20px] font-Raleway font-semibold">Photo</label>
                        <input type="text" name="photo" placeholder="Enter photo url" className="w-full h-[48px] rounded-sm pl-5" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="price" className="text-[20px] font-Raleway font-semibold">Price</label>
                        <input type="number" name="price" placeholder="Enter price" className="w-full h-[48px] rounded-sm pl-5" />
                    </div>
                </div>

                <div className="mt-5 flex flex-col gap-5">
                    
                    <button type="submit" className="w-full bg-[#D2B48C] p-2 font-Rancho font-semibold text-[24px] cursor-pointer focus:border focus:border-black ">Add Coffee</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddCoffee