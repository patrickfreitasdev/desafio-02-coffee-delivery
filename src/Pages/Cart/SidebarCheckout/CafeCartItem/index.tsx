import { Trash } from "phosphor-react";
import { CafeCartItemContainer, CafeContent, CafeItemControl, CafePrice } from "./styles";
import { useContext, useEffect, useState } from "react";
import { CafeContext } from "../../../../contexts/CafesContext";

interface CafeItemProps {
    id: string;
    imgPath: string;
    title: string;
    price: number;
    qtd: number;
}

export function CafeCartItem({ id, imgPath, title, price, qtd }: CafeItemProps) {

    const { removeItemCart, updateCart } = useContext(CafeContext);
    const [qtdHandle, setQtdHandle] = useState(qtd);

    function handleRemoveItem() {
        removeItemCart(id);
    }

    useEffect(() => {

        updateCart(id, qtdHandle);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [qtdHandle])


    return (
        <CafeCartItemContainer>
            <CafeContent>
                <img src={imgPath} />
                <div>
                    <h4>{title}</h4>
                    <CafeItemControl>
                        <input min="0" value={qtdHandle} onChange={(event) => setQtdHandle(parseInt(event.target.value))} type="number" />
                        <button type="button" onClick={handleRemoveItem}><Trash size={22} />Remover</button>
                    </CafeItemControl>
                </div>
            </CafeContent>
            <CafePrice>
                <strong>R$ {(price * qtd).toLocaleString('pt-br', { minimumFractionDigits: 2 })}</strong>
            </CafePrice>
        </CafeCartItemContainer>
    )
}
