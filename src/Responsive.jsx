import React from 'react'
import PropTypes from 'prop-types'
import { useDeviceWidth } from './hooks'
import { ResponsiveContext } from './context'
import { Mobile, Tablet, Laptop, Any } from './Screen'

// export all screen breakpoint (Mobile, Tablet, Laptop,...) with Responsive component
// user can use <Responsive.Mobile /> instead of <Mobile />
// without import { Mobile } from 'responsive'
//Object.assign(Responsive, Breakpoints)

Responsive.Mobile = Mobile
Responsive.Tablet = Tablet
Responsive.Laptop = Laptop
Responsive.Any    = Any

Responsive.propTypes = {
  children: PropTypes.node,
  mobileFirst: PropTypes.bool
}

Responsive.defaultProps = {
  mobileFirst: true
}

export default function Responsive(props) {
  const { children, mobileFirst = true } = props
  const childrens = liftIntoList(children)

  const deviceWidth = useDeviceWidth()

  return (
    <ResponsiveContext.Provider value={{ deviceWidth, mobileFirst }}>
      {childrens}
    </ResponsiveContext.Provider>
  )
}

const liftIntoList = (a) => {
  if (Array.isArray(a)) return a
  return [a] // lift it into array
}
