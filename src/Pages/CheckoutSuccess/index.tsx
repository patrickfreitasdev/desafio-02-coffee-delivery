import { useContext, useEffect } from "react"
import { CafeContext } from "../../contexts/CafesContext"
import { useNavigate } from "react-router-dom";
import { SuccessDetails, SuccessDetailsWrapper, SuccessOrderContainer } from "./styles";
import success from '../../assets/success.svg';
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export const CheckoutSuccess = () => {

  const { checkoutSuccess } = useContext(CafeContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkoutSuccess.checkoutStatus) {
      navigate('/');
    }
  }, [checkoutSuccess, navigate])

  return (
    <SuccessOrderContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <h6>Agora é só aguardar que logo o café chegará até você</h6>
        <SuccessDetailsWrapper>
          <SuccessDetails>
            <ul>
              <ol>
                <div className="icon map">
                  <MapPin size={16} />
                </div>
                <div>
                  <p>Entrega em Rua <strong>{checkoutSuccess.city}, {checkoutSuccess.street_number}</strong></p>
                  {(checkoutSuccess.complement) && <p>{checkoutSuccess.complement}</p>}
                  <p>{checkoutSuccess.neighborhood} - {checkoutSuccess.city}, {checkoutSuccess.state}</p>
                </div>

              </ol>
              <ol>
                <div className="icon timer">
                  <Timer size={16} />
                </div>
                <div>
                  <p>Previsão de entrega</p>
                  <strong>{checkoutSuccess.shipping_time}</strong>
                </div>
              </ol>
              <ol>
                <div className="icon money">
                  <CurrencyDollar size={16} />
                </div>
                <div>
                  <p>Pagamento na Entrega</p>
                  <strong>{checkoutSuccess.paymentType}</strong>
                </div>
              </ol>
            </ul>
          </SuccessDetails>
        </SuccessDetailsWrapper>
      </div>
      <img src={success} />
    </SuccessOrderContainer>
  )
}
