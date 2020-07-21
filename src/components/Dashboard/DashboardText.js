import React from 'react'

const DashboardText = ({ className, text, text2 }) => {
  return (
    <>
      <div className={className}>
        <p>{text}</p> <p>{text2}</p>
      </div>
    </>
  )
}

export default DashboardText
