import { CheckoutForm } from "./CheckoutForm"
import { SideBarCheckout } from "./SidebarCheckout"
import { FormCartContainer } from "./styles"
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CafeContext, SuccessCheckoutProps } from "../../contexts/CafesContext"
import { useContext } from "react"


export const Cart = () => {

    const { processCartCheckout } = useContext(CafeContext);
    
    const newCartFormValidationSchema = zod.object({
        zip: zod.string().min(1, 'Informe o CEP'),
        street: zod.string().min(1, 'Informe a Rua'),
        number: zod.string().min(1, 'Informe o Número'),
        complement: zod.string(),
        neighborhood: zod.string().min(1, 'Informe o Bairro'),
        city: zod.string().min(1, 'Informe a Cidade'),
        state: zod.string().min(1, 'Informe o UF'),
        paymentTypeInput: zod.string().min(1, 'Informe o Tipo de Pagamento'),
    })

    type NewCartFormData = zod.infer<typeof newCartFormValidationSchema>


    const newCartForm = useForm<NewCartFormData>({
        resolver: zodResolver(newCartFormValidationSchema),
        defaultValues: {
            number: '',
            street: '',
            complement: '',
            zip: '',
            city: '',
            state: '',
            neighborhood: '',
            paymentTypeInput: '',
        }
    });

    const { handleSubmit, reset } = newCartForm;

    function handleCheckoutProcess(data: NewCartFormData) {

        const CheckoutProcessData: SuccessCheckoutProps = {
            checkoutStatus: true,
            street: data.street,
            street_number: data.number,
            city: data.city,
            state: data.state,
            neighborhood: data.neighborhood,
            shipping_time: '30 - 35 Minutos',
            paymentType: data.paymentTypeInput
        }

        processCartCheckout(CheckoutProcessData);

        reset();
    }

    return (
        <FormCartContainer onSubmit={handleSubmit(handleCheckoutProcess)}>
            <FormProvider {...newCartForm}>
                <CheckoutForm />
                <SideBarCheckout />
            </FormProvider>
        </FormCartContainer>
    )
}
