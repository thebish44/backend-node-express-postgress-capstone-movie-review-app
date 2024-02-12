const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function movieExists(request, response, next) {
  // TODO: Add your code here.
  const movieId = request.params.movieId;
  const movie = await service.read(movieId);

  if (movie) {
    response.locals.movie = movie;
    return next();
  }

  next({status: 404, message: `Movie cannot be found`});
}

async function read(request, response) {
  // TODO: Add your code here
  const data = response.locals.movie; // TODO - call db again? or use res locals
  response.json({ data: data });
}

async function list(request, response) {
  // TODO: Add your code here.
  const isShowing = request.params.is_showing;
  const data = await service.list(isShowing);
  response.json({ data });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  read: [asyncErrorBoundary(movieExists), read],
};
