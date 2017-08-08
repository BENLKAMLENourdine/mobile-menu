//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation

//create a select and append to menu
var $select = $('<select></select>');
$("#menu").append($select);
//cycle over menu link 
$("#menu a").each(function(){
    var $ancor = $(this);
    //create an option
    var $option = $('<option></option>');
    if($ancor.parent().hasClass("selected")){
        $option.prop("selected",true);
    }
    $option.val($ancor.attr("href"));
    //option's value is the href
    $option.text($ancor.text());
    //option's value is the href
    $select.append($option);
    //option's value is the href
});

//var $button = $('<button>Go</button>');
//$("#menu").append($button);
//$button.click(function(){
//   window.location = $select.val(); 
//});

$select.change(function(){
    window.location = $select.val();
});
    






