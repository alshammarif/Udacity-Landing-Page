/*
 * Define Global Variables 
*/

const nav_ul = document.getElementById('navbar__list');
const sections = document.querySelectorAll("section");
const topBtn = document.getElementById("top");
let navDisplay;

const secOptions = {
    root: null,
    threshold: 0.60
}

/*
 * End Global Variables
 * Start Helper Functions
*/

//Figures out the exact section loctation on the web page [this was found from stackOverflow]
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
}

//Scroll to anchor ID using scrollTO event 
function scrollToSec(num) {
    let section = document.getElementById("section"+ num);
    let secCoords = getOffset(section);
    
    window.scrollTo({
        top: secCoords.top,
        left: secCoords.left,
        behavior: "smooth"
    });
}

//Creates a new Navbar li element using the given section number
function createNavLi(secNum){
    //Creates the link to the section
    let nLink = document.createElement('a');
    nLink.innerText = "Section " + secNum;
    nLink.className = "menu__link";
    nLink.addEventListener('click', function() {
       scrollToSec(secNum)
    })

    //Creates the li for the section
    let nav_li = document.createElement('li');
    nav_li.id = "sec" + secNum;
    nav_li.appendChild(nLink);
    nav_li.classList
    
    //Return the created li element with all the needed properties
    return nav_li;

}

//when to show 'Top' button on page
function topScroll(num) {
    if (window.pageYOffset >= num - 205) {
        topBtn.style.marginBottom = "auto";
      } else {
        topBtn.style.marginBottom = "-500px";
      }
}


/*
 * End Helper Functions
 * Begin Main Functions
*/

//Build the navbar based on the number of section
function navBuild() {
    for (let i = 1; i <= sections.length; i++) {
        var newLink = new createNavLi(i);
        nav_ul.appendChild(newLink);
    }
}

//Intersection Observer to check when a section is within view or not which sets the style classes of each section
//based on whether or not the section is in view or not. The boundries of the rootMargin changes based on the screen size
let sectionScroll = new IntersectionObserver(function(
    sects
){
    sects.forEach(sect => {
        let secNum = sect.target.id.charAt(7);
        let navSec = document.getElementById("sec"+secNum).firstElementChild.classList;
        let sectCs = sect.target.classList;

        if(!sect.isIntersecting) {
             
            //Removes the navBar section highlight
            navSec.remove("sectionHover");

            //To take out the class when its no longer in view 
            //changes the section to be considered not in view of the View Port   
            sectCs.remove("your-active-class");
            sectCs.add("notInView");
            
        } else {
            //Adds the highlight CSS to the navBar section of the highlighted section
            navSec.add("sectionHover");
            
            //Removes the notInView class while adding the active class to the section in View Port
            sectCs.remove("notInView");
            sectCs.add("your-active-class")
        }
    });
}, secOptions);



//Listen for scroll events to know when to show or hide the navbar
window.addEventListener("scroll", function (event) {
    let sec1 = document.getElementById("section1");
    let sec1Coords = getOffset(sec1);

    topScroll(sec1Coords.top);

    //Show navbar unless stopping at a section
    nav_ul.className = "navShow";
    
	//Clear our timeout throughout the scroll
    window.clearTimeout(navDisplay);

	//Set a timeout to run after scrolling ends to know when to hide navbar
	navDisplay = setTimeout(function() {
        if (window.pageYOffset >= sec1Coords.top - 150) {
            nav_ul.className = "navHide";
        }
	}, 800);

}, false);



//Scrolls to the top when 'Top' button is clicked
topBtn.onclick = () => {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}

//Runs observer on the sections as well as add collapse event listens
sections.forEach(section=> {
    sectionScroll.observe(section);
    section.addEventListener("click", () => {
        if(section.classList.contains("collapsed")) {
            section.classList.remove("collapsed");
        } else {
            section.classList.add("collapsed");
        }
    })
});

//Runs the navbar
navBuild();