import { useRef } from "react";
import BusketItem from "./BusketItem";

function BusketRightSide() {

    let exitBusketMenu = useRef();
    let exitBsuketBtn = useRef();

    function toExitBusketMenu() {
        if (exitBusketMenu.current.className === "busket busket-hidden") {
            exitBusketMenu.current.className = "busket";
            exitBsuketBtn.current.className = "exit-dcr";
        } else {
            exitBusketMenu.current.className = "busket busket-hidden";
            exitBsuketBtn.current.className = "exit-dcr exit-dcr-l";
        }
        
    }

    return (
        <div className="busket" ref={exitBusketMenu}>
                <button className="exit" onClick={toExitBusketMenu}>
                    <p className="exit-dcr" ref={exitBsuketBtn}>&#10094;</p>
                </button>
                <h3 className="b">Корзина <span className="desc the-amount">(3)</span></h3>
                <div className="items-in-busket">
                    <BusketItem/>
                    <BusketItem/>
                </div>
                <div className="busket--all-info">
                    <div className="amount-of-stuff">
                        <p className="amount-items">Товары <span className="the-amount">(3)</span></p>
                        <p className="amount-of-stuff-cost">7,550<span> руб</span></p>
                    </div>
                    <div className="total-cost">
                        <p>Итого</p>
                        <p className="total-cost-items">7,550<span> руб</span></p>
                    </div>
                    <form action="/">
                        <a href="/" className="oz">Оформить заказ</a>
                    </form>
                </div>
            </div>
    )
}

export default BusketRightSide;