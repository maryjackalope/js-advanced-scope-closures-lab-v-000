function produceDrivingRange(numberOfBlocks) {
  return function(startBlock, endBlock) {
    let totalBlocks = Math.abs(parseInt(startBlock) - parseInt(endBlock));
     if (numberOfBlocks < totalBlocks) {
      return `${totalBlocks - numberOfBlocks} blocks out of range`;
    } else {
      return `within range by ${numberOfBlocks - totalBlocks}`;
    }
  }
}
 function produceTipCalculator(tipPercent) {
  return function(fare) {
    return fare * tipPercent;
  }
}
 function createDriver() {
  let DriverId = 0;
   return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  }
}
 const Driver = createDriver();