
import { useFormik } from "formik";
import * as yup from "yup";

export function FormDemoUsingYup(){




        const formik = useFormik({
                  initialValues: {
                        UserName: '',
                        Mobile : '',
                        City: '',
                        Gender: ''
                  },
                  validationSchema: yup.object({
                          UserName: yup.string().required('User Name Required').min(4, 'Name too short'),
                          Mobile : yup.string().required('Mobile Required').matches(/\+91\d{10}/,'Invalid Mobile'),
                  }) ,
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
                                        <dd className="text-danger">{formik.errors.UserName}</dd>
                                        <dt>Mobile</dt>
                                        <dd><input type="text" onChange={formik.handleChange} name="Mobile" /></dd>
                                        <dd className="text-danger">{formik.errors.Mobile}</dd>
                                        <dt>Your City</dt>
                                        <dd>
                                                <select name="City" onChange={formik.handleChange}>
                                                        <option value="-1">Choose City</option>
                                                        <option>Delhi</option>
                                                        <option>Hyderabad</option>
                                                </select>
                                        </dd>
                                        <dd className="text-danger">{formik.errors.City}</dd>
                                        <dt>Gender</dt>
                                        <dd>
                                                <input type="radio" onChange={formik.handleChange} name="Gender" value="Male" /> <label>Male</label>
                                                <input type="radio" onChange={formik.handleChange} name="Gender" value="Female" /> <label>Female</label>
                                        </dd>
                                        <dd className="text-danger">{formik.errors.Gender}</dd>
                                </dl>
                                <button type="submit">Register</button>
                        </form>
                </div>
        )
}

