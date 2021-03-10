const aa = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('작업1 완료!');
    }, 100);
  });

const bb = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('작업2 완료!');
    }, 200);
  });

const cc = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('작업3 완료!');
    }, 300);
  });

function urgentWork() {
  console.log('긴급 작업');
}

const nextWorkOnDone = (msg1) => {
  console.log('done after 100ms:' + msg1);
  return bb();
};

aa()
  .then(nextWorkOnDone)
  .then((msg2) => {
    console.log('done after 200ms:' + msg2);
    return cc();
  })
  .then((msg3) => {
    console.log('done after 600ms:' + msg3);
  });
urgentWork();
