
import { useState } from "react"

export function EventDemo(){
        const [username, setUserName] = useState('John');

        function handleNameChange(e){
                setUserName(e.target.value);
        }

        return(
                <div className="container-fluid">
                        <div className="mt-4">
                                User Name : <input type="text" onChange={handleNameChange} value={username} />
                                <p> Hello ! {username} </p>
                        </div>
                </div>
        )
}

