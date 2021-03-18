module.exports = async function (context, req) {
    context.log('Adding a task to the planner');
	const tareas = [
		{
			id: 1,
			title: "Primera tarea",
			status: "5",
			dueDate: "18-03-2021",
			responsable: "Germán Ospina",
		},
		{
			id: 2,
			title: "Segunda tarea",
			status: "5",
			dueDate: "18-03-2021",
			responsable: "Germán Ospina",	
		},
		{
			id: 3,
			title: "Tercera tarea",
			status: "5",
			dueDate: "18-03-2021",
			responsable: "Germán Ospina",
		},
		{
			id: 4,
			title: "Cuarta tarea",
			status: "5",
			dueDate: "18-03-2021",
			responsable: "Germán Ospina",
		},
		{
			id: 5,
			title: "Cinco tarea",
			status: "5",
			dueDate: "18-03-2021",
			responsable: "Germán Ospina",
		},
		
	];
	
    context.res = {
        status: 201,
        body: tareas
    };
}