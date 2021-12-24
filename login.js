function validate(){

    var a = document.forms['Form']['uname'].value;
    var b = document.forms['Form']['pass'].value;

    if(a=="" || b==""){
        alert("All the fields are required!");
        return false;
    
    }
    if(b.length > 8){
        alert("Password must contain less than 8 charcters");
        return false;
    }

}