import React from 'react'

const Header = () => {
    return (
        <>
            <section id="header " className="main-header" >
                <div className="container">
                    <div className="row">
                        {/* left side start */}
                        <div className=" header-left-side col-12 col-lg-6  align-items-center justify-content-center orderlg-1 order-2">
                            <h1 className="heading-1">grow your buisness with <br /> <strong className="name">suraj arvikar</strong> </h1>
                            <h2 className="heading-2 my-3">we are the team of developers for making websites</h2>
                            <div className="button">
                                <a href="" className="get-started ">Get Started</a>
                            </div>
                        </div>
                        {/* left side end */}
                        {/*right side start */}
                        <div className="header-right-side col-12 col-lg-6 ">
                            <div className="image ">
                                <img src="./Images/image-1.jpg" alt="header-img" className="img" />
                            </div>
                        </div>
                        {/* right side end */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header
