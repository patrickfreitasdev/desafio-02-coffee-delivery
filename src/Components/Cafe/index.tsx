import { useContext } from "react"
import { CafeContext } from "../../contexts/CafesContext"
import { CafeItemForm, TagWrapp } from "./styles"
import { ShoppingCart } from "phosphor-react"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { Cafe } from "../../reducers/cart/reducer"

const newCafeFormValidationSchema = zod.object({
    cartQtd: zod.number().min(0)
})

type NewCafeForm = zod.infer<typeof newCafeFormValidationSchema>

export const CafeItem = ({ id, imgPath, title, tags, description, price, qtd }: Cafe) => {

    const { register, handleSubmit } = useForm({
        resolver: zodResolver(newCafeFormValidationSchema),
        defaultValues: {
            cartQtd: qtd
        }
    });

    const { updateCart } = useContext(CafeContext);

    function handleAddToCart(data: NewCafeForm) {
        updateCart(id, data.cartQtd);
    }

    return (
        <CafeItemForm onSubmit={handleSubmit(handleAddToCart)}>
            <header>
                <img src={imgPath} />
                <TagWrapp>
                    {tags.map((tag) => {
                        return (
                            <span key={tag}>{tag}</span>
                        )
                    })}
                </TagWrapp>
                <h3>{title}</h3>
                <p>{description}</p>
            </header>
            <footer>
                <strong><small>R$</small>{price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</strong>
                <input
                    {...register('cartQtd', { valueAsNumber: true })}
                    type="number"
                    min={0}
                    id="qtd"
                />
                <button title="Adicionar ao carrinho"><ShoppingCart size={22} weight="fill" /></button>
            </footer>
        </CafeItemForm>
    )
}
