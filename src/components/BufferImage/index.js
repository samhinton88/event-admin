import React from 'react';

export default ({data, contentType}) => {
  if (!data) { return null}


  console.log('data in buffer image', data)
  console.log('contentType in bufferImage', contentType)

  const string64 = Buffer(data).toString('base64')

  return (
    <img
      className='table-cell-image'
      src={`data:${contentType};base64, ${string64}` }
    />
  )
}
