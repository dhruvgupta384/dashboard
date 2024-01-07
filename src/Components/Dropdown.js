import React from 'react'
import { myContext } from '../Context/Createcontext';
import { useContext } from 'react';
import { useState, useEffect } from 'react'
function Dropdown({save, data, indx,handleprice }) {
  let obj = useContext(myContext);
  const [price, setprice] = useState();
  // console.log(indx)
  useEffect(() => {
   
      // console.log(data.label,data.amount)
      setprice(data.amount === 0 ? '--' : data.amount)
    
  }, [data])
  // console.log(save)
  return (
    <div className='bg-white flex justify-between py-12 px-5'>
      <p className='w-[50%] font-[500] text-[14px]'>{data?.label}</p>
      <div className='flex gap-4 items-center'>
        {/* <p className='font-[500] text-[14px]'>{data?.amount==0?'--':data.amount}</p>
         */}
        <input type='text' className='font-[500] text-[14px] w-10' value={price} onChange={(e) => 
        
        {
          setprice(e.target.value);obj.setprice({...obj.price,[data.label]:e.target.value})}}
        >
        </input>
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.3812 8.33334L11.8081 5M1.53528 17.9167L4.55848 17.6033C4.92785 17.565 5.11253 17.5459 5.28515 17.4937C5.4383 17.4475 5.58405 17.3821 5.71843 17.2995C5.8699 17.2063 6.0013 17.0837 6.26409 16.8386L18.0611 5.83334C19.0478 4.91286 19.0478 3.42048 18.0611 2.5C17.0744 1.57953 15.4746 1.57953 14.4879 2.5L2.69095 13.5052C2.42816 13.7504 2.29676 13.873 2.19688 14.0143C2.10826 14.1396 2.03821 14.2756 1.98863 14.4185C1.93275 14.5795 1.91223 14.7518 1.87119 15.0964L1.53528 17.9167Z" stroke="#405CD2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

      </div>

    </div>
  )
}

export default Dropdown