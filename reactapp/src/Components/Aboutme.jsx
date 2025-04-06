const Aboutme = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold mb-8">ABOUT <span className="text-green-400">ME</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative mt-10 md:mt-0 md:ml-10">
          <div className="relative w-60 h-60 md:w-80 md:h-80">
            <img
              src="/f.jpg"
              alt="Florence Uwineza"
              className="absolute inset-0 w-full h-full rounded-full border-4 border-green-400"
              style={{
                boxShadow:
                  "0 0 0 4px rgba(79, 208, 154, 0.6), 0 0 0 4px rgba(79, 208, 154, 0.6)",
              }}
            />
          </div>
        </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">PERSONAL INFOS</h3>
            <ul>
              <li className="mb-2"><strong>First Name:</strong> Marie Mireille</li>
              <li className="mb-2"><strong>Last Name:</strong> Irafasha</li>
              <li className="mb-2"><strong>Age:</strong> 21 Years</li>
              <li className="mb-2"><strong>Nationality:</strong> Rwandan</li>
              <li className="mb-2"><strong>Freelance:</strong> <span className="text-green-500">Available</span></li>
              <li className="mb-2"><strong>Address:</strong>  Rwanda</li>
              <li className="mb-2"><strong>Phone:</strong> <a href="tel:+250783010765" className="text-blue-400">+250783010765</a></li>
              <li className="mb-2"><strong>Email:</strong> <a href="mailto:irafashamariemireille@gmail.com" className="text-blue-400">irafashamariemireille@gmail.com</a></li>
              <li className="mb-2"><strong>Languages:</strong> Kinyarwanda, English</li>
            </ul>
            <button className="mt-6 bg-yellow-500 text-black py-2 px-4 rounded-full font-bold hover:bg-yellow-600 transition duration-300">
              DOWNLOAD CV
            </button>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
