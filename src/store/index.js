import {createStore} from 'redux'
import {createSlice, configureStore} from '@reduxjs/toolkit'

const employees = [
    {EmpId: 2244, EmpName: "Vishal Balaram", DOJ: new Date(2023, 9, 14) },
    {EmpId: 2246, EmpName: "G Mouli", DOJ: new Date(2023, 10, 11) },
    {EmpId: 2247, EmpName: "A Ravi", DOJ: new Date(2023, 12, 14) },
    {EmpId: 2248, EmpName: "SS Sangeetha", DOJ: new Date(2023, 8, 9) },
  ]

  const initialState = {items: employees}

  const employeeSlice = createSlice({
    name: 'employee',
    initialState: initialState,
    reducers: {
      addEmployee(state,action){
        const New_Employee_Details = {
          ...action.payload,
          id: Math.random().toString()
      };
          state.items.push(New_Employee_Details)
      },

      removeEmployee(state, action){}
    }
  })

  export const sendEmployeesData = (New_Employee_Details) =>{
    return async (dispatch) => {
      const sendRequest = async () =>{
        const response = await fetch( 'https://newemployees-a31f0-default-rtdb.firebaseio.com/employee.json' , {
          method: "PUT",
          body: JSON.stringify(New_Employee_Details),
      });

      if(!response.ok){
        throw new Error('Request Failed')
      }
      };

      try{
        await sendRequest();
      }catch (error) {
          console.log(error)
      }

    };
  }

  const employeeStore = configureStore({
    reducer: employeeSlice.reducer
  })

  export default employeeStore;
  export const employeeActions = employeeSlice.actions;