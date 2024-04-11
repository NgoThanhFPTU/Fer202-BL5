import React from 'react'
import './Exercise5.css'

export const Exercise5 = () => {
  return (
    <div className='BS5'>
        <div className='row'>
            <div className='col-lg-12' style={{background: '#E9ECEF', marginTop: '20px'}}>
                <h1 style={{margin: '40px'}}>Let's test the grid</h1>
            </div>
        </div>
        <div className='basic-grid' style={{marginTop: '20px'}}>
          <div class="row">
            <div class="col-6">First col</div>
            <div class="col-6">Second col</div>
          </div>
          <div class="row">
            <div class="col">.col</div>
            <div class="col">.col</div>
            <div class="col">.col</div>
          </div>
          <div class="row">
            <div class="col-3">.col</div>
            <div class="col-3">.col</div>
            <div class="col-3">.col</div>
            <div class="col-3">.col</div>
          </div>
        </div>
        <div className='row' style={{marginTop: '20px'}}>
            <div className='col-lg-12' style={{background: '#D2C5C5'}}>
                <h1 style={{textAlign: 'center'}}>Create by ABC</h1>
            </div>
        </div>
      </div>
  )
}
export default Exercise5