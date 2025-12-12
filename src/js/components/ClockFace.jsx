import React from "react";


//create your first component
const ClockFace = (count) => {
	return (
		<div className="container">
			<div className="row justify-content-center mt-5">
				<div className="col-md-8">
					<div className="card">
						<div className="card-header bg-dark text-white">
							<h4 className="mb-0 text-center">Countdown Timer</h4>
						</div>
						<div className="card-body">
							<div className="row text-center">
								<Digit  num={count}/>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ClockFace;