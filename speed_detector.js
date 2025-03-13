
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    let demeritPoints = 0;
  
    if (speed > speedLimit) {
      demeritPoints = Math.floor((speed - speedLimit) / 5);
    }
  
    return demeritPoints;
  }
  
  function main() {
    const speed = parseInt(prompt("Enter the speed of the car (in km/h):"));
  
    const demeritPoints = calculateDemeritPoints(speed);
  
      if (demeritPoints > 12) {
        return "License suspended";
    } else {
      return "Ok";
    }
  }
  console.log ("speed",calculateDemeritPoints(88));

  

