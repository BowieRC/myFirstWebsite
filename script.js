label_name = document.getElementById('name');
contact = document.getElementById('contact');

contact.addEventListener('click', () => {
    label_name.focus();
    window.location.form = label_name;
})