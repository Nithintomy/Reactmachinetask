import React from 'react'
import Userimg from '../assets/Rectangle10.png'

function Navbar() {

    return (
      
        <div className="text-black p-4 ml-5 flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">Good Morning! 🌞</p>
            </div>
            <div className="flex items-center bg-white p-4 rounded-lg">
            <div className="mr-4">
            <p className="text-md font-semibold">John Doe</p>
            <p className="text-xs">johndoe@gmail.com</p>
          </div>
              <div className="w-12 h-12 rounded-sm overflow-hidden">
                <img
                  src={Userimg} // Replace with the path to your user image
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
       
  )
}

export default Navbar
