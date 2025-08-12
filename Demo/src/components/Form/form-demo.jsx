
import { useFormik } from "formik";

export function FormDemo(){


        const formik = useFormik({
                  initialValues: {
                        UserName: '',
                        Mobile : '',
                        City: '',
                        Gender: ''
                  },
                  onSubmit: (user) => {
                          console.log(user);
                  }
        })

        return(
                <div className="container-fluid">
                        <h2>Register User</h2>
                        <form onSubmit={formik.handleSubmit}>
                                <dl>
                                        <dt>User Name</dt>
                                        <dd><input type="text" onChange={formik.handleChange} name="UserName" /></dd>
                                        <dt>Mobile</dt>
                                        <dd><input type="text" onChange={formik.handleChange} name="Mobile" /></dd>
                                        <dt>Your City</dt>
                                        <dd>
                                                <select name="City" onChange={formik.handleChange}>
                                                        <option>Choose City</option>
                                                        <option>Delhi</option>
                                                        <option>Hyderabad</option>
                                                </select>
                                        </dd>
                                        <dt>Gender</dt>
                                        <dd>
                                                <input type="radio" onChange={formik.handleChange} name="Gender" value="Male" /> <label>Male</label>
                                                <input type="radio" onChange={formik.handleChange} name="Gender" value="Female" /> <label>Female</label>
                                        </dd>
                                </dl>
                                <button type="submit">Register</button>
                        </form>
                </div>
        )
}

