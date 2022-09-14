
const form = document.querySelector('#formulario');
form.addEventListener("submit", (event) => {
   event.preventDefault();
   console.log("TEST-CLICK")
  
   const url = 'https://database.deta.sh/v1/a0wwnrex/contactmessages/items';

   let name = document.querySelector("input[type=text]").value ;
   let email = document.querySelector("input[type=email]").value ;
   let phone = document.querySelector("input[type=phone]").value ;
   let msg = document.querySelector("textarea").value ;
   
   const datos = {
    name: name,
    email: email,
    phone: phone,
    msg: msg 
};

const fetchParams = {
    method: 'POST',
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-API-Key": "a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H"
    },
    body: JSON.stringify({ item: datos })
 
};

fetch(url, fetchParams);
document.querySelector('#formulario').reset();
});

