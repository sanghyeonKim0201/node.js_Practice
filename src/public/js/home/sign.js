const DOM = [];

for(var i = 0; i < 8; i++){
    DOM[i] = document.querySelector("#name,#id,#pw,#pwcheck,#phone,#email,#cancel,#check".split(",")[i]);
}

for(var i = 6; i <= 7; i++){
    DOM[i].addEventListener("click", (e)=>{
        if(e.currentTarget.id === "cancel"){
            window.history.back();
        }else{
            const req ={
                name: DOM[0].value,
                id: DOM[1].value,
                pw: DOM[2].value,
                pwcheck: DOM[3].value,
                phone: DOM[4].value,
                email: DOM[5].value
            }
            fetch("/sign", {
                method: "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(req)
            })
            .then((res)=>res.json())
            .then((res)=>{
                if(res.success){
                    alert(res.msg);
                }else{
                    alert(res.msg);
                }
            });
        }
    });
}