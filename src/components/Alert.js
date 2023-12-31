import React from 'react'

export default function Alert(probs) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    // alert component hamare layout ko shift kar raha tha... so hamne alert component ko uska khud ka ek div bana ke de diya... so that it will not affect the layout
    <div style={{height : '50px'}}>
      {probs.Alert && <div className={`alert alert-${probs.Alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(probs.Alert.type)}</strong> : {probs.Alert.msg}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>}
    </div>
  )
}
