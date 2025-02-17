let get_notification = document.getElementById("notification");
let get_notification_hover = document.getElementById("notification_hover");
let get_logo_img_header_noti = document.getElementById('logo_img_header_noti')
let get_logo_img_header_noti_hover = document.getElementById('logo_img_header_noti_hover')

get_notification.addEventListener('mouseover', () => {
    get_notification.style.backgroundColor = "#cacaca"
    get_logo_img_header_noti.style.display = "none"
    get_logo_img_header_noti_hover.style.display = "block"
    get_notification_hover.style.display = "block"
});

get_notification.addEventListener("mouseleave", (event) => {
    // Check if the related target (where the mouse goes next) is NOT inside the notification hover
    if (!get_notification_hover.contains(event.relatedTarget)) {
        get_notification.style.backgroundColor = "#4d636f";
        get_logo_img_header_noti.style.display = "block";
        get_logo_img_header_noti_hover.style.display = "none";
        get_notification_hover.style.display = "none";
    }
});

get_notification_hover.addEventListener('mouseover', () =>{
    get_notification.style.backgroundColor = "#cacaca"
    get_logo_img_header_noti.style.display = "none"
    get_logo_img_header_noti_hover.style.display = "block"
    get_notification_hover.style.display = "block"
})

get_notification_hover.addEventListener('mouseout', () =>{
    get_notification.style.backgroundColor = "#4d636f"
    get_logo_img_header_noti.style.display = "block"
    get_logo_img_header_noti_hover.style.display = "none"
    get_notification_hover.style.display = "none"
})