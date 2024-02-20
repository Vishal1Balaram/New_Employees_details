import './EmpForm.css'
import React, {useState} from 'react'
import { useContext } from 'react'
import { EmployeeContext } from './employee-context'
import { UseDispatch, useDispatch } from 'react-redux';

const EmpForm = (props) =>{

    const dispatch = useDispatch();

    const [AddedEmpId, setEnteredEmpId] = useState('')
    const [AddedEmpName, setEnteredName] = useState('')
    const [AddedDOJ, setEnteredDOJ] = useState('')

    const EmpIdChangeHandler = (event) => {
        setEnteredEmpId(event.target.value);
    }

    const EmpNameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const EmpDOJChangeHandler = (event) => {
        setEnteredDOJ(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        const employeeData = {
            EmpId: AddedEmpId,
            EmpName: AddedEmpName,
            DOJ: new Date(AddedDOJ)
        }

        dispatch({type: "ADD_EXPENCE", payload: employeeData})
        setEnteredEmpId('')
        setEnteredName('')
        setEnteredDOJ('')
    }   

    return(
        <form className='form-container' onSubmit={submitHandler} >
            <div className='form-heading-container' >
                <h1 className='form-heading' >Employee Form</h1>
            </div>
            <div className='id-name-doj-container' >
                <div className='emp-id-container'>
                    <label className='id-label' >EmpId:</label>
                    <input type='number' className='id-input' onChange={EmpIdChangeHandler} value={AddedEmpId} />
                </div>
                <div className='emp-name-container' >
                    <label className='name-label' >Emp Name:</label>
                    <input type='text' className='name-input' onChange={EmpNameChangeHandler} value={AddedEmpName} />
                </div>
                <div className='emp-doj-container' >
                    <label className='doj-label' >Date Of Joining:</label>
                    <input type='date' className='doj-input' onChange={EmpDOJChangeHandler} value={AddedDOJ} />
                </div>
            </div>
            <div className='button-container'>
                <button type='submit'   className='add-button' >ADD</button>
            </div>
        </form>
    )
}

export default EmpForm