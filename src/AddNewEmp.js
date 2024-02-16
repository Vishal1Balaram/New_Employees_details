import "./AddNewEmp.css"
import EmpForm from "./EmpForm"

const AddNewEmp = (props) =>{

    const saveEmployeeDataHandler = (enteredEmployeeData) =>{
        const employeeData = {
            ...enteredEmployeeData,
            id: Math.random().toString()
        }
        props.onSavedEmpData(employeeData)
    }

    return(
            <EmpForm onSaveEmployeedata = {saveEmployeeDataHandler} />
    )
}

export default AddNewEmp