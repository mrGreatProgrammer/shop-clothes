import React from 'react'

function ProductPage() {
  return (
    <div className="page__stuff">
        {/* <StoryNav /> */}
        <div className="page__stuff--info">
          <div className="page__stuff--name">
            Волан с открытыми плечами укороченный{" "}
            <span className="page__stuff--model"> Torby SHCHK</span>
          </div>
          <div className="page__stuff--price">
            2 550,00<span className="currency"> руб </span>
            <p className="stuff__page--price-off">
              3 500,00<span className="currency"> руб</span>
            </p>
          </div>
            <div className="page__stuff--text">Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных </div>
            <div className="page__stuff--colors">
                <div className="title">Цвет:</div>
                <div className="page__stuff--colors-circles">
                    <div className="color__circle circle-pinc"></div>
                    <div className="color__circle circle-blue"></div>
                    <div className="color__circle circle-green"></div>
                </div>
            </div>
            <div className="page__stuff--size">
                <div className="title">Размер:</div>
                
            </div>
            <div className="page__stuff--btns">
                <button className="add__stuff--in-busket">Добавить в корзину</button>
                <button className="add__stuff--favorites"></button>
            </div>
        </div>
        <div className="page__stuff--img"></div>
      </div>
  )
}

export default ProductPage