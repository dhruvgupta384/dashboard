import React from 'react'
import Dropdown from './Dropdown'
import { useState } from 'react'
function Accordian({ data,indx,save }) {
    // console.log("de",data)
    const [showdata, setshowdata] = useState(false)
    const [price, setprice] = useState()
    const handleClick = ()=>{
        if(showdata == indx){
            setshowdata(-1)
        }
        else{
            setshowdata(indx)
        }
    }
    const handleprice=(val,indx)=>{
        console.log(val,indx)
    }
    return (
        <div className='bg-[#F4F6FA] w-full mx-auto my-10'>
            <div className='p-5 rounded-lg justify-between flex cursor-pointer' onClick={()=>handleClick()}>
                <div className='flex gap-2'>
                    <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0935 9L4.08633 9M19.0935 9L21.0918 12.1069C21.5396 12.8032 21.7636 13.1514 21.8798 13.5262C21.9829 13.8582 22.0236 14.2045 22.0003 14.5495C21.9739 14.9389 21.8363 15.324 21.561 16.0944L21.3382 16.7179C20.9165 17.8981 20.7056 18.4882 20.3145 18.9245C19.9692 19.3098 19.5257 19.608 19.0246 19.7918C18.4573 20 17.7905 20 16.4569 20L6.72293 20C5.38936 20 4.72257 20 4.15521 19.7918C3.65421 19.608 3.21068 19.3098 2.86532 18.9245C2.47422 18.4882 2.26336 17.8981 1.84165 16.7179L1.61886 16.0944C1.3436 15.324 1.20597 14.9389 1.1796 14.5495C1.15623 14.2044 1.19697 13.8582 1.30002 13.5261C1.41631 13.1514 1.64023 12.8032 2.08807 12.1069L4.08633 9M19.0935 9L19.5408 7.53955C19.7529 6.84717 19.8589 6.50097 19.7756 6.22708C19.7026 5.98715 19.5362 5.78132 19.309 5.64996C19.0495 5.5 18.6636 5.5 17.8917 5.5L5.28816 5.5C4.51626 5.5 4.13031 5.5 3.87089 5.64996C3.64364 5.78132 3.47721 5.98715 3.40425 6.22708C3.32096 6.50097 3.42699 6.84717 3.63904 7.53955L4.08633 9M11.5899 5.5H7.79985C7.24141 5.5 6.70584 5.28929 6.31096 4.91421C5.91609 4.53914 5.69425 4.03043 5.69425 3.5C5.69425 2.96957 5.91609 2.46086 6.31096 2.08579C6.70584 1.71071 7.24141 1.5 7.79985 1.5C10.7477 1.5 11.5899 5.5 11.5899 5.5ZM11.5899 5.5H15.38C15.9385 5.5 16.474 5.28929 16.8689 4.91421C17.2638 4.53914 17.4856 4.03043 17.4856 3.5C17.4856 2.96957 17.2638 2.46086 16.8689 2.08579C16.474 1.71071 15.9385 1.5 15.38 1.5C12.4322 1.5 11.5899 5.5 11.5899 5.5Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <p className='font-[700] text-[17px]'>Section {data.section}</p>
                </div>
                <div>
                    <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.40293 9L13.8346 15L20.2662 9" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>

            </div>
            {showdata==indx&&<div>
            <div className='bg-white border-b-2 flex justify-between p-5'>
                <p>Item</p>
                <p>Amount (in INR)</p>
            </div>
          
            {
                data.map((val,indx)=>{
                    return(
                        <Dropdown save={save} handleprice={handleprice} data={val} indx={indx}/>
                    )
                })
            }
           
           </div>}
        </div>
    )
}

export default Accordian