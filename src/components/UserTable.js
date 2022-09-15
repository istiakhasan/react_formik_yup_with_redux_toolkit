import React from 'react';
import {  useSelector } from 'react-redux';

import TableRow from './TableRow';

const UserTable = () => {
  const {users:usersdata,inputError}=useSelector(state=>state.users)
  // const check=useSelector(state=>state)
  // console.log(check,"check")


  
 

  //  const dispatch=useDispatch()

  // const handleRemove = (key) => {
  //   const _data = data.filter(item => item.key !== key)
  //   setData(_data)
  //   localStorage.setItem('userdata', JSON.stringify(_data))

  // }

  //  useEffect(()=>{
  //  dispatch(getDataFromLocalStoreage())

  //  },[dispatch])


  return (
    <div className='w-[90%] mx-auto'>
      <span className='text-red-600 font-bold text-xs '>{inputError?.errorTitle}</span>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Age</th>
              <th>Due</th>
              <th>Gender</th>
              <th>isUser</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>



            {usersdata?.map((row, i) => (
              <TableRow key={row.key} row={row} index={i}  />
            ))}



          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;