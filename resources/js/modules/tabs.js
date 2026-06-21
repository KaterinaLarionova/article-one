document.addEventListener("DOMContentLoaded", function(event) {

    const pagers  = [].slice.call(document.querySelectorAll(".tabs-sidebar"));
    if (pagers.length) {
        pagers.forEach(pager => {
            const tab_element = [].slice.call(pager.querySelectorAll('.tabs__nav a'));
            const pages = [].slice.call(pager.querySelectorAll('.tabs__item'));
            pages.slice(1, pages.length).forEach(page => {
                page.classList.add('is-invisible');
            })

            tab_element.forEach( (el, i) => {
                el.addEventListener('click', function(e){
                    e.preventDefault();

                    //reset
                    tab_element.forEach( el => el.classList.remove('is-active') )
                    pages.forEach( pg => pg.classList.add('is-invisible') )

                    el.classList.add('is-active');
                    if (pages[i]) {
                        pages[i].classList.remove('is-invisible');
                    }
                })
            })
        })
    }
})