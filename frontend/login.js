const BASE_URL = "http://localhost:5000/api/login";

document.addEventListener("DOMContentLoaded", () => {
    const form= document.getElementById("form");    
    form.addEventListener('submit', OnSubmitLogin)
});

async function OnSubmitLogin(e) {

    e.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    
    const isValidLogin = await ValidateLogin({email: emailInput.value, password: passwordInput.value});

    if(isValidLogin){
        SetTokenCookie(isValidLogin.Authorization);
        RedirectToCrudPage();
    }

}


async function ValidateLogin({ email, password}) {

    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });

    const jsonResponse = await response.json();

    if(!response.ok){
        InsertWarningElement(jsonResponse.message);
        return;
    } 

    return jsonResponse;
}


function SetTokenCookie(accessToken) {
    document.cookie = `token=${accessToken}`;
}


function RedirectToCrudPage() {
   window.location.replace('index.html');
}


function InsertWarningElement(text) {


    const warningElement = document.getElementById("warningElement");

    if(!warningElement){
        const p = document.createElement("p");
        p.textContent = text;
        p.classList.add('warningElement');
        p.id = "warningElement";

        const form = document.getElementById("form");
        form.append(p);
        return;
    }

    warningElement.textContent = text;
}