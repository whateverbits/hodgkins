// Config Functions
var config = {
	// Element prefix
	prefix: "conf-",

	// buttonCycle
	buttonCycle: function(cfTarget) {
		var cfStateMax = document.getElementById(this.prefix + cfTarget).children.length - 1;
		var lsvState = localStorage.getItem(cfTarget);
		// Increment to next state.
		if (lsvState >= cfStateMax) {
			lsvState = 0;
		} else if (lsvState === null) {
			lsvState = 1;
		} else {
			lsvState++;
		}
		localStorage.setItem(cfTarget, lsvState);
		this.setRoot(cfTarget, lsvState);
		this.setIcon(cfTarget, lsvState);
	},

	// check
	check: function(cfTarget) {
		let lsvState = localStorage.getItem(cfTarget);
		if (lsvState !== null) {
			this.setRoot(cfTarget, lsvState);
			this.setIcon(cfTarget, lsvState);
		}
	},

	// setIcon
	setIcon: function(cfTarget, cfState) {
		var cfFeat = document.getElementById(this.prefix + cfTarget);
		for (let cf = 0; cf < cfFeat.children.length; cf++) {
			if (cf === parseInt(cfState)) {
				cfFeat.children[cf].classList.remove("d-none");
			} else {
				cfFeat.children[cf].classList.add("d-none");
			}
		}
	},

	// setRoot
	setRoot: function(cfTarget, cfState) {
		// Set attribute state.
		document.documentElement.setAttribute(cfTarget, cfState);
	},
}

// Page Load
document.addEventListener("DOMContentLoaded", function() {
	// Config checks.
	config.check("theme");
	config.check("dyslexic");
});

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
