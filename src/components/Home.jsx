import React from "react";
import Product from "./Product";

export const Home = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide "
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://www.thaqfny.com/wp-content/uploads/2022/09/%D8%B3%D8%B9%D8%B1-%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D9%A1%D9%A3-%D8%A8%D8%B1%D9%88-%D9%85%D8%A7%D9%83%D8%B3-%D8%B3%D8%B9%D8%A9-%D9%A5%D9%A1%D9%A2-%D8%AC%D9%8A%D8%AC%D8%A7-%D8%A8%D8%A7%D9%84%D8%AA%D9%82%D8%B3%D9%8A%D8%B7-%D9%85%D9%86-%D9%86%D9%88%D9%86-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9-1.jpg"
              class="d-block w-100"
              alt="iphone"
              height="600px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.hindustantimes.com/tech/img/2022/09/15/960x540/1_1646105681756_1663263518113_1663263518113.jpg"
              class="d-block w-100"
              alt="iphone"
              height="600px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://spaceexplored.com/wp-content/uploads/sites/10/2022/07/space-wallpaper.jpg?w=1200&h=600&crop=1"
              class="d-block w-100"
              alt="iphone"
              height="600px"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <Product></Product>
    </>
  );
};

export default Home;
