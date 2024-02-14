const service = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(request, response) {
  if (request.params.movieId) {
    const data = await service.listTheatersByMovieId(request.params.movieId)
    response.json({ data });
  }
    const data = await service.list();
    response.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
};
