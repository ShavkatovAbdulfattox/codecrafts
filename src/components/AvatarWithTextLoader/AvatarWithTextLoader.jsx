import React from "react";
import ContentLoader from "react-content-loader";

const AvatarWithTextLoader = (props) => (
  <ContentLoader viewBox="0 0 350 160" height={160} width={400} {...props} >
    <rect x="110" y="21" rx="4" ry="4" width="204" height="6" />
    <rect x="111" y="41" rx="3" ry="3" width="135" height="7" />
    {/* <rect x="304" y="-46" rx="3" ry="3" width="350" height="6" /> */}
    {/* <rect x="371" y="-45" rx="3" ry="3" width="380" height="6" /> */}
    {/* <rect x="484" y="-45" rx="3" ry="3" width="201" height="6" /> */}
    <rect cx="48" cy="48" r="48" />
  </ContentLoader>
);

export default AvatarWithTextLoader;
