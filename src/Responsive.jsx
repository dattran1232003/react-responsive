import React from 'react'
import PropTypes from 'prop-types'
import { useDeviceWidth } from './hooks'
import * as Breakpoints from './Breakpoints'
import { ResponsiveContext } from './context'

Responsive.propTypes = {
  children: PropTypes.node
}

function Responsive({ children=<div/> }) {
  const childrens = liftIntoList(children)

  const deviceWidth = useDeviceWidth()

  return (
    <ResponsiveContext.Provider value={{ deviceWidth }}>
      {childrens}
    </ResponsiveContext.Provider>
  )
}
const liftIntoList = (a) => {
  if (Array.isArray(a)) return a
  return [a] // lift it into array
}

// export all screen breakpoint (Mobile, Tablet, Laptop,...) with Responsive component
// user can use <Responsive.Mobile /> instead of <Mobile />
// without import { Mobile } from 'responsive'
Object.assign(Responsive, Breakpoints)
export default Responsive
