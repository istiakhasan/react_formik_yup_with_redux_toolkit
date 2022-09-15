

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useDispatch,useSelector}  from 'react-redux'
import { addUsers } from '../Redux/Slice/UserDataSlice';

const InputForm = () => {
    const dispatch=useDispatch()
    const {users:usersdata}=useSelector(state=>state.users)

    const validationSchema = Yup.object().shape({
        age: Yup.string().required("age is required"),
        dues: Yup.string().required("due is required "),
        gender: Yup.string().required("Gender is required"),
      
      });
    const formik = useFormik({
        initialValues: {
              gender:"male",age:"", dues:""
        },
        validationSchema,
        onSubmit: values => {
            if(!values.age){
                formik.errors.age='Failed'
            }
             const getMaxValue=usersdata.map(item=>item.key)
             const maxvalue=Math.max(...getMaxValue,0)
             const newData={...values,key:maxvalue+1}
            // setData([...data,newData])
            dispatch(addUsers(newData))
            // localStorage.setItem("userdata",JSON.stringify([...data,newData]))
        },
    });
   
 
    return (
        <div>


            <form onSubmit={formik.handleSubmit}>

                <label className='text-md font-semibold block my-3' htmlFor="">Enter Your Age:</label>
                <input
                    className="border-black border w-full mx-auto py-3 pl-5 rounded"
                    placeholder="enter you name "
                    type="text"
                    name="age"
                    id='age'
                    
                    onChange={formik.handleChange}
                    value={formik.values.age}
                />
                  <label className='text-red-500 text-xs font-bold ' htmlFor="">{formik.errors.age}</label>
                <label className='text-md font-semibold block my-3' htmlFor="">Due:</label>
                <input type="text"
                    id='dues'
                    onChange={formik.handleChange}
                    value={formik.values.dues}


                    className="border-black pl-5 rounded py-3 border w-full block my-4" placeholder="Student Dues" name="dues" />
                 <label className='text-red-500 text-xs font-bold ' htmlFor="">{formik.errors.dues}</label>
                <label className='flex items-center gap-x-5' >
                    <div>
                        <label className='block text-md font-semibold ' htmlFor="location">Gender</label>
                        <select


                            className="block border border-gray-500"
                            name="gender"
                            id='gender'
                            onChange={formik.handleChange}
                            value={formik.values.gender}
                        >
                     
                            <option  value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="third">Third Gender</option>
                        </select>
                        <label className='text-red-500 text-xs font-bold '  htmlFor="">{formik.errors.gender}</label>

                    </div>
                    <div>
                        <label className='block text-md font-semibold ' htmlFor="">Is User</label>
                        <input type="checkbox"

                            id='isUser'
                            onChange={formik.handleChange}
                            value={formik.values.isUser}
                            name="isUser" />
                         

                    </div>
                </label>

                <button className='btn btn-primary w-full bg-cyan-700 mt-4 text-white font-bold px-4 py-1 rounded block' type="submit" >
                    Submit
                </button>
            </form>






        </div>
    );
};

export default InputForm;