// const aa = () =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('작업1 완료!');
//     }, 100);
//   });

// const bb = () =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('작업2 완료!');
//     }, 200);
//   });

// const cc = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // resolve('작업3 완료!');
//       reject('adsf');
//     }, 300);
//   });

// function urgentWork() {
//   console.log('긴급 작업');
// }

// const nextWorkOnDone = (msg1) => {
//   console.log('done after 100ms:' + msg1);
//   return bb();
// };

// aa()
//   .then(nextWorkOnDone)
//   .then((msg2) => {
//     console.log('done after 200ms:' + msg2);
//     return cc();
//   })
//   .catch((msg3) => {
//     console.log('done after 600ms:' + msg3);
//   });
// urgentWork();

const b = () =>
  new Promise((reject) => {
    reject(new Error('실패...'));
  });

b().catch((error) => {
  console.log(error);
});
// error => 실패...
