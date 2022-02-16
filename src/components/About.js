import React from 'react'
import { Link } from 'react-router-dom';

export const About = () => {
    return (
        <>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary"> About us</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book. It has survived not only five centuries, but
                            also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset
                            sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum

                        </p>
                        <Link to="/contact" className="btn-btn-outline-primary">Contact Us </Link>
                    </div>
                   < div className="col-md-6 d-flex justify-content-center">
                    <img src="/image/m3.jpeg " alt="" height="400px" width="400" />
            
                </div> 
                
            
                </div>
            </div>
         
        </>
    )
}
export default About;