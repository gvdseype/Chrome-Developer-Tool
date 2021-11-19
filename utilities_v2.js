(function() {

  var findObjs = function(element, obj, multiple) {
    var toFindObj = multiple ? [] : undefined;
        
      element.some(function(ele) {
        let answer = true
    
        for(var prop in obj) {
          if (!((prop in ele) && ele[prop] === obj[prop])) {
            answer = false;
          }
        }
        
        if (answer) {
          if (multiple) {
            toFindObj.push(ele)
          } else {
            toFindObj = ele;
            return true;
          }
        }
    
      })
    return toFindObj;
  }

  var _ = function(element) {
    u = {
      first: function() {
        return element[0];
      },
      last: function() {
        return element[element.length - 1];
      },
      without: function(...takeOut) {
        let newArray;
        newArray = element.filter(function(ele) {
          if (takeOut.includes(ele)) {
            return false;
          } else {
            return true;
          }
        })
        return newArray;
      },
      range: function() {
        let numbers = Array.prototype.slice.call(arguments)
        let firstInd;
        let secondInd;
        let newArr = [];
        
        if (numbers.length > 1) {
          firstInd = numbers[0];
          secondInd = numbers[1];
          for (let i = firstInd; i < secondInd; i += 1) {
            newArr.push(i)
          }
        } else {
          firstInd = 0;
          secondInd = numbers[0]
          for (let i = firstInd; i < secondInd; i += 1) {
            newArr.push(i)
        }
      }
        return newArr;
      },
    }
    return u;
  };

  window._ = _;

  
})()