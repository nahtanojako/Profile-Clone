(function(){

  let navToggler = document.querySelector('.navbar-toggler');
  let navbarCollapse = document.querySelector('.navbar-collapse');

  function showNavbar() {
    navbarCollapse.classList.toggle('show')
  }

  navToggler.addEventListener('click', showNavbar)
})()


/* animated show navigation
--JS--
var box = document.getElementById("box");
var button = document.getElementById("button");
var expanded = true;

button.addEventListener('click', function() {
    if (expanded) {
        box.style.maxHeight = 0;
        expanded = false;
    } else {
        box.style.maxHeight = "";
        expanded = true;
    }
});

--CSS--
#box {
  margin-top: 20px;
  border: 1px solid black;
  background-color: #4f88ff;
  width: 200px;
  transition: max-height 0.25s linear;
  overflow: hidden;
}

--HTML--
<button id="button">Click</button>
<div id="box">
  Hello World<br>
  This is dynamic content<br>
  The actual height won't be known ahead of time
</div>
*/