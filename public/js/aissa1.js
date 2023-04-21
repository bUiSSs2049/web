

var imgs = document.querySelectorAll('.imgs')
var files = document.querySelectorAll('.files')
for (let i = 0; i < imgs.length; i++) {
    
    imgs[i].onchange = () => {
        if (imgs[i].value != "") {
            files[i].innerText = imgs[i].value
        }
        imgs.forEach(img => {
            if (imgs[i].value == img.value) {
                
                files[i]
            }
        });
    }
}



//document.querySelectorAll('.files')
var isp=true
document.querySelector('#isp').onclick = () => {
    isp = !isp
    if (isp) {
        document.querySelector('.offline').className = "online"
        document.querySelector('#isp input').value = "true"
    }else {
        document.querySelector('.online').className = "offline"
        document.querySelector('#isp input').value = "false"
    }
}



{
var colorPalette = ['000000', 'FF9966', '6699FF', '99FF66', 'CC0000', '00CC00', '0000CC', '333333', '0066FF', 'FFFFFF'];
var forePalette = $('.fore-palette');
var backPalette = $('.back-palette');

for (var i = 0; i < colorPalette.length; i++) {
  forePalette.append('<a href="#" data-command="forecolor" data-value="' + '#' + colorPalette[i] + '" style="background-color:' + '#' + colorPalette[i] + ';" class="palette-item"></a>');
  backPalette.append('<a href="#" data-command="backcolor" data-value="' + '#' + colorPalette[i] + '" style="background-color:' + '#' + colorPalette[i] + ';" class="palette-item"></a>');
}

$('.toolbar a').click(function(e) {
  var command = $(this).data('command');
  if (command == 'h1' || command == 'h2' || command == 'p') {
    document.execCommand('formatBlock', false, command);
  }
  if (command == 'forecolor' || command == 'backcolor') {
    document.execCommand($(this).data('command'), false, $(this).data('value'));
  }
    if (command == 'createlink' || command == 'insertimage') {
  url = prompt('Enter the link here: ','http:\/\/'); document.execCommand($(this).data('command'), false, url);
  }
  else document.execCommand($(this).data('command'), false, null);
});
}
document.querySelector('#description').value = document.querySelector('#editor').innerHTML

// import
if ( document.querySelector('.headEdit').className != "headEdit green" ) {

    // tags
    h()
function h(){

    var input_lifih_tags = document.querySelector('#what_tags_are_there')
    var actualTags = input_lifih_tags.value.split(',')
    var tags_dyal_db = document.querySelectorAll('#myUL a')

    var toTags = document.querySelector('.whereTags')
    for (let tj = 0; tj < actualTags.length; tj++) {
        toTags.innerHTML += "<h class='tag'>"+ actualTags[tj] +"</h>"
    }

    actualTags.forEach((actualTag)=>{
        tags_dyal_db.forEach((tag_dyal_db)=>{
            if ( actualTag == tag_dyal_db.innerText ) {
                tag_dyal_db.className = "header"
            }
        })
    })
    tagDff()
}
    // tags

// description
var ourString2 =""
{
    ourString2 = document.querySelector('.clrss').innerText
    var aissa123 = ""
    for (let h = 0; h < ourString2.length-1; h++) {
        aissa123 += ourString2[h]
    }
    ourString2 = aissa123
    let ourString3 = document.querySelector('#editor').innerText

    let ConvertStringToHTML = (str) => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(str, 'text/html');
    return doc.body;
    };
    document.querySelector('#editor').innerHTML = ConvertStringToHTML(ourString3).outerHTML
}
// description




// import size
{
        var szszszsz = document.querySelector('.sizes').innerText
    if ( szszszsz !== " aissaoulkhir__ " && szszszsz.split(" aissaoulkhir__ ").length == 2 )
    {
        document.querySelector('.sizes').innerText = ""
        var text_it_out = szszszsz.split(" aissaoulkhir__ ")
        if ( text_it_out.length == 2 ) {
            var sizes_Nmm_from_db = text_it_out[0].split('/_aissa,aissa_/')
            var sizes_Prc_from_db = text_it_out[1].split('/_aissa,aissa_/')
            for (let n = 0; n < sizes_Nmm_from_db.length; n++) {
                if ( sizes_Nmm_from_db[n] !== "" )
                {
                    document.querySelector('.sizes').innerHTML += `
                        <div class="size__">
                            <div class="sz_nm">${sizes_Nmm_from_db[n]}</div>
                            <div class="sz_prc" style="display: none;">${sizes_Prc_from_db[n]}</div>
                            <div class="edit_sz">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1eff00" class="bi bi-brush-fill" viewBox="0 0 16 16">
                                    <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z"></path>
                                </svg>
                            </div>
                        </div>
                    `
                }
            }
        }
    }else{
        document.querySelector('.sizes').innerText = "nothing here"
    }
}
// import size




// import color
{
    if ( ourString2 !== '' ) {
        var colors_from_db = ourString2.split(',')
    
        document.querySelector('.clrss').innerHTML = ""
        for (let c = 0; c < colors_from_db.length; c++) {
            if ( colors_from_db[c][0] == "#" ) {
            
                document.querySelector('.clrss').innerHTML += `
    
                <label class="clr" id="${colors_from_db[c]}" style="background: ${colors_from_db[c]}">
                    <input type="color" style="display: none" value="${colors_from_db[c]}">
                </label>
                `
                var clrss = document.querySelectorAll('.clr')
                clrss.forEach(clr => {
                    clr.querySelector('input').onchange = ()=>{
                        clr.id = clr.querySelector('input').value
                        clr.style.background = clr.id
                    }
                    clr.oncontextmenu = ()=>{ clr.remove();return false }
                    clr.ondblclick = ()=>{ clr.remove() }
                });
            }
        }
    }
}
// import color





}
// import



// ______________________ update
onclick = ()=>{
    document.querySelector('#description').value = document.querySelector('#editor').innerHTML

// update sizeee

    document.querySelector('#sizes__input').value = ""

    var sz_nm = $('.sz_nm')
    var sz_prc = $('.sz_prc')
    for (let h = 0; h < sz_nm.length; h++) {
        document.querySelector('#sizes__input').value += sz_nm[h].innerText + '/_aissa,aissa_/'
    }
    if ( sz_nm.length !== 0 ) {
        document.querySelector('#sizes__input').value += " aissaoulkhir__ "
        for (let h = 0; h < sz_prc.length; h++) {
            document.querySelector('#sizes__input').value += sz_prc[h].innerText + '/_aissa,aissa_/'
        }
    }
    

// update col;or
    
    document.querySelector('#colors__input').value = ""

    var clr_ = $('.clr')
    for (let h = 0; h < clr_.length; h++) {
        document.querySelector('#colors__input').value += clr_[h].id + ','
    }
}

// __________discount___________
{
    var slider = document.getElementById("myRange");
    slider.value = document.getElementById("discount").value
    var output = document.getElementById("demo");
    var omega = document.getElementById("omega");
    var output1 = document.getElementById("demo1");
    var price = document.getElementById("price");
    output.innerHTML = slider.value;


    output.innerHTML = parseInt(slider.value * price.value /10) /10 + "dh" ;
    output1.innerHTML = parseInt(slider.value) + "%" ;
    omega.innerHTML = parseInt(price.value*10)/10;
    if ( slider.value == 0 ) {
        output.style.display = "none"
        omega.style.display = "none"
        output1.style.display = "none"
    }else{
        output.style.display = "initial"
        omega.style.display = "initial"
        output1.style.display = "initial"
    }
}

// ______________________ update























/// -------------color_____________
c()
function c(){
    var clrss = document.querySelectorAll('.clr')
    clrss.forEach(clr => {
        clr.style.background = clr.id
        clr.firstChild.value = clr.id
        clr.firstChild.onchange = ()=>{
            clr.id = clr.firstChild.value
            clr.style.background = clr.id
        }
        clr.oncontextmenu = ()=>{ clr.remove();return false }
        clr.ondblclick = ()=>{ clr.remove() }

    });
document.querySelector('#add_color').onclick = ()=>{
    document.querySelector('.clrss').innerHTML += ''
    +'<label class="clr" id="'+ document.querySelector('#color').value +'">'
    +'<input type="color" style="display: none"></label>'
    var clrss = document.querySelectorAll('.clr')
    clrss.forEach(clr => {
        clr.style.background = clr.id
        clr.firstChild.value = clr.id
        clr.firstChild.onchange = ()=>{
            clr.id = clr.firstChild.value
            clr.style.background = clr.id
        }
        clr.oncontextmenu = ()=>{ clr.remove();return false }
        clr.ondblclick = ()=>{ clr.remove() }

    });

}
}


/// -------------size _____________

{

    var size__ = document.querySelectorAll('.size__')
    size__.forEach((size_) => {
        size_.oncontextmenu = ()=>{ size_.remove();  return false }
        size_.ondblclick = ()=>{ size_.remove();  }
    });
    var dts = document.querySelectorAll('.edit_sz')
    var sz_nm = document.querySelectorAll('.sz_nm')
    var sz_prc = document.querySelectorAll('.sz_prc')
    
    for (let u = 0; u < dts.length; u++) {
        dts[u].onclick = () => {
            var can1 = sz_nm[u].innerText
            var can2 = sz_prc[u].innerText


            sz_nm[u].innerText = prompt('new name')
            sz_prc[u].innerText = parseFloat(prompt('new prc')) + 'dh'

            if ( sz_nm[u].innerText == "" ) {
                sz_nm[u].innerText = can1
            }
            if ( sz_prc[u].innerText == "NaNdh" ) {
                sz_prc[u].innerText = can2
            }


        }
    }
document.querySelector('#add_size').onclick = ()=>{


    if ( document.querySelector('#size').value == '' || document.querySelector('#size_price').value < 0 ) {
        return
    }

    if ( document.querySelector('.sizes').innerText == 'nothing here' ) {
        document.querySelector('.sizes').innerHTML = ''
    }

    document.querySelector('.sizes').innerHTML += 
    `
    <div class="size__">
        <div class="sz_nm">${ document.querySelector('#size').value }</div>
        <div class="sz_prc">${ document.querySelector('#size_price').value }dh</div>
        <div class="edit_sz">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1eff00" class="bi bi-brush-fill" viewBox="0 0 16 16">
                <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z"/>
            </svg>
        </div>
    </div>
    `
    var dts = document.querySelectorAll('.edit_sz')
    var sz_nm = document.querySelectorAll('.sz_nm')
    var sz_prc = document.querySelectorAll('.sz_prc')

    for (let k = 0; k < sz_prc.length; k++) {
        if ( sz_prc[k].innerText == "0dh" ) {
            sz_prc[k].style.display = "none"
        }
    }
    for (let k = 0; k < sz_nm.length; k++) {
        sz_nm[k].innerText = sz_nm[k].innerHTML
    }
    
    
    for (let u = 0; u < dts.length; u++) {
        dts[u].onclick = () => {
            var can1 = sz_nm[u].innerText
            var can2 = sz_prc[u].innerText


            sz_nm[u].innerText = prompt('new name')
            sz_prc[u].innerText = parseFloat(prompt('new prc')) + 'dh'

            if ( sz_nm[u].innerText == "" ) {
                sz_nm[u].innerText = can1
            }
            if ( sz_prc[u].innerText == "NaNdh" ) {
                sz_prc[u].innerText = can2
            }

            for (let k = 0; k < sz_prc.length; k++) {
                if ( sz_prc[k].innerText == "0dh" ) {
                    sz_prc[k].style.display = "none"
                }
            }

        }
    }
    
    var size__ = document.querySelectorAll('.size__')
    size__.forEach((size_) => {
        size_.oncontextmenu = ()=>{ size_.remove();  return false }
        size_.ondblclick = ()=>{ size_.remove();  }
    });

}


}







// -----------tags _______
tagDff()
function tagDff(){
        // searcch

document.querySelector('#myInput').onkeyup=()=>{myFunction()}

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.querySelectorAll("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
        // searcch





var tags = document.querySelectorAll('.tags a')
tags.forEach((tag)=>{
    tag.onclick = ()=>{
        if ( tag.className == 'header' ) {
            tag.className = ''
        } else {
            tag.className = 'header'
        }
        var tags_chosen = document.querySelectorAll('.tags a.header')
        document.querySelector('.whereTags').innerHTML = ""
        for (let all = 0; all < tags_chosen.length; all++) {
            document.querySelector('.whereTags').innerHTML += `<h class="tag">${tags_chosen[all].innerText}</h>`
        }


        var tags_really = document.querySelectorAll('.tag')
        tags_really.forEach((tgg)=>{
            tgg.ondblclick = ()=>{
                tags_chosen.forEach((chosen)=>{
                    if ( chosen.innerText == tgg.innerText ) {
                        chosen.className = ""
                    }
                })
                tgg.remove()
                memorise() 
            }
        })
        memorise() 
    }
})
var what_tags = document.querySelector('#what_tags_are_there')

function memorise(){
    what_tags.value = ""
    var tags_really = document.querySelectorAll('.tag')
    for (let tj = 0; tj < tags_really.length; tj++) {
        what_tags.value += tags_really[tj].innerText + ","
    }
    var ausa = ""
    for (let ex = 0; ex < what_tags.value.length - 1; ex++) {
        ausa += what_tags.value[ex]
    }
    what_tags.value = ausa
}
}



// -----------tags _______







// __________discount___________
{
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    var omega = document.getElementById("omega");
    var output1 = document.getElementById("demo1");
    var price = document.getElementById("price");
    output.innerHTML = slider.value;


    output.style.display = "none"
    omega.style.display = "none"
    output1.style.display = "none"


    slider.oninput = function() {
        output.innerHTML = parseInt(this.value * price.value /10) /10 + "dh" ;
        output1.innerHTML = parseInt(this.value) + "%";
        omega.innerHTML = parseInt(price.value*10)/10;
        if ( this.value == 0 ) {
            output.style.display = "none"
            omega.style.display = "none"
            output1.style.display = "none"
        }else{
            output.style.display = "initial"
            omega.style.display = "initial"
            output1.style.display = "initial"
        }
        document.querySelector("#discount").value = parseInt(slider.value)
    }
}
// __________discount___________



