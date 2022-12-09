
const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const login = document.querySelector("#login");

login.addEventListener("click", ()=>{
    const req ={
        id: id.value,
        pw: pw.value
    };
    fetch("/login", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(req)
    });
    
});



