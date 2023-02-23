import React from "react";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer>
        <a href="https://www.twitter.com/print_whoami/">
          <FaTwitter />
        </a>

        <a href="https://www.instagram.com/return.whoami/">
          <FaInstagram />
        </a>

        <a href="https://github.com/mbhon1/">
          <FaGithub />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
