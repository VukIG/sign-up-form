const form=document.querySelector('form');
const username=document.querySelector('#uname');
const usersurname=document.querySelector('#usrname');
const passwd=document.querySelector('#password');
const rpasswd=document.querySelector('#rpassword');
const phonenumber=document.querySelector('#phonenumber');
const email=document.querySelector('#email');
const inputandlabel=document.querySelectorAll('.inputandlabel');

let i=0;

function element(message,element) {
    let newElement = document.createElement('p');
    newElement.classList.add('jovan');
    newElement.innerText=message;
    let parent=element.parentElement
    parent.appendChild(newElement);
    i++;
}

form.addEventListener('submit', (e) => {
    if(username.value == '' || username.value == null){
        element('Name is required',username);
    }
    if (usersurname.value == '' || username.value == null) {
        element('Surname is required',usersurname);
    }
    if (phonenumber.value == '' || phonenumber.value==null) {
        element('Phone number is required',phonenumber);
    }
    if (email.value == '' || email.length<10 || !email.value.includes('.com') || !email.value.includes('@') ) {
        element('Invalid email',email);
    }
    if(passwd.value.length <= 8 ){
        element('Password must be longer than eight charcter',passwd);
    }
    if(passwd.value.length >= 30 ){
        element('Password must be shorter than thirty characters',passwd);
    }
    if (passwd.value != rpasswd.value) {
        element('Passwords do not match',rpasswd);
    }
    if (passwd.value=='' || passwd.value== null) {
        element('Password is required',passwd);
    }
    if (rpasswd.value=='' || rpasswd.value== null) {
        element('Re-type your password again',rpasswd);
    }
    if (i>0) {
        e.preventDefault();
        console.log('submitted');
        setTimeout(()=>{
            i=0;
            let elements=document.querySelectorAll('.jovan');
            elements.forEach(element => {
            element.innerText='';
            });
        },3000);
    }
});

