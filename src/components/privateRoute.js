import React from "react"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  return <Component {...rest} />
}

export default PrivateRoute
