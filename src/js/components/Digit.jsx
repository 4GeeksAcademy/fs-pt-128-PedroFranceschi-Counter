import React from "react";

//create your first component
const Digit = ({num}) => {
   
    return (
        <div className="col">
            <h3  className="display-4">
                {num}
            </h3>
        </div>
    );
};

export default Digit;