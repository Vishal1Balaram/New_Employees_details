const EmployeeDOJ = (props) =>{

    const month = props.DOJ.toLocaleString('en-US', {month: 'long'});
    const day = props.DOJ.toLocaleString('en-US', {day: '2-digit'});
    const year = props.DOJ.getFullYear()

    return(
        <div>
            <p className='emp-doj' >DOJ: {day} {month} {year}</p>
        </div>
    )
}

export default EmployeeDOJ