import React from "react";
import "../css/carousel.css"

function About() {
  return (
        <div className="justify-center container mx-auto bg-gray-200 rounded-xl border p-8 m-10 h-screen">
          <h1 className="text-2xl">Hello!</h1>
          <br></br>
          <p className="font-bold text-xl max-w-75%">Welcome to our library's webpage!</p>
          <br></br>
          <p>Our goal is to provide a welcoming and inclusive space where everyone can access resources and information to support their personal and professional growth.At our library, you'll find a wide range of books and genres to check out for free. Please help us grow our database by filling out our New Book Form and spreading the word about our website.</p>
        <div className="carousel_wrapper">
          <div className="carousel">
            <div className="slide one">
              <img src="https://ca.slack-edge.com/T02MD9XTF-U04L3K0PLQ5-b5bb1a363a19-512" alt="Daniele" />
            </div>
            <div className="slide two">
              <img src="https://ca.slack-edge.com/T02MD9XTF-U04LU7VCF5E-13721bad56dc-512" alt="Elif" />
            </div>
            <div className="slide three">
              <img src="https://ca.slack-edge.com/T02MD9XTF-U04L0J1CKU4-b53aa6398b67-512" alt="Scott" />
            </div>
        </div>
      </div>
    </div>  
  );
}

export default About;