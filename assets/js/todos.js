// Check-off specific items by clicking them li item
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// click on 'x' to delete to-do item
$("ul").on("click", "span", function(event){
    // remove li parent containing span that was clicked
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    // prevents event bubbling on parent listeners
    event.stopPropagation();
});

// add new item when text is entered into input box
$("input[type='text']").keypress(function(event){
    if (event.which === 13){
        // grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        // create new 'li' and add to 'ul'
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

// toggle todo input field when clicking plus icon
$("#toggleTodo").click(function(){
    $("input[type='text']").fadeToggle();
});