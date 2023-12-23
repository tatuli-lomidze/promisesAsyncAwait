// delay - promise

function mySetTimeout(delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.1) {
          resolve("delay")
        } else {
          reject("fail delay")
        }
      }, delay);
    });
  }

  mySetTimeout(1000)
    .then((res) => console.log(res))
    .catch((err) => console.error(err))

// promise async/await

function makeToys(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve("undefected");
      } else {
        reject("defected");
      }
    }, duration);
  });
}

function sellToys(status, time) {
  return new Promise((resolve, reject) => {
    if (status === 'undefected') {
        setTimeout(() => {
          if (Math.random() > 0.7) {
            resolve('sold');
          } else {
            reject('was not sold');
          }
        }, time); 
      } 
    });
  }

function deliverToys(deadline) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Toy is delivered");
      } else {
        reject("Toy was not delivered");
      }
    }, deadline);
  });
}

makeToys(3000)
  .then((status) => sellToys(status, 1000))
  .then((res) => console.log(res))
  .then((deadline) => deliverToys(2000))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// async await
  
  async function createToy() {
    try {
      const status = await makeToys(3000);
      await sellToys(status, 1000);
      const deliveryResult = await deliverToys(2000);
      console.log(deliveryResult);
    } catch (err) {
      console.log(err);
    }
  }
  
  createToy();