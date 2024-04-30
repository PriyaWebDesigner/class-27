
// console.log('Hello World!!');
// console.log('Hello World!!');
// console.log('Hello World!!');
// console.log('Hello World!!');
// console.log('Hello World!!');

// For Loop.....
//   Example-1
  for(i=1; i<=5; i++){
    console.log('Hello World!!');
  }

//   Example-2 check the position of the numbers
  let number = [6, 5, 8, 4, 5, 5, 8, 5, 7, 5, 7, 38, 35, 68,48];
  let element = number.length;

  for(i=0; i<element; i++){
    console.log(number[i]);
    // console.log(i);
  }

//   i=0;
//   i=1;
//   i=2;
//   i=3;
//   i=4;
//   i=5;
//   i=6;
//   i=7;
//   i=8;

// Example-3 Check numbers are odd and even
let marks = [6, 5, 8, 4, 5, 5, 8, 5, 7, 5, 7, 38, 35, 68,48];
let element1 = marks.length;

for(i=0; i<element1; i++){
    if(marks[i]%2==0){
        console.log(marks[i]+'= Even'); 
    }

    else{
        console.log(marks[i]+'=Odd');
    }

}

// Example-4 sum
for(i=1; i<=5; i++){
  let x = 50;
  let y = 60;
  
  let result = x+y;
  console.log(result);
}

// Example-5 check the numbers of students are pass or fail 
let score = [90, 56, 78, 95, 29, 60, 13, 65, 12, 9, 43, 13, 67,54];
let element2 = score.length;

for(i=0; i<element2; i++){
  if(score[i]>30){
    console.log('The student are pass in the exam')
  }

  else{
    console.log( 'The student is fail in the exam')
  }
}

//Example-6 check the grade of the numbers 

let marks1 = [90, 85, 75, 55, 35,25,102 ];
let element3 = marks1.length;

for(i=0; i<element3; i++){
  if(marks1[i]>100){
    console.log('Invalid Number');
  }

  else if(marks1[i]>=90){
    console.log('The grade is A+');
  }

  else if(marks1[i]>=70){
    console.log('The grade is A');
  }

  else if(marks1[i]>=50){
    console.log('The grade is B+');
  }

  else if(marks1[i]>=30){
    console.log('The grade is B');
  }

  else{
    console.log('The grade is F')
  }
}





