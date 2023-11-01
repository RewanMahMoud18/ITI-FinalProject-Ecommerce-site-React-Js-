import React from "react";

export const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Questions?</h1>
            <hr></hr>
          </div>
        </div>
        <div className="row">
          <div className="col-md 6 d-flex justify-content-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQOo9kUJQkYMrRkVkJ2sTl5OlAtPB1CKM-xWw5Papml75DC2RyG1z_PPpZs2rY5WnsgoY&usqp=CAU"
              width="400"
              height="400px"
              alt="contact us"
            />
          </div>
          <div className="col-md 6">
            <from>
              <div class="mb-3">
                <label for="exampleForm" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleForm"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
                
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Send Messages
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary">
                  Send Message
                </button>
            </from>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
