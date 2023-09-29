function checkCashRegister(price, cash, cid) {
    let changeDue = cash - price;
      const totalCid = cid.reduce((acc, curr) => acc + curr[1], 0);
      const changeArray = [];
    
      // Calculez les valeurs des unités monétaires disponibles dans la caisse (unitValues).
      const unitValues = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
      ];
    
      for (let i = 0; i < cid.length; i++) {
        const unitName = cid[i][0];
        const unitValue = unitValues[i][1];
        const unitAmount = cid[i][1];
    
        const changeAvailable = Math.floor(unitAmount / unitValue) * unitValue;
    
        changeArray.push([unitName, changeAvailable]);
      }
    
      const totalChangeAvailable = changeArray.reduce((acc, curr) => acc + curr[1], 0);
    
      if (totalChangeAvailable < changeDue) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      } else if (totalChangeAvailable === changeDue) {
        return { status: "CLOSED", change: cid };
      } else {
        const changeToGive = [];
    
        for (let i = unitValues.length - 1; i >= 0; i--) {
          const currencyName = unitValues[i][0];
          const currencyValue = unitValues[i][1];
          let availableAmount = cid[i][1];
          let changeAmount = 0;
    
          while (changeDue >= currencyValue && availableAmount > 0) {
            changeDue -= currencyValue;
            changeAmount += currencyValue;
            availableAmount -= currencyValue;
            changeDue = Math.round(changeDue * 100) / 100;
          }
    
          if (changeAmount > 0) {
            changeToGive.push([currencyName, changeAmount]);
          }
        }
    
        if (changeDue > 0) {
          return { status: "INSUFFICIENT_FUNDS", change: [] };
        } else {
          return { status: "OPEN", change: changeToGive };
        }
      }
    }
    
    
    checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);