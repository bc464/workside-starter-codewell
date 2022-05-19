const btnNavEl = document.querySelector(".btn-mobile-nav");
const navbarEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function(){
	navbarEl.classList.toggle("nav-open");
});

const jobLinkFirst = document.querySelector(".job-link-first");
const jobList = document.querySelector(".job-list");
const jobInformation = document.querySelector(".job-information");
const filtersDropdown = document.querySelector(".filters-dropdown");

jobLinkFirst.addEventListener("click", function() {
	jobList.style.display = "none";
	filtersDropdown.style.display = "none";
	jobInformation.style.display = "block";
})