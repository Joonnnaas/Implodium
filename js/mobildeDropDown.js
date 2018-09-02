function openMobileMenu() {
	let mobileMenu = document.getElementById("mobileDropDown");
	
	if(mobileMenu.style.height === "0") {
		mobileMenu.style.height = "400px";
		mobileMenu.style.display = "flex"
	} else if(mobileMenu.style.height === "400px") {
		mobileMenu.style.height = "0"
		mobileMenu.style.display = "none"
	}
}