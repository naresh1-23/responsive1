const email = document.querySelector(".inputbar input");
const submitbtn= document.querySelector(".inputbar submit_btn");

email.onkeyup = ()=>{
    let useremail = email.value;
    if(useremail.trim() != 0){
        submitbtn.classList.add("active");
    }
    else{
        submitbtn.classList.remove("active");
    }
}