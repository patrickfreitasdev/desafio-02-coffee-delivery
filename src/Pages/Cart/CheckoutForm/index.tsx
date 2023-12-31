import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react"
import { BairroInput, CepInput, CheckoutFormAddressWrapper, CheckoutFormContainer, CheckoutFormInputs, CheckoutFormPaymentWrapper, CheckoutFormRadioWrapper, CidadeInput, ComplementoInputWrapper, DefaultInputStyle, NumeroInput, RuaInput, UfInput } from "./styles"
import { useFormContext } from "react-hook-form";

export const CheckoutForm = () => {

  const { register, watch } = useFormContext();

  const isComplementFilled = watch('complement');
  const shouldRemoveSpan = !isComplementFilled;

  return (
    <CheckoutFormContainer>
      <h2>Complete seu pedido</h2>
      <CheckoutFormAddressWrapper>
        <header>
          <MapPinLine size={22} />
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </header>
        <CheckoutFormInputs>
          <CepInput
            placeholder="CEP"
            {...register('zip')}
          />
          <RuaInput
            placeholder="Rua"
            {...register('street')}
          />
          <NumeroInput
            placeholder="Número"
            {...register('number')}
          />
          <ComplementoInputWrapper>
            <DefaultInputStyle
              placeholder="Complemento"
              {...register('complement')}
            />
            {shouldRemoveSpan && <span>Opcional</span>}
          </ComplementoInputWrapper>
          <BairroInput
            placeholder="Bairro"
            {...register('neighborhood')}
          />
          <CidadeInput
            placeholder="Cidade"
            {...register('city')}
          />
          <UfInput
            placeholder="UF"
            {...register('state')}
          />
        </CheckoutFormInputs>
      </CheckoutFormAddressWrapper>
      <CheckoutFormPaymentWrapper>
        <header>
          <CurrencyDollar size={22} weight="light" />
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </header>
        <CheckoutFormRadioWrapper>

          <input
            id="credito"
            type="radio"
            value="Cartão de Crédito"
            {...register('paymentTypeInput')}
          />
          <label htmlFor="credito">
            <CreditCard size={16} /> Cartão de crédito
          </label>


          <input
            id="debito"
            type="radio"
            value="Cartão de Débito"
            {...register('paymentTypeInput')}
          />
          <label htmlFor="debito">
            <Bank size={16} /> Cartão de Débito
          </label>

          <input
            id="dinheiro"
            type="radio"
            value="Dinheiro"
            {...register('paymentTypeInput')}
          />
          <label htmlFor="dinheiro">
            <Money size={16} /> Dinheiro
          </label>

        </CheckoutFormRadioWrapper>
      </CheckoutFormPaymentWrapper>
    </CheckoutFormContainer>
  )
}
