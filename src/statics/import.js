console.log('woooooohiiyeaaaahh!')

let button = document.querySelector('#fetchAddjs');

button.addEventListener("click", async () => {
    console.log('woooop!')
    const res =await fetch("/addfriend", { 
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({"fname": "Insert", "lname": "withJS", "country": "SriLanka"})
    })

    const reponse = await res.text()
    console.log("reponse", reponse)
    
    document.body.append(reponse)
})