document.getElementById('shippingMethod').addEventListener('submit', actions);
function actions(event){
  event.preventDefault();
  var method = document.getElementById('shippingMethod').querySelectorAll('input[name="r_method"]');
  for (var i = 0; i < method.length; i++){
  	if(method[i].checked == true){
    	alert(method[i].value)
    }
  }
}