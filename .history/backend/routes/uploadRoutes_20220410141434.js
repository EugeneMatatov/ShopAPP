import path from "path";
import express from "express";
import multer from "multer"; //Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files
const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    //which folder the uploaded files should be stored
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    //what the file should be named inside the folder.
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Images only!");
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

router.post("/", upload.single("image"), (req, res) => {
  //console.log(file.fieldname)
  res.send(`/${req.file.path}`);
});

export default router;