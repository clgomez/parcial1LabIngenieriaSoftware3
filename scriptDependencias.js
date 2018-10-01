var datos;
var deptos;
var pos=0;

function ajax(metodos, url) {
	var xmlhttp = new XMLHttpRequest();
	var respuesta = '';
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			datos=JSON.parse(this.responseText);

			//alert(datos.dependencia[1].nombre)
			crearDependencias(datos)
		}
	};
	xmlhttp.open(metodos, url, true);
	xmlhttp.send();
	return respuesta;
}

ajax('GET', './dependencias.php');


function crearDependencias(datos){
	var html='';
	//html+='<span>Seleccione la dependencia</span>';
	html+='<select id="valor_dependencia" onchange="verDepto()">';
    html+='<option value"0"> --Seleccione--</option>';
	for(var i=0; i < datos.dependencia.length; i++){
		html+='<option value="'+datos.dependencia[i].id+'">'+datos.dependencia[i].nombre+'</option>';
	}
    html+='</select>';
	document.querySelector('.dependencias').innerHTML = html;
}

function verDepto(){
	var id=document.querySelector('#valor_dependencia').value;
	
	for(var i=0; i < datos.dependencia.length; i++){
		if(id==datos.dependencia[i].id){
			deptos=datos.dependencia[i].departamento;
			pos=i;
			break;
		}
	}
	//alert(deptos[0].nombreDepto);
	var html='';
	html+='<h2 class="texto_depto">Seleccione una opcion</h2>';
	html+='<select class="valor_depto" onchange="verNumero()">';
	html+='<option value"0"> --Seleccione--</option>';
	for(var i=0; i < deptos.length; i++){
		html+='<option value="'+deptos[i].idDepartamento+'">'+deptos[i].nombreDepto+'</option>';
	}
	html+='</select>';
	document.querySelector('.deptos').innerHTML = html;
}

function verNumero(){
	var id_depto=document.querySelector('.valor_depto').value;
	var aleatorio=Math.floor((Math.random()*100.+1))
	var numero=datos.dependencia[pos].id+"."+id_depto+"/"+aleatorio;
	var html='<p>'+numero+'</p>';
	document.querySelector('.numero').innerHTML = html;
}
