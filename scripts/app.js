let element= document.querySelector("#numberInput");
//console.log(element.textContent);

element.addEventListener('input', function (){
    if (element.value >=10 || element.value <=-10){
        alert("The number should be between -10 and 10");
    }
});

const fruit = {
    name: "Mangoes",
    color: "Yellow",
    taste: "Sweet&Sour",
};

document.querySelector('#fruitName').innerHTML = `Name: ${fruit.name}`;
document.querySelector('#fruitColor').innerHTML = `Color: ${fruit.color}`;
document.querySelector('#fruitTaste').innerHTML = `Taste: ${fruit.taste}`;
