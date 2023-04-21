


  if ( document.querySelector(".jsFilter") ) {
    document.querySelector(".jsFilter").addEventListener("click", function () {
      document.querySelector(".filter-menu").classList.toggle("active");
    });
  }
  if ( document.querySelector(".grid") ) {
    document.querySelector(".grid").addEventListener("click", function () {
      document.querySelector(".list").classList.remove("active");
      document.querySelector(".grid").classList.add("active");
      document.querySelector(".products-area-wrapper").classList.add("gridView");
      document
        .querySelector(".products-area-wrapper")
        .classList.remove("tableView");
    });
  }
  if ( document.querySelector(".list") ) {
    document.querySelector(".list").addEventListener("click", function () {
      document.querySelector(".list").classList.add("active");
      document.querySelector(".grid").classList.remove("active");
      document.querySelector(".products-area-wrapper").classList.remove("gridView");
      document.querySelector(".products-area-wrapper").classList.add("tableView");
    });
  }
  
if ( document.querySelector('.mode-switch') ) {
  var modeSwitch = document.querySelector('.mode-switch');
  modeSwitch.addEventListener('click', function () {                      document.documentElement.classList.toggle('light');
   modeSwitch.classList.toggle('active');
  });
}


if (document.querySelector('.app-content-headerButton')){


document.querySelector('.app-content-headerButton').onclick = ()=>{
  document.getElementById('id01').style.display='block'
}
document.querySelectorAll('.visit').forEach((vs)=>{
  vs.onclick = ()=>{
    document.getElementById('ggg').style.display='block'
    document.getElementById('gggg').action = vs.querySelector('svg').id
  }
})

}

document.querySelector('.search-bar').onkeyup=()=>{searching()}

function searching() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.querySelector('.search-bar');
    filter = input.value.toUpperCase();
    ul = document.querySelector(".products-area-wrapper.tableView");
    li = ul.querySelectorAll(".products-row");
    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


