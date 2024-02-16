import './Essentials.css'

const Essentials = (props) =>{
    const classes = ' EmpDetails-container ' + props.className

    return(
        <div className= {classes} >
           {props.children}
        </div>
    )
}

export default Essentials