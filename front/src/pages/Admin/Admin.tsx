import React from 'react'

const Admin = () => {
  return (
    <div className='admin'>
        <div className='admin__section section-admin'>
            <h1 className='section-admin__title'></h1>
            <div className='section-admin__fields'>
                <div className='section-admin__field'>
                    <h1 className='section-admin__field-name'></h1>
                    <button className='section-admin__field-delete'>+</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Admin