const children = document.querySelectorAll('.child');
const body = document.querySelector('body');

children.forEach(child => {
	console.log(child);
	child.addEventListener('click', e => {
		if (e.target.id === 'grey') {
			body.style.backgroundColor = e.target.id;
		} else if (e.target.id === 'red') {
			body.style.backgroundColor = e.target.id;
		} else if (e.target.id === 'yellow') {
			body.style.backgroundColor = e.target.id;
		} else if (e.target.id === 'green') {
			body.style.backgroundColor = e.target.id;
		} else if (e.target.id === 'pink') {
			body.style.backgroundColor = e.target.id;
		} else if (e.target.id === 'purple') {
			body.style.backgroundColor = e.target.id;
		}
	});
});
