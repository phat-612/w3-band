// Bắt đầu: show menu header
// đóng/mở menu
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var checkOC = header.clientHeight;
mobileMenu.onclick = function(){
    var menuClosed = header.clientHeight == checkOC;
    if (menuClosed) {
        header.style.height = 'auto';
    } else{
        header.style = 'null';
    }
}
// đóng menu khi click nav
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function(event){
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();
        }else{
            header.style = 'null';
        }
    }
} 

// Kết thúc: show menu header




// Bắt đầu: mở cửa sổ buy ticket
const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');
function showBuyTickets(){
    modal.classList.add('open');
}
function hideBuyTickets(){
    modal.classList.remove('open');
}

for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTickets);
}
modalClose.addEventListener('click', hideBuyTickets);
modal.addEventListener('click', hideBuyTickets);
modalContainer.addEventListener('click', function(event){
    event.stopPropagation();
})
// Kết thúc: mở cửa sổ buy ticket