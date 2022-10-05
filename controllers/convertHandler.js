function ConvertHandler() {
  
  this.getNum = function(input) {
    /*if(!isNaN(input)) {
      return input;
    }*//*
    if(typeof input == 'number') {
      
      return String(input);
    }*/
    let inputString = ''+input;
    let result = inputString.split(/[a-zA-Z]/)[0] ;
    //console.log(result);
    //console.log(typeof result);
    if(result == '') {
      result = 1;
      return result;
    }

    if(result.match(/\//g) && result.match(/\//g).length > 1) {
      return 'invalid number';
    }
       

    if( result.match(/\//g) && result.match(/\//g).length == 1) {
      let temp = result.split('/');
      if(isNaN(temp[0]/temp[1])) {
        return 'invalid number';
      } else {
        return Math.round((temp[0]/temp[1])*10000)/10000;
      }
    }
    
    if(isNaN(result)) {
      return 'invalid number';
    }

    return result;
  };
  
  this.getUnit = function(input) {
    let unitFirstIndex = input.search(/[a-zA-Z]/);
    if(unitFirstIndex == -1) {
      return 'invalid unit';
    }

    let result = input.slice(unitFirstIndex);
    if((/^lbs$/i.test(result))
    ||(/^kg$/i.test(result))
    ||(/^gal$/i.test(result))
    ||(/^l$/i.test(result))
    ||(/^mi$/i.test(result))
    ||(/^km$/i.test(result))) {
      if(result == 'l' || result == 'L') {
        return 'L';
      } else {
        return result.toLowerCase();
      }
    } else {
      return 'invalid unit';
    }       
    
  };
  
  this.getReturnUnit = function(initUnit) {
    if(/^lbs$/i.test(initUnit)) {
      return 'kg';
    }
    if(/^kg$/i.test(initUnit)) {
      return 'lbs';
    }
    if(/^gal$/i.test(initUnit)) {
      return 'L';
    }
    if(/^l$/i.test(initUnit)) {
      return 'gal';
    }
    if(/^mi$/i.test(initUnit)) {
      return 'km';
    }
    if(/^km$/i.test(initUnit)) {
      return 'mi';
    }
    
    return 'invalid unit';
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    if(/^lbs$/i.test(initUnit)) {
      return (initNum * lbsToKg).toFixed(5);
    }
    if(/^kg$/i.test(initUnit)) {
      return (initNum / lbsToKg).toFixed(5);
    }
    if(/^gal$/i.test(initUnit)) {
      return (initNum * galToL).toFixed(5);
    }
    if(/^l$/i.test(initUnit)) {
      return (initNum / galToL).toFixed(5);
    }
    if(/^mi$/i.test(initUnit)) {
      return (initNum * miToKm).toFixed(5);
    }
    if(/^km$/i.test(initUnit)) {
      return (initNum / miToKm).toFixed(5);
    }
    
    return 'invalid number';
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    if(initNum == 'invalid number' && initUnit != 'invalid unit') {
      return 'invalid number';
    }
    if(initNum != 'invalid number' && initUnit == 'invalid unit') {
      return 'invalid unit';
    }
    if(initNum == 'invalid number' && initUnit == 'invalid unit') {
      return 'invalid number and unit';
    }
    let fullReturnUnit = returnUnit;
    switch (fullReturnUnit) {
      case 'km':
        fullReturnUnit = 'kilometers';
        break;
      case 'mi':
        fullReturnUnit = 'miles';
        break;
      case 'gal':
        fullReturnUnit = 'gallons';
        break;
      case 'lbs':
        fullReturnUnit = 'pounds';
        break;
      case 'L':
      case 'l':
        fullReturnUnit = 'liters';
        break;
      case 'kg':
        fullReturnUnit = 'kilograms';
        break;        
    }

    let fullInitUnit = initUnit;
    switch (fullInitUnit) {
      case 'km':
        fullInitUnit = 'kilometers';
        break;
      case 'mi':
        fullInitUnit = 'miles';
        break;
      case 'gal':
        fullInitUnit = 'gallons';
        break;
      case 'lbs':
        fullInitUnit = 'pounds';
        break;
      case 'L':
      case 'l':
        fullInitUnit = 'liters';
        break;
      case 'kg':
        fullInitUnit = 'kilograms';
        break;        
    }


    return `${initNum} ${fullInitUnit} converts to ${returnNum} ${fullReturnUnit}`;
  };
  
}

module.exports = ConvertHandler;
