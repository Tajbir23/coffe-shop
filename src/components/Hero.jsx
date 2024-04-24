

const Hero = () => {
  return (
    <div className="md:h-screen bg-no-repeat bg-cover bg-[url('/images/Hero.svg')] flex items-center justify-center text-white md:px-28 p-10">
        <div className="md:w-1/2 md:block hidden"></div>
        <div className="md:w-1/2">
            <h1 className="md:text-[55px] text-[40px] font-Rancho">Would you like a Cup of Delicious Coffee?</h1>
            <p className="font-Raleway mb-10">It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <a href="#product" className="text-black bg-[#E3B577] px-3 py-2 font-Rancho border hover:text-white hover:border-white hover:bg-transparent">Learn More</a>
        </div>
    </div>
  )
}

export default Hero