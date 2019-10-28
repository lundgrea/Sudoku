//review rows for duplicates
//review columns for duplicates
//if no duplicates return 'SUCCESS!'
//else return 'Please try again.'

//COMPARE ROWS
//grab the first three indeces (0,1,2) and check for duplicates
    //perhaps using a filter....
    //thoughts about reduce...
//flatten all three arrays
//use array prototype method to loop through comparing elements
//if duplicate return 'Please try again.'
//else increment indeces by 3 and run again
//if no duplicated move on to comparing columns



let findDups = (array) => {
   return array.filter((item, index) => {
     array.indexOf(item) != index
     return 'Please play again'
    })
  }
  

//COMPARE COLUMNS
//grab the first indeces of indeces 0,3,6,9,12,15,18,21,24 and compare for duplicates
//if duplicates return 'Please try again.'
//else compare the second indeces of the same arrays
//compare the third indeces of the same arrays
//increment indeces by 1 and run again
//incremenet indeces by 1 and run again


const isValidSudoku = () => {
  
} 

const compareRows = () => {

}

const compareColumns = () => {

}

