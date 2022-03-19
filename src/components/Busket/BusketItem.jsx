import busketitemimg from '../img/items-img/1 3.png'

function BusketItem() {
    return (
        <div className="item-in-busket">
                        <div className="item__busket-left"><img src={busketitemimg} alt=""
                                className="item__busket-img" /></div>
                        <div className="item__busket-right">
                            <div className="item__busket-name">
                                <p className="stuff__name">Волан с открытыми плечами укороченный Topby SHCHK</p>
                            </div>
                            <div className="item__busket-description">
                                <div className="item__busket-description--view">
                                    <span className="desc">Цвет: </span><span className="stuff__color">Розовый</span>
                                    <span className="desc">Размер: </span><span className="stuff__size">46</span>
                                </div>
                                <div className="item__busket-description--amount">
                                    <button className="minus">-</button><input type="number" className="stuff-amount"
                                        placeholder="1" /><button className="plus">+</button>
                                </div>
                                <div className="item__busket-description--order">
                                    <span className="stuff-cost">2,550</span><span className="stuff-currency">руб</span>
                                    <span className="stuff--pre-order">Предзаказ</span>
                                    <span className="stuff-bin"><img src="./img/items-img/Vector (4).png" alt="" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default BusketItem;