
$(document).ready(function()
{
    $(".abc").click(function()
    {
        $(this).hide();
    });
	
	$("button.submit").click(function()
	{
		$(this).hide();
	});
	
	$("button.click").click(function()
	{
		$("p.hello").hide();
	});
//focus 
    $("input").focus(function(){
        $(this).css("background-color", "#cccccc");
    });
//blur
    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
	});
//fading method
    $("button.fadeout").click(function(){
    	$("#div1").fadeOut(1000);
    	$("#div2").fadeOut(2000);
    	$("#div3").fadeOut(3000);
    });
    $("button.bringback").click(function(){
    	$("#div1").fadeIn(1000);
    	$("#div2").fadeIn(2000);
    	$("#div3").fadeIn(3000);
    });
    $("button.play").click(function(){
    	$("#div1").fadeToggle(1000);
    	$("#div2").fadeToggle(2000);
    	$("#div3").fadeToggle(3000);
    });

        $("#get").click(function()
        {
        var first_name = $("#name").val();
        $("#fname").text(first_name);     	
        });
});