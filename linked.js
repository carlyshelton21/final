var container = document.getElementById('container');

container.addEventListener('click',toggledisplay);

function toggledisplay(event) {
    var id = event.target.id;
    // get element using his id
    var frame = document.getElementById(id);
    console.log(frame);
    frame.style.display = "none";
    // set that element to display none;
    // console.log(id);
    var frame = document.getElementById(id);
    console.log(frame);
    frame.style.display = "none";}
