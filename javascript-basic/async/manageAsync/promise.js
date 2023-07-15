// fetch("https://jsonplaceholder.typicode.com/posts").then(function (response) {
//   response.json().then(function (data) {
//     console.log(data);
//   });
// });

console.log(
  fetch("https://jsonpaceholder.typicode.com/posts")
    .then(
      function (response) {
        return response.json();
      }
      // function (err) { // is catch
      //   console.log(err);
      // }
    )
    .then(function (data) {
      console.log(data);
    })
  // .catch(function (e) {
  //   console.log(e);
  // })
);

// custom promise
const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("resolve worked");
  }, 3000);
  reject("reject worked");
});

myPromise.then(
  function (res) {
    console.log(res);
  },
  function (err) {
    console.log(err);
  }
);
