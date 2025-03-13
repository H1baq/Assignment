
//declare a function that calculates the demeritpoints based on the car speed
function calculateDemeritPoints(speed) {
    const speedLimit = 70;//the speedlimit is standardized to 70
    let demeritPoints = 0;//initializing to zero
  
    // verify if the speed is above the speedlimit
    if (speed > speedLimit) {
        //formula for increment
      demeritPoints = Math.floor((speed - speedLimit) / 5);
    }
  
    return demeritPoints;
  }
  //function to check the car's speed and return a response
  function main() {
    const speed = parseInt(prompt("Enter the speed of the car (in km/h):"));
  
    const demeritPoints = calculateDemeritPoints(speed);
  
      if (demeritPoints > 12) {
        return "License suspended";
    } else {
      return "Ok";
    }
  }

  

