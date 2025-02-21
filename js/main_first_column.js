let get_my_group = document.getElementById('my_group')
let get_my_group_clicked = document.getElementById('my_group_clicked')

let get_my_event = document.getElementById('my_event')
let get_my_event_clicked = document.getElementById('my_event_clicked')

let get_my_photos = document.getElementById('my_photos')
let get_my_photos_clicked = document.getElementById('my_photos_clicked')

let get_notification1 = document.getElementById('notifications')
let get_close_btn = document.getElementById('close_btn')

get_my_group.addEventListener('click', () => {
    if (getComputedStyle(get_my_group_clicked).display === "none") {
        get_my_group_clicked.style.display = "block";
    } else {
        get_my_group_clicked.style.display = "none";
    }
})

get_my_event.addEventListener('click', () =>{
    if(getComputedStyle(get_my_event_clicked).display === "none")
    {
        get_my_event_clicked.style.display = "block"
    }
    else
    {
        get_my_event_clicked.style.display = "none"
    }
})

get_my_photos.addEventListener('click', () => {
    if(getComputedStyle(get_my_photos_clicked).display === "none")
    {
        get_my_photos_clicked.style.display = "block"
    }
    else
    {
        get_my_photos_clicked.style.display = "none"
    }
})

get_close_btn.addEventListener('click', () => get_notification1.style.display = "none")