import React from "react";
import image from "../../imags/alkot.jpeg";

function Login() {
  return (
    <>
    <main>
        <div className="parent d-flex w-200 justify-content-center align-items-center shadow-lg container min-vh-100 my-3"> 
            <div>
          <div>
            <p className="text-primary fs-4 fw-bold my-5 ">cyber cat programing</p>
          </div>
            <img 
  src={image} 
  alt="error" 
  style={{ width: "600px", height: "700px", marginRight: "60px" }} 
  className="rounded"
/>
            </div>

            <div className="inputs">
                <div className="mt-3">
                <p className="text-primary fs-4">Email</p>
                <input type="email" placeholder="Email" className="w-75 py-3 px-2 rounded shadow-lg border-0 h-auto mt- "/>
                </div>

                <div className="mt-5">
                <p className="text-primary fs-4">Password</p>
                <input type="password" placeholder="Password" className="w-75 py-3 px-2 rounded shadow-lg border-0 h-auto mt-"  />    
                </div>
            </div>




        </div>
    </main>
    </>
  );
}

export default Login;