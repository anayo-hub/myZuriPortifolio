document.querySelector('.nav-btn').addEventListener('click', showNav);

function showNav(){
    document.querySelector('.nav-links').classList.toggle('show_links');
}

const newBanner = document.createElement('h1');

//add class
newBanner.className = 'banner_title';

//new textNode
newBanner.appendChild(document.createTextNode("I\'m anayo crescent o"));

//getting my old name;
const myHtmlName = document.querySelector('.banner_title');

//getting parent
const oldSelf = document.querySelector('.banner_container');

//replace
oldSelf.replaceChild(newBanner, myHtmlName);

console.log(newBanner);