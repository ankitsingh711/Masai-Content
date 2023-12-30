const Validator = (req, res, next) => {
  try {
    next();
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
};

module.exports = {
  Validator,
};
