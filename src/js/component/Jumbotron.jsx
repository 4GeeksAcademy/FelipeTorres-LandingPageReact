import React from "react";



const Jumbotron = () => {
    return (
        <div className="mb-4 bg-primary-subtle rounded-3 mx-5 mt-4">
            <div className="container-fluid py-5 text-center bg-info bg-opacity-10 border border-3 border-info border-start-0 rounded-end">
                <h1 className="display-5 fw-bold">What's up bro?!</h1>
                <p className="fw-bolder fs-3 text-center">
                "A good bartender, like a programmer, knows that the key is not just in the ingredients or the code, but in creating an experience that stays in memory long after the glass is empty or the program finishes running..."
                </p>
                <button className="btn btn-primary btn-lg border- border-info" type="button">
                    CodeShake!
                </button>
            </div>
        </div>
    );
};
export default Jumbotron;