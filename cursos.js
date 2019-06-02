let cursos = [
	{id: 1, nombre: 'Analisis De Algoritmos', duracion: '100 Horas',costo: 56000 },
	{id: 2, nombre: 'Matematicas Discretas', duracion: '50 Horas',costo: 30000 },
	{id: 3, nombre: 'Estructuras de Datos', duracion: '120 Horas',costo: 43000 }
	];
	
	let buscarCurso = (idCurso) => cursos.find( cursoABuscar => cursoABuscar.id == idCurso);
	
	let mostrarCurso = (curso) => {
			let resultado=(
						'Id: '+curso.id+'\n'+
						'Nombre del curso: '+curso.nombre+'\n'+
						'Duracion: '+curso.duracion+'\n'+
						'Costo: $'+curso.costo +'\n'	
					   );
					   return resultado;	   			   	   
	}
	
	
	let verCursos = () => {
		text="";
		text+='Oferta de Cursos:';
		for (i=0;i<cursos.length;i++){
			text+=mostrarCurso(cursos[i]);
		}
		return text;
	}
	module.exports={
		buscarCurso,
		verCursos,
	};