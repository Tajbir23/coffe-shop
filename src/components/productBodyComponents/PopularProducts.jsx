import { Link } from "react-router-dom"
import CardPopularProducts from "./CardPopularProducts"
import { useContext, useEffect, useState } from "react"
import DeleteModal from "../Modals/DeleteModal"
import { ContextCoffee } from "../../Root"

const PopularProducts = () => {
  const [data, setData] = useState([])

  const {deleteModal} = useContext(ContextCoffee)

  useEffect(() => {
    fetch('http://localhost:5000/coffees')
     .then(res => res.json())
     .then(data => setData(data))
  },[deleteModal])
  
  return (
    <div className="relative">
    <div className="relative pb-20">
        <div className="md:px-28 px-5 bg-transparent">
            <div className="text-center mt-20 mb-10">
                <p>--- Sip & Savor ---</p>
                <h1 className="lg:text-[55px] text-[40px] text-[#331A15] font-Rancho ">Our Popular Products</h1>
                <Link to='/add_coffee' className="flex gap-2 w-40 text-center justify-center text-white hover:bg-transparent hover:text-black items-center m-auto lg:text-[24px] px-4 py-1 border border-black bg-[#E3B577] rounded-xl font-Rancho"><span>Add Coffee</span> <img alt="image not found" src="/images/cup.svg" /></Link>
            </div>
            <div className="grid xl:grid-cols-2 gap-5 grid-cols-1">
                {data && data.map((item) => <CardPopularProducts key={item?._id} coffee={item} />)}
            </div>
        </div>
        <img className="absolute top-0 left-0 " src="/public/images/more/4.png" alt="image not found" />
        <img className="absolute bottom-0 right-0 z-[-1]" src="/public/images/more/5.png" alt="image not found" />
    </div>
    {deleteModal && <div className="absolute bottom-0 right-0 top-0 left-0 m-auto z-50 flex items-center justify-center">
      <DeleteModal />
    </div>}
    </div>
  )
}

export default PopularProducts