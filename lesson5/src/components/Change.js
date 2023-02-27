import React from "react";
import Light from './Light'
import './Light.css';


export default function Change () {
    const [pushlight, setPushlight] = React.useState('green');
    const pushNext= () => {
        if (pushlight === 'green') {
            setPushlight ('yellow')
        }
        if (pushlight === 'yellow') {
            setPushlight ('red')
        }
        if (pushlight === 'red') {
            setPushlight ('green')
        }
    }
    
    return (
        <>
        <div className="container" > 
            <button onClick = {pushNext}> Next</button>
            <Light color={"green"} isOn={pushlight === 'green'}/>
            <Light color={"yellow"} isOn={pushlight === 'yellow'}/>
            <Light color={"red"} isOn={pushlight === 'red'}/>
            
        </div>
        
        </>
    )
}