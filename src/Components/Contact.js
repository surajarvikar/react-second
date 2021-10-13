import React, { useState } from 'react'

const Contact = () => {
    
    const [data , setData] = useState({
        fullname : "",
        phone : "",
        email : "",
        message : "",

    });

    const InputEvent = (event) =>{
        const {name , value} = event.target ;
        setData((preVal)=>{
            return{
                ...preVal,
                [name] : value,
            }
        })
    }

    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`${data.fullname} your form has been submitted`);
    }

    return (
        <>
             <div className="main-contact-portion">
                <h1 className="heading-1 text-center">Contact Us</h1>
            </div>
            <div className="sub-contact-portion">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 mx-auto">
                            <form onSubmit={formSubmit}>

                            <div className="mb-3">
                                <label className="form-label">FullName</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Enter Your Name"
                                name="fullname"
                                value={data.fullname}
                                onChange={InputEvent} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input 
                                type="number" 
                                className="form-control" 
                                placeholder="mobile number"
                                name="phone"
                                value={data.phone}
                                onChange={InputEvent}  />
                            </div>

                            <div class="mb-3">
                                <label className="form-label">Email address</label>
                                <input 
                                type="email" 
                                className="form-control" 
                                placeholder="name@example.com"
                                name="email"
                                value={data.email}
                                onChange={InputEvent} />
                            </div>

                            <div class="mb-3">
                                <label className="form-label">Message</label>
                                <textarea 
                                type="text" 
                                className="form-control" 
                                placeholder="write something"
                                name="message"
                                value={data.message}
                                onChange={InputEvent} />
                            </div>

                            <div class="col-12">
                                <button className="btn btn-primary" type="submit">Submit form</button>
                            </div>
                            
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact ;
