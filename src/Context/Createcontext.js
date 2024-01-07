import React from 'react'
import axios from 'axios';
import { createContext } from 'react'

import { useEffect,useState } from 'react';
export let myContext = createContext();
function Createcontext(props) {
    const [data, setdata] = useState();
    const [price, setprice] = useState();
    const [origdata, setorigdata] = useState()
    useEffect(()=>{
        fetchappi()
    },[])
    // console.log(price)
    const fetchappi = () => {
        axios.get('https://api.jsonbin.io/v3/b/6572dc690574da7622d1fd42')
          .then((res) => {
            // console.log("dweaq",res.data.record)
            setorigdata(res.data.record);
            let arr80c=[];
            let arr80d=[];
            let arr80g=[];
            let arr={};
            Object.keys(res.data.record).forEach((val,indx)=>{
              if(res.data.record[val].section=='80C'){
                arr80c.push(res.data.record[indx])
              }
              else if(res.data.record[val].section=='80D'){
                arr80d.push(res.data.record[indx])
              }
              else if(res.data.record[val].section=='80G'){
                arr80g.push(res.data.record[indx])
              }
            })
            
            arr['80C']=arr80c;
            arr['80D']=arr80d;
            arr['80G']=arr80g;
            arr['80C']['section']='80C'
            arr['80D']['section']='80D'
            arr['80G']['section']='80G'
    
            // console.log("csd",arr)
    
            setdata(arr)
          })
      }
    return (
    <myContext.Provider value={{data,price,setprice,origdata,setorigdata}}>
    {props.children}
    </myContext.Provider>
  )
}

export default Createcontext