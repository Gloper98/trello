window.addEventListener('load', function(event) {
   
    var target =document.getElementById('target_first');
    var father = document.getElementById('feed-target');
    var target_2 =document.getElementById('create');
    var add_list =document.getElementById('add-list');
    var save_button=document.getElementById('save-target');
    var input = document.getElementById('insert-name-input');
    var paragraph =document.getElementById('editable-paragraph');
    var table = document.getElementById('new-table-tag');
    var button_adding = document.getElementById('button-adding');
    var editable_table = document.getElementById('editable-table-pin');
    var editable_paragraph =document.getElementById('editable-paragraph2');
    var cln = table.cloneNode(true);
    var save_button_2 =document.getElementById('save-button');

    
    
    add_list.addEventListener('click', function (event){
         target.setAttribute('class','inactive');
        target_2.setAttribute('class','active form-create');
    })
    
    save_button.addEventListener('click', function(event){
        table.setAttribute('class','active new-table');
         var name = document.createTextNode(input.innerHTML);
        paragraph.textContent=input.value;
    })
    
    button_adding.addEventListener('click', function(event){
        table.setAttribute('class','inactive new-table');
        editable_paragraph.textContent=input.value;
        editable_table.setAttribute('class', 'active editable-table');
    })
    
    save_button_2.addEventListener('click', function(event){
        var new_task = document.createElement('p');
        new_task.setAttribute('class','styles-task');
        
    })
})