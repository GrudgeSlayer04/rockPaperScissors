function computerPlay() {
    var random = Math.floor(Math.random() * 2);
    if(random == 0){
        console.log('Rock');
    }
    else if(random == 1){
        console.log('Paper');
    }
    else if(random == 2){
        console.log('Scissors');
    }
}

// print("Hello world!");
console.log(computerPlay());
