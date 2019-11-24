import React from "react";
import { Styled } from "theme-ui";

/**
 * Shadow me to add your own bio content
 */

const BioContent = ({ author }) => (
  <>
    <Styled.a href="https://nhivn.dev/">{author}</Styled.a>'s personal blog.
    <br />
    Power by bubble tea and coffee.
  </>
);

export default BioContent;
