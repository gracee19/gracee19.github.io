import React from "react";

const Portfolio = () => {
  return (
    <div class="container p-3 my-4 border">
      <div class="row">
        <div class="col-12">
          <h1 class="projects">
            Here are some of my projects that I have made. Please click on the
            photos to open the deployed application and click the title to see
            the repository of the projects.
          </h1>

          <div class="row">
            <div class="col-md-4">
              <figure class="">
                <a href="https://ivy-inventory-management.herokuapp.com/dashboard">
                  <img
                    src="assets/ivy.png"
                    alt="ivy"
                    class="figure-img img-fluid rounded"
                  />
                </a>
                <figcaption>
                  <a href="https://github.com/gracee19/inventory-management-app">
                    IVY
                  </a>
                </figcaption>
              </figure>
            </div>

            <div class="col-md-4">
              <figure class="">
                <a href="https://evening-earth-10037.herokuapp.com/">
                  <img
                    src="assets/note.png"
                    alt="notes"
                    class="figure-img img-fluid rounded"
                  />
                </a>
                <figcaption>
                  <a href="https://github.com/gracee19/note-taker">
                    Note Taker
                  </a>
                </figcaption>
              </figure>
            </div>

            <div class="col-md-4">
              <figure class="">
                <a href="https://gracee19.github.io/web-api-code-quiz/">
                  <img
                    src="/assets/cq.png"
                    alt="quiz"
                    class="figure-img img-fluid rounded"
                  />
                </a>
                <figcaption>
                  <a href="https://github.com/gracee19/web-api-code-quiz">
                    Code Quiz
                  </a>
                </figcaption>
              </figure>
            </div>
            <div class="row">
              
              <div class="col-md-4">
                <figure class="figure">
                  <a href="https://gracee19.github.io/weather-dashboard/">
                    <img
                      src="/assets/wd.png"
                      alt="weather-dash"
                      class="figure-img img-fluid rounded"
                    />
                  </a>
                  <figcaption>
                    <a href="https://github.com/gracee19/weather-dashboard">
                      Weather Dashboard
                    </a>
                  </figcaption>
                </figure>
              </div>

              <div class="col-md-4">
                <figure class="figure">
                  <a href="https://gracee19.github.io/joke-gif/">
                    <img
                      src="/assets/jokes.png"
                      alt="joke"
                      class="figure-img img-fluid rounded"
                    />
                  </a>
                  <figcaption>
                    <a href="https://github.com/gracee19/joke-gif">Jokes</a>
                  </figcaption>
                </figure>
              </div>

              <div class="col-md-4">
                <figure class="figure">
                  <a href=" https://gracee19.github.io/password-generator/">
                    <img
                      src="/assets/password-gen.png"
                      alt="generator"
                      class="figure-img img-fluid rounded"
                    />
                  </a>
                  <figcaption>
                    <a href="https://github.com/gracee19/password-generator">
                      Password Generator
                    </a>
                  </figcaption>
                </figure>
              </div>

              <div class="col-md-4">
                <figure class="figure">
                  <a href="https://fathomless-tundra-97296.herokuapp.com/">
                    <img
                      src="/assets/mapinit.png"
                      alt="map"
                      class="figure-img img-fluid rounded"
                    />
                  </a>
                  <figcaption>
                    <a href="https://github.com/gracee19/map-init">MapInit</a>
                  </figcaption>
                </figure>
              </div>

              <div class="col-md-4">
                <figure class="figure">
                  <a href=" https://gracee19.github.io/employee-directory/">
                    <img
                      src="/assets/directory.png"
                      alt="directory"
                      class="figure-img img-fluid rounded"
                    />
                  </a>
                  <figcaption>
                    <a href="https://github.com/gracee19/employee-directory">
                      Employee Directory
                    </a>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
