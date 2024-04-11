var a = 1;
a=2;
console.log(a);

let b=1;
b=2
console.log(b);


//WAP to greet the person given their First and Last Name
let FirstName = 'harkirat';
let LastName = 'singh';
let age=18;
let isMarried= false;

console.log("this person name is "+ FirstName +" "+ LastName + " and his age is "+ age);

//WAP that greets the person based on their gender.
let gender = "female";
if(gender=='male'){
    console.log("Mr."+FirstName);
}
else{
    console.log("Mrs."+FirstName);
}

//WAP that counts from 0-1000 and prints(for loop)
for(let i =0;i<=1000;i++){
   console.log(i);
}

const ages = [21,23,34,25,36,26,100];
const numberOfPeople = ages.length;

for (let i=0;i<numberOfPeople;i++){
    if(ages[i]%2==0){
        console.log(ages[i]);
    }
}

//WAP to prints all the even numbers in an array.
let nums= [12,3,45,6,3,5,2];
for(let i= 0;i<nums.length;i++){
    if(nums[i]%2==0){
        console.log(nums[i]);
    }
}


//Wap to print the largest number in the array 
let nums1= [12,3,45,6,3,5,2];
const num_largest = nums[0];
for(let i= 0;i<nums1.length;i++){
    if(nums1[i]> num_largest){
        console.log("The largest number in the array is "+" "+ nums1[i]);
    }
}



