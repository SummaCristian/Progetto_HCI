const stickySection = document.querySelector('.sticky');
const scrollSections = stickySection.querySelectorAll('.scroll_section');
const offsetTop = stickySection.parentElement.offsetTop;

window.addEventListener('scroll', (e) => {
    transform(stickySection);
})

function transform() {
    let sectionTitleHeigh = window.innerWidth > 479 ? 211 : 178;
    var percentage = ((window.scrollY - offsetTop) / (795 - sectionTitleHeigh)) * 100;
    percentage = percentage < 0 ? 0 : percentage > 500 ? 500 : percentage;

    for(let i = 0; i < scrollSections.length; i++) {
        let percentageForSection = i == 0 ? 100 : (percentage - 100*(i) < -100 ? -100 : percentage - 100*(i) > 0 ? 0 : percentage - 100*(i)) + 100;
        if (window.innerWidth > 479) {
            scrollSections[i].style.transform = `translate3d(calc(100vw - ${percentageForSection}vw), calc((795px - ${sectionTitleHeigh}px)*${i} + (${-(percentage)} / 100)*(795px - ${sectionTitleHeigh}px)), 0)`;
        } else {
            scrollSections[i].style.transform = `translate3d(calc(100vw - ${percentageForSection}vw), calc((795px - ${sectionTitleHeigh}px)*${i} + (${-(percentage)} / 100)*(795px - ${sectionTitleHeigh}px)), 0)`;
        }
    }
}

function returnToBegin() {
    window.scroll("0px", "0px");
}

function toggleShowMenu(section) {
    const x = document.querySelector('.burger-symbol');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    if (x.classList != "burger-symbol change" && section.classList != "logo-link") {
        body.style = `overflow: hidden`;
        overlay.style = `display: inline; position: fixed; background-color: black; width: 100%; height: 100%; padding: calc(1.5rem + 80px) 0 0 34px; z-index: 1;`;
    } else {
        body.style = `overflow: scroll`;
        overlay.style = `display: none;`;
    }

    if (section.classList != "logo-link" || (section.classList == "logo-link" && x.classList == "burger-symbol change")) {
        x.classList.toggle("change");
    }
}