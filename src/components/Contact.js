import React from 'react'

export const Contact = () => {
    return (
        <>
            <div className="container">
                <div className="row ">
                    <div className="col-12 text-center my-3">
                        <h1>Have Some Issue?</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-5 d-flex justify-content-center">
                            <img src="/image/co.jpeg" height="200px" width="200px" />
                        </div>
                        <div className="col-md-6">


                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">Send Message  </button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default Contact;