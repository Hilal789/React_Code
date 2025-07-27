import { useState } from "react"

export function Login(){
            const [getVal,setVal] = useState("Hilal");

    return(

        <>
            <div class="form" >
                <h2 className="">LogIn</h2>
                <input  type="text" placeholder="user name" value={getVal} />
                <input type="text" name="" id=""  placeholder="password" />
            </div>
        </>
    )
}