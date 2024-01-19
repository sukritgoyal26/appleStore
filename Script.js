function inputbox(){
    // if(a==inavtive){
    //     console.log(a)

    // }
    let el  = document.getElementById("search-input");
    let cn = el.classList;
    console.log(cn);
    if(cn.contains("active")){
        cn.remove("active");
        cn.add("inactive");
    }else{
        cn.remove("inactive");
        cn.add("active");
    }
}