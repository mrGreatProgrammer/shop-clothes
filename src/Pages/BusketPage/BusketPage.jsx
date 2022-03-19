import React from 'react'

function BusketPage() {
  return (
    <div className="thebusket">
      <div className="left_busket">
        <div className="busket_item-img"></div>
        <div className="left_busket-content">
          <div className="left_busket-item--name">
            <p>
              Волан с открытыми плечами укороченный{" "}
              <span className="item_model">Topby SHCHK</span>
            </p>
          </div>
          <div className="left_busket-item--description">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              ullam explicabo facere nisi repudiandae quas
            </p>
          </div>
          <div className="left_busket-item--price">
            <span className="theprice">
              2 550 <span className="currency">&#8381;</span>
            </span>
            <span className="theprice--striked">
              3 500<span className="currency">&#8381;</span>
            </span>
          </div>
          <div className="left_busket-item--btn-buy">
            <button className="btn-buy">Купить</button>
          </div>
          <div className="left_busket--slider">
            <button className="left_busket--slider-btn left">&#8592;</button>
            <span className="thenumwhichslide">01</span>
            <span className="amountofslide">/02</span>
            <button className="left_busket--slider-btn right">&#8594;</button>
          </div>
        </div>
      </div>


      </div>
  )
}

export default BusketPage