function binarySearchArray(myList, targetItem){
    let startingPoint = 0;
    let endPoint = myList.length - 1;

    while(startingPoint <= endPoint){
        
        let midPoint = Math.floor((startingPoint + endPoint) / 2);
        let guessItem = myList[midPoint];

        // if guessItem matches targetItem then return midPoint
        if(guessItem === targetItem) {
            return midPoint;
        }

        // if targetItem is bigger than guessItem then move midPoint to one index right
        if(targetItem > guessItem){
            
            startingPoint = midPoint + 1;
        } else { 
            // if targetItem is smaller than guessItem then move midPoint to one index left
            endPoint = midPoint - 1;
        } 
    }

    // return nothing if targetItem is not in array
    return -1;
}

let myArray = [1,2,3,4,5,6,7,8];


const result = binarySearchArray(myArray, 2);

console.log('Index: ', result);