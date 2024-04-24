import { FaArrowLeft } from "react-icons/fa6"
import { Link, useLoaderData } from "react-router-dom"

const CoffeeDetails = () => {
    const data = useLoaderData()
    console.log(data)
  return (
    <div className="lg:m-36 m-5">
        <div className="mb-10">
            <Link to='/' className="flex items-center gap-5" ><FaArrowLeft /> <span className="text-[30px] font-Rancho">Back to home</span></Link>
        </div>

        <div className="bg-[#F4F3F0] lg:p-28 p-2 flex lg:flex-row flex-col gap-10 items-center justify-around" >
            <img src={data?.photo} className="h-56" alt="image not found" />
            <div>
                <h1 className="text-[36px] font-normal font-Rancho">Niceties</h1>
                <ul>
                    <li className="font-Raleway text-[20px]"><span className="font-semibold">Name: </span> <span>{data?.name}</span></li>
                    <li className="font-Raleway text-[20px]"><span className="font-semibold">Chef: </span> <span>{data?.chef} </span> </li>
                    <li className="font-Raleway text-[20px]"><span className="font-semibold">Supplier:   </span> <span>{data?.supplier} </span> </li>
                    <li className="font-Raleway text-[20px]"><span className="font-semibold">Taste:  </span> <span>{data?.taste} </span> </li>
                    <li className="font-Raleway text-[20px]"><span className="font-semibold">Category:  </span> <span>{data?.category}</span> </li>
                    <li className="font-Raleway text-[20px]"><span className="font-semibold">Details: </span> <span>{data?.details}</span> </li>
                    <li className="font-Raleway text-[20px]"><span className="font-semibold">Price: </span> <span>{data?.price}</span> </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default CoffeeDetails