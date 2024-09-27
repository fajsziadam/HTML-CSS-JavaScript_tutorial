// cookie = a small text file stored on your computer
//                 used to remember information about the user
//                 saved in name=value pairs

/*
document.cookie = "firstName=Adam; expires=Sun, 1 january 2030 12:00:00 UTC; path=/";
document.cookie = "lastName=Fajszi; expires=Sun, 1 january 2030 12:00:00 UTC; path=/";

console.log(document.cookie);*/

/*
//DELETE
deleteCookie("email");
deleteCookie("firstName");
deleteCookie("lastName");
*/

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookiesBtn = document.querySelector("#cookiesBtn");
const deleteBtn = document.querySelector("#deleteBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});

cookiesBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
});

deleteBtn.addEventListener("click", () => {
    deleteCookie("firstName");
    deleteCookie("lastName");
    firstText.value = "";
    lastText.value = "";
    console.log(`Cookies are deleted`)
});

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);

    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}


function deleteCookie(name){
    setCookie(name, null, null);
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}