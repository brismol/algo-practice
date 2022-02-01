const myPromise = new Promise((res, rej) => {
  res('foo');
});

const resProm = async (prom) => {
  console.log(await prom);
};

resProm(myPromise);
