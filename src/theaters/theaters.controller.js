const service = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(request, response) {
  // TODO: Add your code here
  if (request.params.movieId) {
    // TODO - list by movie
  }

  const data = await service.list();
  response.json({ data: data });
}

module.exports = {
  list: asyncErrorBoundary(list),
};
