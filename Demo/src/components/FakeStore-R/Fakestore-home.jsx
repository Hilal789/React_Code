
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function FakestoreHome(){

        const [categories, setCategories] = useState([]);

        useEffect(()=>{
                axios.get('https://fakestoreapi.com/products/categories')
                .then(response=>{
                        setCategories(response.data);
                })
        },[])

        return(
                <div>
                        <h2>Home</h2>
                        <ul className="list-unstyled fs-4">
                                {
                                        categories.map(category=>
                                                <li className="my-2 bg-dark text-white p-2 w-25" key={category}> <Link className="text-decoration-none text-white" to={`/products/${category}`}>{category.toUpperCase()}</Link> </li>
                                        )
                                }
                        </ul>
                </div>
        )
}

