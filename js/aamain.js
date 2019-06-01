function helloworld() {
	var dam = prompt("votre nom")
	alert("hello" + " " + dam)
 }
 
 $(document).ready(function(){
	/**
	*manipulation css
	*
	* selecteur.css("proprité dia ts maints atao objet.css({proprité":"valeur"})
	*/
	// secteur élément
	$("p").css("background","red")
	//selecteur class
	
	 $("#dam").css("background","violet")
	 
	 //selecteur id
	 $("dam").css({
			"color":"white",
			"background":"blue",
			"font-size":"50px"
	 
	})
	
	$(".geeka").click(function () {
		
		var membres = prompt("entrer votre nom")
		
		$("#list").append("<li>" + membres +"</li>")
		//$("#list").prepend("<li>" + membres +"</li>")
	})
	
	$(document).on("click",".geekal",function (){
		$("body").css("background","black")
	})
 })