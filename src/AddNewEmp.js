import "./AddNewEmp.css"
import EmpForm from "./EmpForm"

const AddNewEmp = ({children}) =>{

    
        
            return(
                <div>
                    {children}
                </div>
            )
        }
        
        

export default AddNewEmp


// Made Changes in above Code (inCase for Refference) Below code is copy of previous one.


// const AddNewEmp = (props) =>{

//     const saveEmployeeDataHandler = (enteredEmployeeData) =>{
//         const employeeData = {
//             ...enteredEmployeeData,
//             id: Math.random().toString()
//         }
//         props.onSavedEmpData(employeeData)
//     }

//     return(
//             <EmpForm onSaveEmployeedata = {saveEmployeeDataHandler} />
//     )
// }

// export default AddNewEmp





