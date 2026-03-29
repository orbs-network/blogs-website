import React from "react";
import { images } from "../../../assets/js/images";
import { handleUrl } from "../../util/link";
import Img from "../shared/Img";

const NavbarTop = ({ _relativeURL, _ID, home }) => {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  return (
    <div className="navbar-top flex-between">
      <div className="navbar-top-left">
        <a href={generateUrl(home)} className="logo" rel="noopener">
          <Img src={generateUrl(images.common.logo)} alt="orbs logo" />
          <p>ORBS</p>
        </a>
      </div>
    </div>
  );
};

export default NavbarTop;
