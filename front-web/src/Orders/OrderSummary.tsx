import { formatPrice } from "./helpers";

type Props = {
    amount: number;
    totalPrice: number;
    OnSubmit: () => void;

}
function OrderSummary({ amount, totalPrice, OnSubmit}: Props){
    return (
        <div className="order-summary-container">
            <div className="order-summary-content">
                <div>
                <span className="amount-selected-cointainer">
                    <strong className="amount-selected">{amount}</strong>
                    PEDIDOS SELECIONADOS
                </span>
                <span className="order-summary-total">
                    <strong className="amount-selected">
                        {formatPrice(totalPrice)}
                    </strong>
                    VALOR TOTAL
                </span>
                </div>
                <button
                className="order-summary-make-order"
                    onClick={OnSubmit}
                >                        
                    FAZER PEDIDO
                </button>
            </div>
        </div>
    )

}

export default OrderSummary;