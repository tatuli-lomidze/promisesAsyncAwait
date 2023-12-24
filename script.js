// // delay - promise

function mySetTimeout(delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.3) {
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

// // promise async/await

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
          if (Math.random() > 0.5) {
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
  .then((ress) => console.log(ress))
  .then((deadline) => deliverToys(2000))
  .then((ress) => console.log(ress))
  .catch((err) => console.log(err));

// async await


    


// function delay(time) {
//     return new Promise(resolve => setTimeout(resolve, time));
//   }
  
//   async function makeToys(duration) {
//     await delay(duration);
//     if (Math.random() > 0.3) {
//       return "undefected";
//     } else {
//       return "defected";
//     }
//   }
  
//   async function sellToys(status, time) {
//     await delay(time);
//     if (status === "undefected") {
//       if (Math.random() > 0.5) {
//         return "sold";
//       } else {
//         throw "was not sold";
//       }
//     } 
//   }
  
//   async function deliverToys(deadline) {
//     await delay(deadline);
//     if (Math.random() > 0.5) {
//       return "Toy is delivered";
//     } else {
//       throw "Toy was not delivered";
//     }
//   }
  
//   async function createToy() {
//     try {
//       const status = await makeToys(3000);
//       const deadline = await sellToys(status, 1000);
//       const result = await deliverToys(2000);
//       console.log(result);
//     } catch (err) {
//       console.log(err);
//     }
//   }
  
//   createToy();
  