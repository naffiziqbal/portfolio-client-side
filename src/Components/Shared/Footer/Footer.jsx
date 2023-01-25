import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <i className="fa-solid fa-code text-4xl text-primary"></i>
          <p>
            Nafiz Iqbal
            <br />
            Front End Web Developer
          </p>
        </div>
        <div>
          <span className="footer-title">Special Thanks</span>
          <a
            target={"_blank"}
            className="link link-hover"
            href="https://icons8.com"
          >
            Icons8
          </a>
          <a
            target={"_blank"}
            className="link link-hover"
            href="https://fontawesome.com/"
          >
            Font Awesome
          </a>
          <a
            target={"_blank"}
            className="link link-hover"
            href="https://storyset.com/"
          >
            StorySet
          </a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
