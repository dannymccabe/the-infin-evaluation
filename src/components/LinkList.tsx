import React from 'react';

const LinkList = () => {
  return (
    <section className="linklist">
      <div className="column column-1">
        <p>
          Employers have to decide on bonuses and promotions based on limited
          information and often with resentment from the employees. It’s
          frustrating.
        </p>
      </div>
      <div className="column">
        <h3>Pages</h3>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">For Businesses</a>
          </li>
          <li>
            <a href="#">For Individuals</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Marketing Efforts</a>
          </li>
        </ul>
      </div>
      <div className="column">
        <h3>For Business</h3>
        <ul>
          <li>
            <a href="#">Link 4</a>
          </li>
          <li>
            <a href="#">Link 5</a>
          </li>
          <li>
            <a href="#">Link 6</a>
          </li>
        </ul>
      </div>
      <div className="column">
        <h3>For Individuals</h3>
        <ul>
          <li>
            <a href="#">Link 4</a>
          </li>
          <li>
            <a href="#">Link 5</a>
          </li>
          <li>
            <a href="#">Link 6</a>
          </li>
        </ul>
      </div>
      <div className="column">
        <h3>Contact</h3>
        <ul>
          <li>
            <a href="#">421-273-0427</a>
          </li>
          <li>
            <a href="#">info@theinfin.com</a>
          </li>
        </ul>
      </div>
      <div className="column">
        <h3>Social Media</h3>
        <ul>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LinkList;
