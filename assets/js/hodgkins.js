// Bootstrap Collapse
document.querySelectorAll(".portfolio-item").forEach(item => {
	// On Expand
	item.addEventListener("show.bs.collapse", function() {
		// Add toggled class to li
	  this.classList.add("toggled");
		// Load full images
		this.querySelectorAll("img[data-img-src]").forEach(item => {
			// Prevent reloads.
			if (item.src == false) {
				// Set img src to data-img-src.
				item.src = item.getAttribute("data-img-src");
			}
		});
	});

	// On Collapse
	item.addEventListener("hide.bs.collapse", function() {
		// Remove toggled class from li
		this.classList.remove("toggled");
	});
});
