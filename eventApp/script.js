const loginForm=document.getElementById("login-form")
loginForm.addEventListener("submit",async function(e){
    e.preventDefault()
    const email=loginForm.email.value;
    const password=loginForm.password.value;
    console.log(email,password)

    try {
        const response=await fetch("https://reqres.in/api/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({email,password})
            
        });
        if(response.ok){
            const data=await response.json()
            console.log(data)
            
            localStorage.setItem("token",data.token)
            window.location.href="dashboard.html"
        }else{
            console.log("Login failed")
        }
        
    } catch (error) {
        console.log(error)
    }
})





//adding event listener for event form
