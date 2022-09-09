import React from 'react'

export const withAccordion = (Component) => {
  return (props) => {
    const [activeAccordion, setActiveAccordion] = React.useState(false)
    const onSetActiveAccordion = () => setActiveAccordion(!activeAccordion)

    return (
      <Component
        activeAccordion={activeAccordion}
        onSetActiveAccordion={onSetActiveAccordion}
        {...props}
      />
    )
  }
}
