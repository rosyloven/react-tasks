import React from 'react'

export const withAccordion = (Component) => {
  return () => {
    const [activeAccordion, setActiveAccordion] = React.useState(false)

    return (
      <Component
        activeAccordion={activeAccordion}
        setActiveAccordion={setActiveAccordion}
      />
    )
  }
}
