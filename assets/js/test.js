'use strict';
const { expect } = require('chai');
const {
  toggleNavbar,
  throwErrorOnClick,
  toggleNavbarOnLinkClick,
  toggleHeaderAndGoTopBtnOnScroll
} = require('./script'); 

describe('Navbar functionality', () => {
  let navbar;
  let overlay;
  
  beforeEach(() => {
    navbar = document.createElement('div');
    navbar.classList.add('navbar');
    overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(navbar);
    document.body.appendChild(overlay);
  });

  afterEach(() => {
    document.body.removeChild(navbar);
    document.body.removeChild(overlay);
  });

  it('should toggle navbar and overlay when clicking navOpenBtn and navCloseBtn', () => {
    const navOpenBtn = document.createElement('button');
    navOpenBtn.setAttribute('data-nav-open-btn', '');
    const navCloseBtn = document.createElement('button');
    navCloseBtn.setAttribute('data-nav-close-btn', '');
    document.body.appendChild(navOpenBtn);
    document.body.appendChild(navCloseBtn);

    toggleNavbar();

    expect(navbar.classList.contains('active')).to.be.true;
    expect(overlay.classList.contains('active')).to.be.true;

    toggleNavbar();

    expect(navbar.classList.contains('active')).to.be.false;
    expect(overlay.classList.contains('active')).to.be.false;

    document.body.removeChild(navOpenBtn);
    document.body.removeChild(navCloseBtn);
  });

  it('should throw an error when clicking on card buttons', () => {
    const cardBtn = document.createElement('button');
    cardBtn.classList.add('card-btn');
    document.body.appendChild(cardBtn);

    expect(throwErrorOnClick).to.throw(Error);

    document.body.removeChild(cardBtn);
  });

  it('should toggle navbar and overlay when clicking on navbar links', () => {
    const navbarLink = document.createElement('a');
    navbarLink.setAttribute('data-navbar-link', '');
    document.body.appendChild(navbarLink);

    toggleNavbarOnLinkClick();

    expect(navbar.classList.contains('active')).to.be.true;
    expect(overlay.classList.contains('active')).to.be.true;

    toggleNavbarOnLinkClick();

    expect(navbar.classList.contains('active')).to.be.false;
    expect(overlay.classList.contains('active')).to.be.false;

    document.body.removeChild(navbarLink);
  });
});

describe('Header and go-top-btn functionality', () => {
  let header;
  let goTopBtn;

  beforeEach(() => {
    header = document.createElement('div');
    header.setAttribute('data-header', '');
    goTopBtn = document.createElement('button');
    goTopBtn.setAttribute('data-go-top', '');
    document.body.appendChild(header);
    document.body.appendChild(goTopBtn);
  });

  afterEach(() => {
    document.body.removeChild(header);
    document.body.removeChild(goTopBtn);
  });

  it('should toggle header and go-top-btn active class when scrolling to 400 pixels', () => {
    toggleHeaderAndGoTopBtnOnScroll();

    window.scrollY = 300;
    window.dispatchEvent(new Event('scroll'));

    expect(header.classList.contains('active')).to.be.false;
    expect(goTopBtn.classList.contains('active')).to.be.false;

    window.scrollY = 500;
    window.dispatchEvent(new Event('scroll'));

    expect(header.classList.contains('active')).to.be.true;
    expect(goTopBtn.classList.contains('active')).to.be.true;
  });
});
