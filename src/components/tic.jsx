import React, { useState } from "react"


let data=["","","","","","","","",""]
export const Tic=()=>{
    let [Count,setCount]=useState(0);
    let[text,settext]=useState("")
    

    
    

    const toggle=(e,num)=>{
        
        if(Count%2===0){
            e.target.innerHTML="X"
            data[num]="x";
            setCount(Count+1);
        }
        else
        {
            e.target.innerHTML="o"
            data[num]="o";
            setCount(Count+1);
        }
        checkwin();

    }
    const checkwin=()=>{
        if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
        {
            let a=data[0];
            settext(`player ${a} won`);
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!=="")
        {
            let a=data[3];
            settext(`player ${a} won`);
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!=="")
            {
                let a=data[0];
                settext(`player ${a} won`)
            }
            else if(data[6]===data[4] && data[4]===data[2] && data[2]!=="")
                {
                    let a=data[6];
                    settext(`player ${a} won`)
                }
            else if(data[6]===data[7] && data[7]===data[8] && data[8]!=="")
                {
                    let a=data[6];
                    settext(`player ${a} won`)
                }
                else if(data[0]===data[3] && data[3]===data[6] && data[6]!=="")
                    {
                        let a=data[0];
                        settext(`player ${a} won`)
                    }   
                    else if(data[1]===data[4] && data[4]===data[7] && data[7]!=="")
                        {
                            let a=data[1];
                            settext(`player ${a} won`)
                        } 
                        else if(data[2]===data[5] && data[5]===data[8] && data[8]!=="")
                            {
                                let a=data[2];
                                settext(`player ${a} won`)
                            }
    }
    const reset=()=>{
        setCount(0);
        data=["","","","","","","","",""]
        const boxes = document.querySelectorAll(".boxes");
        boxes.forEach(box => box.innerHTML = "");

    }

    return (
<> 
<div className="container">
    <h1 className="title">TIC TAC TOE</h1>
    <p>{text}</p>
    <div className="board">
        <div className="row1">
            <div className="boxes" onClick={(e)=>(toggle(e,0))}></div>
            <div className="boxes"onClick={(e)=>(toggle(e,1))}></div>
            <div className="boxes"onClick={(e)=>(toggle(e,2))}></div>
        </div>
        <div className="row2">
            <div className="boxes"onClick={(e)=>(toggle(e,3))}></div>
            <div className="boxes"onClick={(e)=>(toggle(e,4))}></div>
            <div className="boxes"onClick={(e)=>(toggle(e,5))}></div>
        </div>
        <div className="row3">
            <div className="boxes"onClick={(e)=>(toggle(e,6))}></div>
            <div className="boxes"onClick={(e)=>(toggle(e,7))}></div>
            <div className="boxes"onClick={(e)=>(toggle(e,8))}></div>
        </div>
      

    </div>
    <button onClick={reset}>reset</button>
</div>
</>
    )
}

