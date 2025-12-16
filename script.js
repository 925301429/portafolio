// Navegación móvil: toggle simple
document.addEventListener('DOMContentLoaded', function(){
	const toggle = document.querySelector('.nav-toggle');
	const nav = document.getElementById('primary-nav');
	if(toggle && nav){
		toggle.addEventListener('click', ()=>{
			const expanded = toggle.getAttribute('aria-expanded') === 'true';
			toggle.setAttribute('aria-expanded', String(!expanded));
			if(nav.style.display === 'flex'){
				nav.style.display = '';
			} else {
				nav.style.display = 'flex';
				nav.style.flexDirection = 'column';
			}
		});
	}

	// Validación básica de formulario si existe
	const form = document.getElementById('contact-form');
	if(form){
		form.addEventListener('submit', function(e){
			e.preventDefault();
			const nombre = form.querySelector('[name="nombre"]');
			const email = form.querySelector('[name="email"]');
			if(!nombre.value.trim() || !email.value.trim()){
				alert('Por favor completa nombre y correo.');
				return;
			}
			// Aquí podrías enviar a un endpoint o usar mailto
			alert('Gracias, tu mensaje ha sido enviado (simulado).');
			form.reset();
		});
	}

	// Scroll suave para enlaces internos
	document.querySelectorAll('a[href^="#"]').forEach(a=>{
		a.addEventListener('click', function(e){
			const href = this.getAttribute('href');
			if(href.length>1){
				const el = document.querySelector(href);
				if(el){
					e.preventDefault();
					el.scrollIntoView({behavior:'smooth'});
				}
			}
		});
	});
});

