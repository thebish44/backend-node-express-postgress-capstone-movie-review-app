const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function movieExists(request, response, next) {
  const movieId = request.params.movieId;
  const movie = await service.read(movieId);

  if (movie) {
    response.locals.movie = movie;
    return next();
  }

  next({status: 404, message: "Movie cannot be found"});
}

async function read(request, response) {
  const data = response.locals.movie;
  response.json({ data: data });
}

async function list(request, response) {
  const isShowing = request.query.is_showing;
  const data = await service.list(isShowing);
  response.json({ data });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  read: [asyncErrorBoundary(movieExists), read],
};
