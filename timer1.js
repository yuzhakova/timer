const data = process.argv.slice(2);
let numbers = data.filter(number => {
  return number > 0;
});

const timer = function() {
  for (const num of numbers) {
    setTimeout(() => {
      console.log('beep');
      return process.stdout.write('\x07');
    }, num * 1000);
  }
};

timer(numbers);

//Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments
//Example usage: node timer1.js 10 3 5 15 9 

