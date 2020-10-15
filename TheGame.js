


countForwin=12;
const size=12;
var animalArr=new Array(size);
let i=0,j=1;
for( i=0;i<animalArr.length;i++){
    if(i===6){
         j=1;
    }
    animalArr[i]=j+".jpg";
    j++;
  }
  
shuffleArray(animalArr);
copyCard();
rearrangement(animalArr);


var count=0;
var card = document.querySelectorAll('.card');
for(let i=0;i<card.length;i++){
  card[i].addEventListener( 'click', function(e) {
    console.log('Im in ');//
    card[i].classList.toggle('is-flipped');
    let arrCard=document.getElementsByClassName('is-flipped');
    
    if(arrCard.length>2){
      for(let i=2;i<arrCard.length;i++){
        arrCard[i].classList.toggle('is-flipped');
        console.log(arrCard.length);

      }
    }
    if(arrCard.length===2){
      if(arrCard[0].lastElementChild.lastElementChild.src===arrCard[1].lastElementChild.lastElementChild.src){
        setTimeout(function(){ 
        arrCard[1].style.visibility = "hidden";
        arrCard[0].style.visibility = "hidden";
        arrCard[1].classList.toggle('is-flipped');//היפוך קלף
        arrCard[0].classList.toggle('is-flipped');//היפוך קלף
        }, 1000);
        countForwin=countForwin-2;
        console.log(countForwin);
        if(countForwin===0){

          document.getElementsByClassName("win")[0].style.visibility = "visible";
          document.getElementsByClassName("win")[1].style.zIndex = "1";
        }

        
      }
      else{
        setTimeout(function(){ 
          arrCard[1].classList.toggle('is-flipped');//היפוך קלף
          arrCard[0].classList.toggle('is-flipped');//היפוך קלף
        }, 1000);
 
      }     
    }
    
  });
}



function copyCard(){//copy elemnt -function
    
    var bored=document.getElementsByTagName("div")[1];
    var card=document.getElementsByTagName("div")[2];
    for(i=0;i<animalArr.length-1;i++){
        var cloneElemnt=card.cloneNode(true);
        bored.appendChild(cloneElemnt);
    }

}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function rearrangement(arr){
    var elements= document.getElementsByClassName('img');//array of all the img card;
    for(let i=0;i<arr.length;i++){
        elements[i].src=arr[i];
        console.log[arr[i]];
        console.log(elements[i]);
    }
   

}

