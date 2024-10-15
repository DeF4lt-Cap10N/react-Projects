import data from "./data"
import { useState } from "react";
import "./style.css"

function Accordian() {
    const [selected, setSlected] = useState(null);
    const [enableMultiSelected, setEnableMultiSetSlected] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handelSingleSlection(getCurrentId) {
        setSlected(getCurrentId === selected ? null : getCurrentId);
    }

    function handelMultiSlection(getCurrentId) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrId = cpyMultiple.indexOf(getCurrentId);

        console.log(findIndexOfCurrId);
        if (findIndexOfCurrId === -1) cpyMultiple.push(getCurrentId);
        else cpyMultiple.splice(findIndexOfCurrId, 1);

        setMultiple(cpyMultiple);
    }

    // console.log(selected, multiple);

    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSetSlected(!enableMultiSelected)}>Enable Multi Selection
            </button>

            <div className="accordian">
                {
                    data && data.length > 0 ? (data.map((dataItems) =>
                    (
                        <div className="item">
                            <div onClick={enableMultiSelected ? () => handelMultiSlection(dataItems.id) : () => handelSingleSlection(dataItems.id)} className="title">
                                <h3>{dataItems.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                enableMultiSelected ?
                                    multiple.indexOf(dataItems.id) !== -1 && (
                                        <div className="content">{dataItems.answer}</div>
                                    )
                                    :
                                    selected === dataItems.id && (
                                        <div className="content">
                                            {dataItems.answer}
                                        </div>
                                    )

                            }

                            {/* 
                            {
                                selected === dataItems.id || multiple.indexOf(dataItems.id) !== -1 ? (
                                    <div className="content">
                                        {dataItems.answer}
                                    </div>
                                ) : null
                            } */}

                        </div>
                    ))
                    ) : (
                        <div>No data Found </div>
                    )
                }
            </div>
        </div >
    )
}


export default Accordian;