import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 
  users: [],
  inputError: {
    errorTitle: " ",
    error: false
  }
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addUsers: (state, action) => {

      state.users = [...state.users, action.payload]

      // localStorage.setItem('userdata', JSON.stringify(state.users))
    },
    removeUsrsDAta: (state, action) => {
      const remaining = state.users.filter(data => data.key !== action.payload)
      state.users = remaining
      // localStorage.setItem('userdata', JSON.stringify(state.users))
    },

    // getDataFromLocalStoreage: (state) => {
    //   const getData = localStorage.getItem('userdata')

    //   let data;
    //   if (getData) {
    //     data = JSON.parse(getData)
    //     state.users = data
    //   } else {
    //     data = []
    //     state.users = data
    //   }
    // },
    handleModifyData: (state, action) => {
      state.inputError.errorTitle= " "
      state.inputError.error= false

      const values = parseInt(action.payload.value)
  
      if (values < 0 || isNaN(values)) {
       
        state.inputError.errorTitle = "input value invalid "
        state.inputError.error = true
       
      }
      const _data = [...state.users]
      const index = action.payload.key
      const propertyName = action.payload.name
      _data[index][propertyName] = action?.payload?.value
      state.users = [..._data]
      // localStorage.setItem('userdata', JSON.stringify(_data))



    }
  },
})

// Action creators are generated for each case reducer function
export const { addUsers, decrement, getDataFromLocalStoreage, removeUsrsDAta, handleModifyData } = counterSlice.actions

export default counterSlice.reducer