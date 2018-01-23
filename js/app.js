$(document).foundation()

$(document).ready(function(){
$("#opcion").change(function(){
  $('.comidas').css("display","block");
  var tipo= $("#opcion option:selected").val();
  $('.comidas').not("."+tipo).css("display","none");
});
$(".modalcomida").click(function(){
  var titulo=$(this).attr("data-titulo");
  $("#elTitulo").html(titulo);
});















})
