import { useContext } from 'react'
import PropTypes from 'prop-types'
import { ResponsiveContext } from './context'
import { liftIntoList, getDeviceWidth, inRange } from './utils'

// using self-invoking function to avoid create global variables unnecessary
Mobile.propTypes = (function propTypes() { 
  const ScreenType = PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]) 
  return {
    children: PropTypes.node,
      only: PropTypes.bool,
      andUp: PropTypes.bool,
      andUpTo: ScreenType
  }
})()

Tablet.propTypes = Mobile.propTypes
Laptop.propTypes = Mobile.propTypes

Mobile.defaultProps = { 
  only: false,
  andUp: false,
  andUpTo: null,
  childrens: ''
}
Tablet.defaultProps = Mobile.defaultProps 
Laptop.defaultProps = Mobile.defaultProps

export function Mobile({ children, andUp, andUpTo }) {
  const { deviceWidth } = useContext(ResponsiveContext)

  const mobileWidth = {
    min: 0,
    max: andUp ? Infinity : getDeviceWidth(andUpTo ?? 'mobile')
  }

  const inMobileRange = inRange(mobileWidth.min, mobileWidth.max)
  return inMobileRange(deviceWidth) && children
}

export function Tablet({ children, only, andUp, andUpTo  }) {
  const { deviceWidth } = useContext(ResponsiveContext)

  const tabletWidth = {
    min: only ? getDeviceWidth('mobile') + 1 : 0,
    max: andUp ? Infinity : getDeviceWidth(andUpTo ?? 'tablet')
  }

  const inTabletRange = inRange(tabletWidth.min, tabletWidth.max)
  return inTabletRange(deviceWidth) && children
}

export function Laptop({ children, only, andUp, andUpTo  }) {
  const { deviceWidth } = useContext(ResponsiveContext)

  const laptopWidth = {
    min: only ? getDeviceWidth('tablet') + 1 : 0,
    max: andUp ? Infinity : getDeviceWidth(andUpTo ?? 'laptop')
  }

  const inLaptopRange = inRange(laptopWidth.min, laptopWidth.max)
  return inLaptopRange(deviceWidth) && children
}

export function Any({ children }) {
  return children
}

function customContainer({ minWidth, maxWidth, deviceName='CUSTOM_NO_NAME' }) {
  UsableCustom.propTypes = { ...Mobile.propTypes }
  // Component
  function UsableCustom({ children, only, andUp, andUpTo }) {
    const { deviceWidth } = useContext(ResponsiveContext)

    const customWidth = {
      min: only ? getDeviceWidth(minWidth) : 0,
      max: (andUp ? Infinity : getDeviceWidth(andUpTo ?? deviceName)) || maxWidth
    }

    const inCustomRange = inRange(customWidth.min, customWidth.max)
    return inCustomRange(deviceWidth) && children
  }

  return UsableCustom
}

/** 
 * Create custom breakpoints by given a list of options 
 * @param {Object[]} options                  List options of custom Breakpoints
 * @param {string|number} options[].minWidth  Smallest width the custom breakpoint can display
 * @param {string|number} options[].maxWidth  Smallest width the custom breakpoint can display
 * @param {string} [options[].deviceName]     The device name, useful to create custom breakpoint can reusing in another place
 * @returns {Function[]}                      Return CustomScreen[] array
 */
export function createCustom(options) {
  checkCustomOptions(options)
  // return a list of custom Breakpoints
  return liftIntoList(options).map(customContainer)
}

const checkCustomOptions = (options) => {
  const optionShape = PropTypes.shape({
    minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    deviceName: PropTypes.string

  })
  const customTypes = PropTypes.oneOfType([
    optionShape,
    PropTypes.arrayOf(optionShape)

  ]).isRequired 

  PropTypes.checkPropTypes(customTypes, options, 'options', 'createCustom')
}
