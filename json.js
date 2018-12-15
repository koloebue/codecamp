fetch('https:jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(function(json) {
	renderHTML(json)
})

function renderHTML(data) {
	for (var i=0; i<data.length; i++) {
		var title = data[i].title;
		//var todo = document.createElement('img');
		var li = document.createElement('li')
		li.innerHTML = title;
		var ul = document.getElementById('content')
		ul.appendChild(li)
		
		
	}
	}


  