import React, { useEffect, useState } from 'react';
import InputForm from './components/InputForm';
import UserTable from './components/UserTable';


const getUserDAta=()=>{
  const getData=localStorage.getItem('userdata')
  let data;
  if(getData){
     data= JSON.parse(getData)
     return data
  }else{
    return data=[]
  }
}
const App = () => {
  const [data,setData]=useState(getUserDAta())
  



 
 
 
  return (
    <div >
      <div className='w-4/12 mx-auto mb-4'>

       <InputForm />
      </div>


       <div>
        <UserTable setData={setData} data={data}/>
       </div>
    </div>
  );
};

export default App;