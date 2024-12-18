const stickySection = document.querySelector('.sticky');
const offsetTop = stickySection.parentElement.offsetTop;
const scrollSections = stickySection.querySelectorAll('.scroll_section');

window.addEventListener('scroll', (e) => {
    transform(stickySection);
})

function transform() {
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100 / 1.5;
    percentage = percentage < 0 ? 0 : percentage > (window.innerWidth > 479 ? 914 : 386) ? (window.innerWidth > 479 ? 914 : 386) : percentage;

    if (window.innerWidth > 479) {
        for(let i = 0; i < scrollSections.length; i++) {
            scrollSections[i].style.transform = `translate3d(calc(100vw*${i} + ${-(percentage)}vh), 0, 0)`;
        }
    } else {
        for(let i = 0; i < scrollSections.length; i++) {
            scrollSections[i].style.transform = `translate3d(0, calc((100vh - 1.5rem - 80px - 4rem - 20px)*${i} + ${-(percentage)}vh), 0)`;
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

/* if window.maxWidth <= "479px" {
    var d = document.querySelectorAll('.paragraph'), i, w, width, height;

    for(i = 0; i < d.length; i++) {
        width = d[i].offsetWidth;
        height = d[i].offsetHeight;

        for (w = width; w; w--) {
            d[i].style.width = w + 'px';
            if (d[i].offsetHeight !== height) break;
        }
    
        if (w < d[i].scrollWidth) {
            d[i].style.width = d[i].style.maxWidth = d[i].scrollWidth + 'px';
        } else {
            d[i].style.width = (w + 1) + 'px';
        }
    }
} */