import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleModifyData, removeUsrsDAta } from '../Redux/Slice/UserDataSlice';

const TableRow = ({row,handleRemove,data,setData, index}) => {
    const dispatch=useDispatch()
    const [error,setError]=useState('')
    // const [age,setAge]=useState(row?.age)
    const handleChange=(value, i)=>{
        if(value<=0){
            setError("Field shou")
        }
        const _data = [...data];
        _data[i].age = value;



        //  setAge(e.target.value)
        //  const remaining=data.filter(item=>item.key !==row.key)
        //  const editAbleUser=data.find(item=>item.key ===row.key)
        //  const property=e.target.name 
        //  editAbleUser[property]=e.target.value 
        //  const _data=[...remaining,editAbleUser]
         setData(_data)
         localStorage.setItem('userdata',JSON.stringify(_data))

        
  
    }
  
    return (
        <tr >
        <th className='w-[20%]'>{index+1}</th>
        <td className='w-[20%]'><input name='age' className='input input-primary' value={row?.age} onChange={(e) => dispatch(handleModifyData({value:e.target.value,key:index,name:e.target.name}))} type="text"  /></td>
        {/* <td className='w-[20%]'><input name='age' value={row?.age} onChange={(e) => handleChange(e?.target?.value,index)} type="text"  /></td> */}
        <td className='w-[20%]'><input name='dues' className='input input-primary'  value={row?.dues} onChange={(e) => dispatch(handleModifyData({value:e.target.value,key:index,name:e.target.name}))} type="text"  /></td>
        <td className='w-[20%]'>
            <select name="gender" value={row.gender} onChange={(e)=>dispatch(handleModifyData({value:e.target.value,key:index,name:e.target.name}))}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </td>
        <td className='w-[20%]'>{row.isUser?<span className='text-green-600 font-bold '>Yes</span>:<span className='text-red-600 font-bold'>No</span>}</td>
        <td className='w-[20%]'><button onClick={()=>dispatch(removeUsrsDAta(row.key))} className='btn btn-error btn-xs bg-red-500 text-white font-semibold'>Delete</button></td>
      </tr> 
    );
};

export default TableRow;