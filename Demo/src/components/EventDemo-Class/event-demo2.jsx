
import { useState } from "react"

export function EventDemo2(){
        const [username, setUserName] = useState('John');

        function handleNameChange(e){
                setUserName(e.target.value);
        }

        function handleDetailsClick(...product){
                var [id, name, stock] = product;
                alert(`Id=${id}\nName=${name}\nStock=${stock}`);
        }

        return(
                <div className="container-fluid">
                        <div className="mt-4">
                                User Name : <input type="text" onChange={handleNameChange} value={username} />
                                <p> Hello ! {username} </p>
                        </div>
                        <button onClick={()=>{ handleDetailsClick(1, 'TV', true) }} >Details</button>
                </div>
        )
}

