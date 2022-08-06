const navHeader = document.querySelector('.header-menu__nav');
const navMenu = document.querySelector('.menu-main-nav-sidebar__list');
const activeMenu = document.querySelector('.menu-main-nav-sidebar__item_active');
const activeHeader = document.querySelector('.header-menu__link_active');
const burger = document.querySelector('.header-menu-container');
const burgerBtn = document.querySelector('.header-menu__button');

burgerBtn.addEventListener('click', function(){
    if(burger.classList.contains('header-menu-container_closed')){
        openBurger();
    } else {
        closeBurger();
    }
});

function mouseNavItemHover(active, classOfActiveEl, nav){

    nav.onmouseover = function(){
       active.classList.remove(classOfActiveEl)
    }
    nav.onmouseout = function(){
       active.classList.add(classOfActiveEl);
    }
}

function openBurger(){
    burgerBtn.classList.add('header-menu__button_active')
    burger.classList.remove('header-menu-container_closed');
    burger.classList.add('header-menu-container_opened');
    const timerId = setTimeout(() => {
        if (burger.classList.contains('header-menu-container_opened') && burger.clientHeight > 300){
            burger.children[0].classList.remove('header-menu__nav_invisible');
            burger.children[1].classList.remove('header-menu__shopping-basket_invisible');
        } else {
            clearTimeout(timerId);
        }
    }, 600);
}

function closeBurger(){
    burger.children[0].classList.add('header-menu__nav_invisible')
    burger.children[1].classList.add('header-menu__shopping-basket_invisible')
    burgerBtn.classList.remove('header-menu__button_active')
    burger.classList.remove('header-menu-container_opened');
    burger.classList.add('header-menu-container_closed');
}

mouseNavItemHover(activeHeader, "header-menu__link_active", navHeader);
mouseNavItemHover(activeMenu, 'menu-main-nav-sidebar__item_active', navMenu);

