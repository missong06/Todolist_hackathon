// links
;(function(global){
    'use strict';
    var addLink_btn = document.querySelector('.btn_addLink');
    var addLink_box = document.querySelector('.new_site');
    var site_list = document.querySelector('.site_list');
    addLink_btn.addEventListener('click', function(){
        var hasHide = addLink_box.classList.contains('hide');
        !hasHide ? addLink_box.classList.add('hide') : addLink_box.classList.remove('hide');
    });

    var new_site_name = document.querySelector('.new_site_title');
    var new_site_url = document.querySelector('.new_site_url');
    // var new_name_value = new_site_name.value;
    new_site_name.addEventListener('keydown', function(key){
        if(key.which === 13){            
            var valueChk = this.value.trim();
            if(valueChk === ''){
                this.focus();
            }else{
                new_site_url.focus();
            }
        }
    });
    new_site_url.addEventListener('keydown', function(key){
        if(key.which === 13){            
            var valueChk = this.value.trim();
            if(valueChk === ''){
                this.focus();
            }else{
                new_link_list();
                new_site_url.value = '';
                new_site_name.value = '';
                new_site_name.focus();
            }
        }
    });

    
    function new_link_list(){     
        var list = document.createElement('li');
        var anchor = document.createElement('a');
        anchor.setAttribute('href', new_site_url.value);
        var title = document.createTextNode(new_site_name.value);
        var btn_delete = document.createElement('button');
        btn_delete.setAttribute('type','button');
        btn_delete.setAttribute('class','btn_delete');
        var btn_text = document.createTextNode('X');

        list.appendChild(anchor);
        anchor.append(title);
        list.appendChild(btn_delete);
        btn_delete.append(btn_text);
        site_list.appendChild(list);    
    }

    

})(window);