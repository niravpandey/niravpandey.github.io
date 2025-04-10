import { useState } from "react";
import data from './data.js'
import './styles.css'

export default function Accordion(){
    // selected holds the current value of the state
    // setSelected is a function that updates the value of selected
    const [selected, setSelected] = useState(null);
    // updates the value of selected
    function handleSingleSelection(getCurrentID){
        setSelected(getCurrentID);
    }
    return (
        <div className='wrapper'>
            <div className="accordion">
                {   
                    data && data.length > 0 ? 
                    // if available
                    // .map() iterates over the data array and converts it to UI
                    data.map(dataItem => <div className="item">
                        <div onClick={()=>handleSingleSelection(dataItem.id)} className="title">
                            <h3 className="question">{dataItem.question}</h3>
                        </div>
                        
                        {
                            selected === dataItem.id ?
                            (
                                <div className="answer">{dataItem.answer}</div>
                            ):
                        null}
                        
                    </div>)
                    // else
                    : <div>No Data Found</div>
                }
            </div>
        </div>
    );
};