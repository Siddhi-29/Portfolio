document.querySelector('form').addEventListener('submit', function(event) {
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;

    if (name === '' || email === '') {
        alert('Please fill out all fields.');
        event.preventDefault();
    }
});
