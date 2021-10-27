const multer = require("multer");

const upload = multer();
upload.none();

//app.post("/", upload.none(),+controller)
//voir doc multer pour form files ou only text

module.exports = upload;
