function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const demeritPerUnit = 5;
    let demeritPoints = 0;
  
    // Check if speed is below limit
    if (speed < speedLimit) {
      console.log("Ok");
      return;
    }
  
    // Calculate demerit points based on excess speed
    const excessSpeed = speed - speedLimit;
    demeritPoints = Math.floor(excessSpeed / demeritPerUnit);
  
    // Check for license suspension
    if (demeritPoints > 12) {
      console.log("License suspended");
    } else {
      console.log(`Points: ${demeritPoints}`);
    }
  }
  
  //  usage
  calculateDemeritPoints(80); 
  calculateDemeritPoints(65);
  calculateDemeritPoints(90);
  calculateDemeritPoints(100);