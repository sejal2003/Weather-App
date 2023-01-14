const getinfo = (event)=>{
    event.preventDefault();
    const invalid = document.getElementById("invalid");
    const Search = document.getElementById("search");
    let cityVal = Search.value;
    if(cityVal==="") invalid.innerHTML = "Please Enter City Name";
    else{
        try{
            location.href=`/getdata?name=${cityVal}`;
        }catch(e){
            invalid.innerHTML("Please Enter valid City Name")
        }
            
        
        }
    }
const Button = document.getElementById("searchButton");

Button.addEventListener('click', getinfo);