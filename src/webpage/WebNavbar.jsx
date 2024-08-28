const WebNavbar = () => {
    return (
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">
            Matias
          </a>
          <div>
            <a href="#" className="text-gray-300 hover:text-white hover:font-bold px-3">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white hover:font-bold px-3">
              About
            </a>
            <a href="#" className="text-gray-300 hover:text-white hover:font-bold px-3">
              Works
            </a>
            <a href="#" className="text-gray-300 hover:text-white hover:font-bold px-3">
              Services
            </a>
            <a href="#" className="text-gray-300 hover:text-white hover:font-bold px-3">
              Testimonial
            </a>
            <a href="#" className="text-gray-300 hover:text-white hover:font-bold px-3">
              Blog
            </a>
            <a href="#" className="text-gray-300 hover:text-white hover:font-bold px-3">
              Contact
            </a>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg ml-4">
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </nav>
    );
}

export default WebNavbar;