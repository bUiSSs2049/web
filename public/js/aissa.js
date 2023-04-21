
        // List of sentences
        var _CONTENT = [ 
            ".بالمجان ", 
            ".في3 أيام على الأكثر ",
            ".إلى أي مكان في المغرب "
        ];
        
        // Current sentence being processed
        var _PART = 0;
        
        // Character number of the current sentence being processed 
        var _PART_INDEX = 0;
        
        // Holds the handle returned from setInterval
        var _INTERVAL_VAL;
        
        // Element that holds the text
        var _ELEMENT = document.querySelectorAll("#text")[0];
        
        // Cursor element 
        var _CURSOR = document.querySelector("#cursor");
        
        // Implements typing effect
        function Type() { 
            // Get substring with 1 characater added
            var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
            _ELEMENT.innerHTML = text;
            _PART_INDEX++;
        
            // If full sentence has been displayed then start to delete the sentence after some time
            if(text === _CONTENT[_PART]) {
                // Hide the cursor
        
                clearInterval(_INTERVAL_VAL);
                setTimeout(function() {
                    _INTERVAL_VAL = setInterval(Delete, 50);
                }, 1000);
            }
        }
        
        // Implements deleting effect
        function Delete() {
            // Get substring with 1 characater deleted
            var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
            _ELEMENT.innerHTML = text;
            _PART_INDEX--;
        
            // If sentence has been deleted then start to display the next sentence
            if(text === '') {
                clearInterval(_INTERVAL_VAL);
        
                // If current sentence was last then display the first one, else move to the next
                if(_PART == (_CONTENT.length - 1))
                    _PART = 0;
                else
                    _PART++;
                
                _PART_INDEX = 0;
        
                // Start to display the next sentence after some time
                setTimeout(function() {
                    _INTERVAL_VAL = setInterval(Type, 100);
                }, 300);
            }
        }
        
        // Start the typing effect on load
        _INTERVAL_VAL = setInterval(Type, 90);




var ourString;
 var hhh;
 var hhh1;

if ( document.querySelector('.testmeeeeeee__') ) ourString = document.querySelector('.testmeeeeeee__').innerText
if ( document.querySelector('.deskk1 u') ) hhh = document.querySelector('.deskk1 u').innerText
if ( document.querySelector('.deskk2 u') ) hhh1 = document.querySelector('.deskk2 u').innerText

let ConvertStringToHTML = function (str) {
   let parser = new DOMParser();
   let doc = parser.parseFromString(str, 'text/html');
   return doc.body;
};
if ( document.querySelector('.testmeeeeeee__') )document.querySelector('.description').innerHTML = ConvertStringToHTML(ourString).outerHTML
if ( document.querySelector('.deskk1 u') )document.querySelector('.deskk1').innerHTML = ConvertStringToHTML(hhh).outerHTML
if ( document.querySelector('.deskk2 u') )document.querySelector('.deskk2').innerHTML = ConvertStringToHTML(hhh1).outerHTML

if ( document.querySelector('.cir') ) {
    if ( document.querySelector('.cir p').className !== 'g' ) {
        document.querySelector('.cir p').style.boxShadow = "0 0 0 4px "+document.querySelector('.cir p').id+", 0 0 0 5px #000"
        document.querySelector('.cir p').style.border = "none"
        document.querySelector('.cir p').className = 'chosen'
    }
    

    document.querySelectorAll('.cir').forEach(hhh => {
        hhh.querySelectorAll('p').forEach(p => {
            p.style.background = p.id
        });
    });
    document.querySelector('.cir').querySelectorAll('p').forEach(p => {
        p.style.background = p.id
        if (p.className !== 'g') {
            p.onclick = () => {
                document.querySelector('.cir').querySelectorAll('p').forEach(p1 => {
                    p1.style.boxShadow = ""
                    p1.style.border = "solid 1.5px"
                    p1.className = 'normal'
                });
                p.style.boxShadow = "0 0 0 4px "+p.id+", 0 0 0 5px #000"
                p.style.border = "none"
                p.className = 'chosen'
            }
        }
        
    });
}

if( document.querySelector('.price_cc') ) document.querySelector('.price_cc').value = document.querySelector('.price1').innerText

onclick = ()=>{
    if ( document.querySelector('.row .list-inline.pb-3') && document.querySelector('span.btn.btn-size.btn-secondary') ) {
        document.querySelector('.type_size').value = document.querySelector('span.btn.btn-size.btn-secondary').innerText
    }
    if ( document.querySelector('.list-inline .cir') ) {
        document.querySelector('.type_color').value = document.querySelector('.cir p.chosen').id
    }
    
    if( document.querySelector('.price_cc') ) document.querySelector('.price_cc').value = document.querySelector('.price1').innerText
    
}




