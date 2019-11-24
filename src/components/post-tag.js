import React from "react";
import { Styled, css } from "theme-ui";
import { Badge } from "@theme-ui/components";
import { Link } from "gatsby";

const PostTag = ({ tag, color }) => (
  <Badge
    css={css({
      color: color || "primary",
      bg: "background"
    })}
  >
    #
    <Styled.a
      as={Link}
      to={`/tags/${tag}`}
      css={css({ color: color || "primary" })}
    >
      {tag}
    </Styled.a>
  </Badge>
);

export default PostTag;
