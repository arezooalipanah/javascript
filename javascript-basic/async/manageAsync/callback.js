function info(title, price, cb) {
  const result = title + " " + price;
  cb(result);
}

info("book", 99, function (res) {
  console.log(res);
});
