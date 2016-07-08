var fs = require('fs');

var numArray = [];
var total = 0;
var avg = 0;

// bring in numbers.txt
function filterNumbers() {
 fs.readFile('numbers.txt', 'utf-8', function(err, fileContents){
    if(err){
      console.log(err);
    }

    numArray = fileContents.split(', ');

    for (var i = 0; i < numArray.length; i++) {
      numArray[i] = parseInt(numArray[i]);
    }

    numArray.sort(function(a,b) {
      return a-b;
    })

    done();
})
}



// create done function
function done() {
  console.log('Low number:', numArray[0]);
  console.log('High number:', numArray[numArray.length-1]);
  for (var i = 0; i < numArray.length; i++) {
    total = total + numArray[i];
  }
  avg = total/numArray.length;
  console.log("Average:", avg);

}

filterNumbers();
