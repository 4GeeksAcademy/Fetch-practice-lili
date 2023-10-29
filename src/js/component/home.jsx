import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [data, setData] = useState(null);
  
	useEffect(() => {
	  fetch("https://playground.4geeks.com/apis/fake/todos/user/")
		//Parse the response as JSON when it's available
		//Parse = convert object to another type
		.then((res) => res.json())
		.then((data) => setData(data));
	}, []);
	
	console.log(data);

	return (
	  <div>
		<ul>
		  {data ? data.map((item) => <li key={item.id}>{item}</li>) : <div></div>}
		</ul>
	  </div>
	);
  }
  

export default Home;
