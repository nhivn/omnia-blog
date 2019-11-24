import React, { Fragment } from "react";
import { Styled, css } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Footer = ({ socialLinks }) => {
  library.add(fab);
  return (
    <footer
      css={css({
        mt: 4,
        pt: 3
      })}
    >
      {socialLinks.map((platform) => (
        <Fragment key={platform.url}>
          <Styled.a
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            css={css({ mr: 2 })}
          >
            <FontAwesomeIcon icon={["fab", platform.name.toLowerCase()]} size="lg" />
          </Styled.a>
        </Fragment>
      ))}
    </footer>
  );
};
export default Footer;
