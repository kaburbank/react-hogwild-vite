import { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import Filter from "./Filter";
import HogForm from "./HogForm";
import hogs from "../porkers_data";

function App() {

	const [showGreased, setShowGreased] = useState(false);
	const [allHogs, setAllHogs] = useState(hogs);
	const [sortBy, setSortBy] = useState("");

	//Define function to show greased pigs
	function handleShowGreased() {
			setShowGreased((previous) => !previous);
	};

	//Filter hogs into a list and sort by name
	const filteredHogs = allHogs.filter(hog => (showGreased ? hog.greased : true));
	let displayedHogs = [...filteredHogs];

	if (sortBy === "name") {
		displayedHogs.sort((a, b) => a.name.localeCompare(b.name));
	} else if (sortBy === "weight") {
		displayedHogs.sort((a, b) => a.weight - b.weight);
	};

	//Define functiont to handle adding hog
	function handleAddHog(newHog) {
			console.log("New Hog Submitted:", newHog);
			setAllHogs((prev) => [...prev, newHog]);
	};

	//Define function to handle sort
 	function handleSort(e) {
 		setSortBy((prev) => e.target.value);
 	};

	return (
			<div className="ui grid container App">
					<div className="sixteen wide column centered">
						<Nav />
					</div>

					<div className="ui eight wide column">
						<Filter onChangeShowGreased={handleShowGreased} onChangeHandleSort={handleSort} sortBy={sortBy} showGreased={showGreased} />
					</div>

					<div className="ui eight wide column">
						<HogForm onFormSubmission={handleAddHog} />
					</div>
            
					<div className="ui eight wide column">
						<HogList hogs={displayedHogs}/>
					</div>

			</div>
	);
};

export default App;