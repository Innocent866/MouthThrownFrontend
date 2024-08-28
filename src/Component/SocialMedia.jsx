import React from "react";
import {
  EmailShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookShareButton,
} from "react-share";
import {
  EmailIcon,
  TwitterIcon,
  WhatsappIcon,
  FacebookIcon,
} from "react-share";

const SocialMedia = ({ title }) => {
  return (
    <div className="w-100 d-flex gap-lg-5 gap-3 p-3" style={{backgroundColor:"#F7E0CE"}}>
      <EmailShareButton
        className="d-flex flex-column rounded-circle"
        title={`${title} from Mouth Throne Online Market `}
        seperator="--"
        url={window.location.href}
      >
        {" "}
        <EmailIcon className="rounded-circle" size="3rem" />
      </EmailShareButton>
      <TwitterShareButton
        className="d-flex flex-column"
        title={`${title} from Mouth Throne Online Market `}
        seperator="--"
        url={window.location.href}
      >
        <TwitterIcon className="rounded-circle" size="3rem"/>
      </TwitterShareButton>
      <WhatsappShareButton
        className="d-flex flex-column"
        title={`${title} from Mouth Throne Online Market `}
        seperator="--"
        url={window.location.href}
      >
        {" "}
        <WhatsappIcon className="rounded-circle" size="3rem"/>
      </WhatsappShareButton>
      <FacebookShareButton
        className="d-flex flex-column"
        title={`${title} from Mouth Throne Online Market `}
        seperator="--"
        url={window.location.href}
      >
        {" "}
        <FacebookIcon className="rounded-circle" size="3rem"/>
      </FacebookShareButton>
    </div>
  );
};

export default SocialMedia;