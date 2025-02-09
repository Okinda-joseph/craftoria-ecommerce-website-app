import React from 'react'

const Items = (props) => {

  return (

    <section id="items">
        <div className="items-container-wrapper">
            <div className="container">
                <div className="row item-card">
                    <img src={props.image} alt="image" />
                    <p>{props.name}</p>
                    <div className="items-card-price">
                        <div className="item-new-price">{props.new_price}</div>
                        <div className="item-ole-price">{props.old_price}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Items