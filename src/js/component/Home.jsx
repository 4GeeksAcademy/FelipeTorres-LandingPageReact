import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";



//include images into your bundle
const cards = [
	{
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-EukR69S3QxrYuLNY1mIdl9uLWucXCppxTw&s",
		description: "Margarita Hot",
	},
	{
		image: "https://picsum.photos/id/60/200/300",
		description: "Ofice",
	},
	{
		image: "https://picsum.photos/id/1/200/300",
		description: "Code",
	},
	{
		image: "https://picsum.photos/id/96/200/300",
		description: "game",
	}
];

//create your first component
const Home = () => {
	return (
		<div className="text-center bg-body-secondary">
			<Navbar/>
			<Jumbotron/>
			<div className="container">
				<div className="row">
					{cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
							<Card cards={item} />
						</div>
					))}
				</div>
			</div>
			<Footer/>
		</div>
	);
};
export default Home;
