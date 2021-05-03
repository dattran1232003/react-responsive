import React from 'react'
import PropTypes from 'prop-types'
import { liftIntoList } from './utils'
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
// export all screen breakpoint (Mobile, Tablet, Laptop,...) with Responsive component
// user can use <Responsive.Mobile /> instead of <Mobile />
// without import { Mobile } from 'responsive'
Object.assign(Responsive, Breakpoints)
export default Responsive
