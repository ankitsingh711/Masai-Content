const Authentication = (req, res, next) => {
  try {
    res.status(200).json({
      isError: false,
    });
    next();
  } catch (error) {
    res.status(400).json({
      isError: true,
      error,
    });
  }
};

module.exports = { Authentication };
