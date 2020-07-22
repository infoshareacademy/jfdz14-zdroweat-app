import React from 'react'

const DashboardText = ({ className, text, text2 }) => {
  return (
    <>
      <div className={className}>
        <div>{text}</div>
        <div>{text2}</div>
      </div>
    </>
  )
}

export default DashboardText
