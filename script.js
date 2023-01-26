function myFunction(clicked_id) {
    if(clicked_id == winning_number ){
        document.getElementById("demo").innerHTML = "Congratulations you won";
    } else{
        document.getElementById("demo").innerHTML = "I'm sorry, try again";
    }
    myFunction = function(){};
    
}
let winning_number =  Math.floor(Math.random() * 3);
function resetPage() {
    location.reload();
}
console.log(winning_number);
  
  
   


  