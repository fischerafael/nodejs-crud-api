function errorHandler(error, request, response, next) {
  if (error.message === "Email already being used")
    return response.status(409).json({ message: error.message });
  if (error.message === "Username already being used")
    return response.status(409).json({ message: error.message });
  if (error.message === "Missing params")
    return response.status(400).json({ message: error.message });
  if (error.message === "Invalid email")
    return response.status(400).json({ message: error.message });
  if (error.message === "Email should be at least 6 characters long")
    return response.status(400).json({ message: error.message });
  return response.status(500).json({ message: "Internal server error" });
}

module.exports = {
  errorHandler,
};
