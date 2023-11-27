import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={220}
    height={260}
    viewBox="0 0 220 260"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="16" ry="16" width="220" height="260" />
  </ContentLoader>
)

export default Skeleton