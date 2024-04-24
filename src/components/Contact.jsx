import { FaFacebook, FaTwitter, FaInstagramSquare, FaLinkedin, FaPhoneAlt} from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
const Contact = () => {
  return (
    <div className="lg:px-28 p-10 bg-[url('/images/more/13.jpg')] lg:flex items-center justify-center gap-10">
        <div className="lg:w-1/2">
            <img className="h-[90px]" src="/images/more/logo1.png" alt="image not found" />

            <div>
                <h1 className="text-[45px] font-Rancho">Espresso Emporium</h1>
                <p className="font-Raleway">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
            </div>

            <div className="my-10">
                <ul className="flex gap-2">
                    <li><a href="#"><FaFacebook className="text-[40px]" /></a></li>
                    <li><a href="#"><FaTwitter className="text-[40px]" /></a></li>
                    <li><a href="#"><FaInstagramSquare className="text-[40px]" /></a></li>
                    <li><a href="#"><FaLinkedin className="text-[40px]" /></a></li>
                </ul>
            </div>

            <h1 className="text-[45px] font-Rancho">Get in Touch</h1>

            <div>
                <ul>
                    <li className="flex items-center gap-5"><FaPhoneAlt /> <a href="tel:01763123739"> 01763123739</a></li>
                    <li className="flex items-center gap-5"><MdEmail /> <a href="mailto:studenttajbirislam@gmail.com"> studenttajbirislam@gmail.com</a></li>
                    <li className="flex items-center gap-5"><MdLocationPin /> <a> 72, Wall street, King Road, Dhaka</a></li>
                </ul>
            </div>
        </div>


        <div className="lg:w-1/2 mt-10">
            <h1 className="text-[45px] font-Rancho">Connect with Us</h1>
            <form className="flex flex-col gap-5">
                <input className="h-10 p-5 border rounded-xl" type="text" name="name" placeholder="Name" />
                <input className="h-10 p-5 border rounded-xl" type="email" name="email" placeholder="Email" />
                <textarea className=" p-5 border rounded-xl" rows='5' placeholder="Message" />
                <button type="submit" className="w-[150px] py-2 border border-black rounded-xl">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact