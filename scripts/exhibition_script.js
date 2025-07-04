// ! Note for myself (Nico)
// why use 
// this waits until the HTML document has been fully loaded and parsed
// (before images and other external resorces e.g. stylesheets loading)
// then the function runs!

// JS often tries to manipulate HTML elements (like setting innerHTML, or adding event listeners)
// if the script runs before the page has been successfully loaded, then there may be issues...

// runs the function when ready (i.e. everything inside the brackets)

// the event listener in this case is attached to the ENTIRE document
// ∞ parameters (event, function to run)
document.addEventListener("DOMContentLoaded", async function(event) { 
	fetch('data/data.json')
	.then(response => response.json())
	// ! then return data from the JSON file
	// .then(data => {	
		// items = data.items
		// let startWith = data.meta.startWith
		// let item = item[startWith]

		// narratives = data.meta.narratives
		// currentNarrative = data.meta.startNarrative
		// currentValue = data.meta.startValue
		// prepareNarratives()
	// })
});

// ! function : prepare narratives
// show information

// ! function : show information 
// utility functions for showing content should be run in here

// ! function : short text
// ∞ use fetch (or make a function that is responsible for retrieving text)
// shows only the small text
// hides the medium and large texts

// ! function : medium text
// ∞ use fetch
// shows the small and medium texts
// hides the large text

// ! function : large text
// ∞ use fetch
// shows all texts

// ! function : create metadata tables
// iterate through each item

// ! function : create appropriate navigation buttons (e.g. for forgotten crossroads, there is dirtmouth (L) and greenpath (R))
// create conditions for the first and last areas

// ! function : switching narratives

// ! functions : show, hide, and something for adding inner content:
// ...

// ?? other stuff for later
// ∞ some sort of image gallery, and a way to switch between images
// ∞ a way to choose text to show and hide
// perhaps a good way to do this is by having short, medium, and long classes attached to each div within a file