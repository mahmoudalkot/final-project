import image from "../../imags/images.png";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { data , useNavigate } from "react-router-dom";
function Register() {
  const navigator = useNavigate();

  const Registervalidation = Yup.object({
    username: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Password must be at least 8 characters long and contain at least one letter and one number"),
    phone: Yup.string().required(),
    age : Yup.string().required(),
  });

    async function Rigesternow(values) {
    try {
      const options = {
        url : "https://fakestoreapi.com/products",
        method : "POST",
        data: values
      }
      const response = await axios(options)
      console.log(response);
      navigator('/home')
      
      }
    catch (error) {
      console.log(error);
    }
  }


  // function  Rigesternow (values) {
  //   console.log(Formik);
    
  // }
const Formik = useFormik({
  initialValues: {
    username: "",
    email: "",
    password: "",
    phone: "",
    age : "",
  },
  onSubmit : Rigesternow,
  validationSchema : Registervalidation,
})



    return (
      <>
        <main>
            {/* parent */}
            <div className="parent d-flex w-200 justify-content-center align-content-center shadow-lg container min-vh-100 my-3">
            {/* image */}
              <div>
                <p className="text-primary fs-4 fw-bold  ">cyber cat programing</p>
              <img src={image} alt="error" style={{ width: "600px", height: "auto", marginRight: "60px" }} className="rounded" />
              </div>  
            {/* inpurs */}

            <form onSubmit={Formik.handleSubmit} className="w-50" action="">
              <div>
                <div className="w-50 inputs"> 

                </div>

                <div className="mt-">
                <p className="text-primary fs-4 h-auto w-auto">User Name </p>
                <input name="username" onBlur={Formik.handleBlur}  value={Formik.values.username} onChange={Formik.handleChange} type="text" placeholder="User Name" className="w-200 py-3 px-2 rounded shadow-lg border-0 h-auto mt- "/>
                {Formik.touched.username && Formik.errors.username ? (
                  <div className="text-danger">{Formik.errors.username}</div>
                ) : ""}
                </div>
                

                <div className="mt-3">
                <p className="text-primary fs-4">email</p>
                <input name="email" onBlur={Formik.handleBlur} value={Formik.values.email} onChange={Formik.handleChange} type="email" placeholder="email" className="w-200 py-3 px-2 rounded shadow-lg border-0 h-auto mt- "/>
                {Formik.touched.email && Formik.errors.email ? (
                  <div className="text-danger">{Formik.errors.email}</div>
                ) : ""}
                </div>

                <div className="mt-3">
                <p className="text-primary fs-4">password</p>
                <input name="password" onBlur={Formik.handleBlur} value={Formik.values.password} onChange={Formik.handleChange} type="password" placeholder="password" className="w-200 py-3 px-2 rounded shadow-lg border-0 h-auto mt- "/>
                {Formik.touched.password && Formik.errors.password ? (
                  <div className="text-danger">{Formik.errors.password}</div>
                ) : ""}
                </div>

                <div className="mt-3">
                <p className="text-primary fs-4">phone</p>
                <input name="phone" onBlur={Formik.handleBlur} value={Formik.values.phone} onChange={Formik.handleChange} type="number" placeholder="phone number" className="w-200 py-3 px-2 rounded shadow-lg border-0 h-auto mt- "/>
                {Formik.touched.phone && Formik.errors.phone ? (
                  <div className="text-danger">{Formik.errors.phone}</div>
                ) : ""}
                </div>

                <div className="mt-3">
                <p  className="text-primary fs-4">age</p>
                <input type="number" onBlur={Formik.handleBlur} name="age" value={Formik.values.age} onChange={Formik.handleChange} placeholder="age" className="w-200 py-3 px-2 rounded shadow-lg border-0 h-auto mt- "/>
                {Formik.touched.age && Formik.errors.age ? (
                  <div className="text-danger">{Formik.errors.age}</div>
                ) : ""}
                </div>

              </div>
              <div>
                <button type="submit" className="btn btn-primary mt-3">submit</button>
              </div>
            </form>

            </div>
        </main>
      </>
    );
  }
  
  export default Register;