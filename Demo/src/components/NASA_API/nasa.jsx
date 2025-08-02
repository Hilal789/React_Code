
import axios from "axios";
import { useEffect, useState } from "react"



export function Nasa(){

    const [marsObj, setMarsObj] = useState({photos:[]});

    function LoadPhotos(){
        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=SjBgl7WInw9T1Vm5CVPv8gAhsQlvGkWLOfVmxabZ')
        .then(response=>{
            setMarsObj(response.data);
        })
    }
    useEffect(()=>{

        LoadPhotos();

    },[])
    
    return(
        <div>
            <h2>Mars Rover Photos</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Photo Id</th>
                        <th>Preview </th>
                        <th>Camera Name <button className="btn bi bi-sort-alpha-down"></button> </th>
                        <th>Rover Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        marsObj.photos.map(photo=>
                            <tr key={photo.id}>
                                <td>{photo.id}</td>
                                <td>
                                    <a href={photo.img_src} target="_blank"><img width="100" height="100" src={photo.img_src} /></a>
                                </td>
                                <td>{photo.camera.full_name}</td>
                                <td>{photo.rover.name}</td>
                                <td>
                                    <button className="bi bi-trash btn btn-danger"></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}





