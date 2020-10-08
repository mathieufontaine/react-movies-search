import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <p>
          Developped By{" "}
          <a href="https://www.linkedin.com/in/mathieu-fontaine/">
            Mathieu Fontaine{" "}
          </a>
        </p>
      </div>
      <div class="logos">
        <a href="https://www.linkedin.com/in/mathieu-fontaine/" target="_blank">
          <i class="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href="https://github.com/mathieufontaine" target="_blank">
          <i class="fa fa-github" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
