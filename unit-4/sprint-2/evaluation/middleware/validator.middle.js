const validator = (req, res, next) => {
  if (req.method == "PATCH" || req.method == "DELETE") {
    if (
      req.url == "/:roll?password=7877&role=admin" ||
      req.url == "/:roll?password=7877&role=teacher"
    ) {
      next();
    } else {
      res.send("You are not authorised to do this operation");
    }
  } else if (req.method == "POST" || req.method == "GET") {
    next();
  }
};
module.exports = {
  validator,
};
