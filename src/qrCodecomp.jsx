import React from 'react'
import QRCode from 'react-qr-code'

function QrCodecomp  () {
   const url =window.location.href
  return (
    <div className='mt-10  ml-48'>
        <QRCode value={`${url}/aboutUs`} />
    </div>
  )
  }

export default QrCodecomp