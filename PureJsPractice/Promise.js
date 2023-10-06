const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        name: "Yogesh",
      };
      resolve(data);
    }, 1000);
  });
};

fetchData().then((data) => {
  console.log(data);
});
