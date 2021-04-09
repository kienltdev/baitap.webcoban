const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');
const comment = document.getElementById('comment');
// const reset = document.getElementById('reset');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});


form.addEventListener('reset', e => {
	e.preventDefault();
	
	resetAll();
});

function resetAll() {
    username.parentElement.className='form-control';
    email.parentElement.className='form-control';
    comment.parentElement.className='form-control';
    comment.value='';
    username.value='';
    email.value='';
}

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
    const commentValue = comment.value.trim();
	// const passwordValue = password.value.trim();
	// const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Chua nhap username');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Chua nhap email');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Email nhap chua dung');
	} else {
		setSuccessFor(email);
	}
	
    if(commentValue === '') {
        setErrorFor(comment, 'Chua comment');
    } else {
        setSuccessFor(comment)
    }
	// if(passwordValue === '') {
	// 	setErrorFor(password, 'Password cannot be blank');
	// } else {
	// 	setSuccessFor(password);
	// }
	
	// if(password2Value === '') {
	// 	setErrorFor(password2, 'Password2 cannot be blank');
	// } else if(passwordValue !== password2Value) {
	// 	setErrorFor(password2, 'Passwords does not match');
	// } else{
	// 	setSuccessFor(password2);
	// }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}













