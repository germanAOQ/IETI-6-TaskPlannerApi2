module.exports = async function (context, req) {
    context.log('Adding a task to the planner');
	
	
    const task = req.body;
    // Implement the response
	var timestamp = new Date().getUTCMilliseconds();
    const responseMessage = { 
		response: {
			id: timestamp,
			title: task.body.title,
			priority: task.body.priority,
			dueDate: task.body.dueDate,
			responsable: task.body.responsable,
		},
	};

    context.res = {
        status: 201,
        body: responseMessage
    };
}