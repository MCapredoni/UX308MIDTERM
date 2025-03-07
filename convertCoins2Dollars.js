//This program *converts* **coins** into **dollars**

function convertCoins2Dollars(nickels, dimes, quarters, loonies, toonies) {
    return (
      nickels * 0.05 +
      dimes * 0.1 +
      quarters * 0.25 +
      loonies * 1.0 +
      toonies * 2.0
    );
  }

  export {convertCoins2Dollars}