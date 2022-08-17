var plusButton = $('.addButton');
var inputField = $('.inputField');
var listContainer = $('.theList');
var error = $('#error');

function addNewLine (){
    if ($(inputField).val.length < 1){
        $(error).addClass('wrongEntry');
        return false;
    } else {
        $(error).removeClass('wrongEntry');
        var newLine = document.createElement('p');
        var newText = document.createElement('li');
        $(newLine).addClass('newLine')
        var textVal = inputField.val();
        $(newText).text(textVal);
        listContainer.append(newLine);
        newLine.append(newText);
          
        var buttonDiv = document.createElement('div');
        $(buttonDiv).addClass('buttonDiv');
        $(buttonDiv).appendTo(newLine);

        var minusButton = document.createElement('button');
        $(minusButton).addClass('minusButton');
        $(minusButton).text('-');
        $(minusButton).appendTo(buttonDiv);

        $(minusButton).on('click', function(){
            $(newLine).remove();
        });

        var checkButton = document.createElement('button');
        $(checkButton).addClass('checkButton');
        $(checkButton).text('Check');
        $(checkButton).appendTo(buttonDiv);
        
        $(checkButton).on('click', function(check){
            var checkedList = $('.checkedList');
            check.checked = check.checkedList;
                if (check.checkedList = true) {
                    $(checkButton).text('Checked');
                    $(newLine).appendTo(checkedList);
                }
        });
    };
    inputField.val('');
    inputField.focus();
};

$(plusButton).on('click', addNewLine);

inputField.on('keyup', function(e){
    if(e.keyCode == 13){
        addNewLine();
    }
});