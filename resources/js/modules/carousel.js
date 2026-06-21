import Siema from 'siema';

// Arrow buttons
//-------------------------------------------------------------------------------------
Siema.prototype.addNavHandlers = function (selector) {
  console.log(selector);
  let prev = selector.parentNode.querySelector('.carousel__prev');
  let next = selector.parentNode.querySelector('.carousel__next');
  console.log(prev);

  // event handlers on buttons
  prev.addEventListener('click', () => this.prev(this.perPage));
  next.addEventListener('click', () => this.next(this.perPage));
}

// Arrow buttons
//-------------------------------------------------------------------------------------
Siema.prototype.addArrows = function () {
  if (this.innerElements.length > this.perPage) {
    // make buttons & append them inside Siema's container
    this.prevArrow = document.createElement('div');
    this.nextArrow = document.createElement('div');
    this.prevArrow.classList.add('carousel__prev');
    this.nextArrow.classList.add('carousel__next');
    this.prevArrow.innerHTML = '<i class="icon icon-arrow-left-dark"></i>';
    this.nextArrow.innerHTML = '<i class="icon icon-arrow-right-dark"></i>';
    this.selector.parentNode.insertBefore(this.nextArrow, this.selector.nextSibling);
    this.selector.parentNode.insertBefore(this.prevArrow, this.selector.nextSibling);

    // event handlers on buttons
    this.prevArrow.addEventListener('click', () => this.prev(this.perPage));
    this.nextArrow.addEventListener('click', () => this.next(this.perPage));
  }
}

Siema.prototype.hideInactiveArrows = function () {
  if (this.nextArrow && this.prevArrow) {

    if ((this.currentSlide + this.perPage) === this.innerElements.length) {
      this.nextArrow.classList.add('is-hidden')
    } else {
      this.nextArrow.classList.remove('is-hidden')
    }

    if ((this.currentSlide) === 0) {
      this.prevArrow.classList.add('is-hidden')
    } else {
      this.prevArrow.classList.remove('is-hidden')
    }
  }
}

//// Pagination
////-------------------------------------------------------------------------------------

class CarouselPager {
  constructor(carousel, selector) {
    this.carousel = carousel;
    const pager = document.querySelector(selector)
    const item = '<div>⚫&#xFE0E;</div>';
    for (let i = 0; i < this.carousel.innerElements.length; i++) {
      pager.innerHTML += item;
    }
    this.pages = [].slice.call(pager.querySelectorAll("div"));
    this.pages.forEach((el, i) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        this.pages.forEach((p) => p.classList.remove('is-active'));
        this.carousel.goTo(i);
        el.classList.add('is-active');
      })
    })
    this.pages[0].classList.add('is-active')

  }//constructor
  update() {
    this.pages.forEach((el) => el.classList.remove('is-active'));
    this.pages[Math.round(this.carousel.currentSlide)].classList.add('is-active');
  }
}//CarouselPager


// Reinit on resize
//-------------------------------------------------------------------------------------
Siema.prototype.reinit = function (breakpoint = 0) {
  if (window.innerWidth >= breakpoint) {
    this.init()
  } else {
    this.destroy(true)
  }
}

document.addEventListener('DOMContentLoaded', function () {


  const home_categories = [].slice.call(document.querySelectorAll('.carousel-1-slide'));
  if (home_categories) {
    home_categories.forEach(selector => {
      const home_categories = new Siema({
        selector: selector.querySelector('.carousel__wrap'),
        duration: 200,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 200,
        loop: false,
        onInit: function () {
          //this.addArrows();
          this.addNavHandlers(selector);
        },
      })

      window.addEventListener('resize', function () {
        home_categories.reinit();
      })
    })// end loop
  }//end if

  const latest_stories = [].slice.call(document.querySelectorAll('.carousel-3-slide'));
  if (latest_stories) {
    latest_stories.forEach(selector => {
      const sel = selector.querySelector('.carousel__wrap');
      const latest_stories = new Siema({
        selector: sel,
        duration: 200,
        easing: 'ease-out',
        perPage: {0:1, 480:2, 768:3},
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 200,
        loop: false,
        onInit: function () {
          this.addNavHandlers(sel);
        },
      })

      window.addEventListener('resize', function () {
        latest_stories.reinit();
      })
    })// end loop
  }//end if

}) //DOMContentLoaded
