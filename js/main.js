$(document).ready(function(){

	//slider
	$(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200
  });
});
	//posts
	if(window.location.href.indexOf('index') > -1){
	var posts =[
	{
		title:'Prueba de titulo 1',
		date:'Publicado el dia '+ moment().date()+ " de " +moment().format("MMMM")+" del " +moment().format("YYYY"),
		content: 'ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',

	},
	{
		title:'Prueba de titulo 2',
		date:'Publicado el dia '+ moment().date()+ " de " +moment().format("MMMM")+" del " +moment().format("YYYY"),
		content: 'ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
		
	},
	{
		title:'Prueba de titulo 3',
		date:'Publicado el dia '+ moment().date()+ " de " +moment().format("MMMM")+" del " +moment().format("YYYY"),
		content: 'ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
		
	},
	{
		title:'Prueba de titulo 4',
		date:'Publicado el dia '+ moment().date()+ " de " +moment().format("MMMM")+" del " +moment().format("YYYY"),
		content: 'ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
		
	},
	{
		title:'Prueba de titulo 5',
		date:'Publicado el dia '+ moment().date()+ " de " +moment().format("MMMM")+" del " +moment().format("YYYY"),
		content: 'ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
		
	},
	{
		title:'Prueba de titulo 6',
		date:'Publicado el dia '+ moment().date()+ " de " +moment().format("MMMM")+" del " +moment().format("YYYY"),
		content: 'ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
		
	},

	];
	posts.forEach((item, index)=>{
		var post = `

		<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>${item.content}</p>
				<a href="#" class="button">Leer más</a>
				</article>
`
$("#posts").append(post);
	});
	}
//selectoe de tema
var theme = $("#theme");
$("#to-green").click(function(){
	theme.attr("href","css/green.css");
})
var theme = $("#theme");
$("#to-red").click(function(){
	theme.attr("href","css/red.css");
})
var theme = $("#theme");
$("#to-blue").click(function(){
	theme.attr("href","css/blue.css");
})

//scroll aariba
$('.subir').click(function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop:0
	},500);
})

// Login falso

	$("#login form").submit(function(){
		var form_name = $("#form_name").val();

		localStorage.setItem("form_name", form_name);

	});

	var form_name = localStorage.getItem("form_name");

	if(form_name != null && form_name != "undefined"){
		var about_parrafo = $("#about p");

		about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
		about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

		$("#login").hide();

		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});

	}
	if(window.location.href.indexOf('about') > -1){
		$('#acordeon').accordion();


	}
//reloj
if(window.location.href.indexOf('reloj') > -1){
	setInterval(function () {
		var reloj = moment().format("hh:mm:ss");
		$("#reloj").html(reloj);
	},1000);
}



	// Validación
	if(window.location.href.indexOf('contact') > -1){
	
		$("form input[name='date']").datepicker({
			dateFormat: 'dd/mm/yy'
		});

		$.validate({
		    lang: 'es',
		    errorMessagePosition: 'top',
		    scrollToTopOnError: true
		});

	}

	

});