// Mark and John are trying to compare their BMI (Body Mass Index), which is 
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
// and height in meter).

// TASK
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both 
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about 
// whether Mark has a higher BMI than John.

// TEST DATA
// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
// m tall.

const markMass = 78;
const markHeight = 1.69;
const johnMass = 95;
const johnHeight = 1.88;
const alexMass = 76;
const alexHeight = 1.76;
 
function calculateBMI(mass, height) {
  let bmi = 0;
  bmi = mass / height ** 2;
 
  return bmi.toFixed(2);
}
 
markBMI = calculateBMI(markMass, markHeight);
 
johnBMI = calculateBMI(johnMass, johnHeight);

alexBMI = calculateBMI(johnMass, johnHeight);
  
console.log(
  `Mark's mass is ${markMass}, his height is ${markHeight} and his BMI is : ${markBMI}`
);
console.log(
  `John's mass is ${johnMass}, his height is ${johnHeight} and hisBMI is : ${johnBMI}`
);

console.log(
    `Alex's mass is ${alexMass}, his height is ${alexHeight} and hisBMI is : ${johnBMI}`
  );