import React from 'react'

 function Image_Component() {
  return (
    <div>

        <div className="transition-transform duration-300 cursor-pointer hover:-rotate-6">
        <Image
          src="/image1.gif"
          alt="my-image"
          height={500}
          width={500}
          quality={100}
          
        />

      </div>  
    
    </div>
  )
}
export default Image_Component;