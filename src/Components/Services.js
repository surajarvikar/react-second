import React, { useState } from 'react' ;
import card from '../API/Serviceapi';


const Services = () => {

    const [data , setData] = useState(card);

    return (
        <>
        <div className="my-5 main-heading">
            <h2 className="heading-1 text-center">our services</h2>
        </div>

            <div className="main-service-section">
                <div className="container">
                    <div className="row gy-4">
                    {data.map((currEle)=>{
                                    const {image , title , info , btn} = currEle ;
                                    return(
                                        <>
                                           <div className="col-12 col-lg-4 sub-section" >
                                                <div className="card" >
                                                  <img src={image} className="card-img-top" alt="no-image"/>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{title}</h5>
                                                        <p className="card-text">{info}</p>
                                                        <a href="#" class="btn btn-primary">{btn}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                            })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
