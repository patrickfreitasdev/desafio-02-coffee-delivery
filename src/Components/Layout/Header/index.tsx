import { useContext } from 'react';
import Logo from '../../../assets/logo.svg'
import { CartAnchor, CartContainer, HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react';
import { CafeContext } from '../../../contexts/CafesContext';

export const Header = () => {

    const { cartTotalItems } = useContext(CafeContext);

    return (
        <HeaderContainer>
            <div>
                <a href='/'><img src={Logo} /></a>
                <CartContainer>
                    <button><MapPin size={22} weight="fill" /> Porto Alegre, RS </button>
                    <CartAnchor href='/cart' title='Carrinho de compra'>
                        {(cartTotalItems > 0) && <span>{cartTotalItems}</span>}
                        <ShoppingCart size={22} weight="fill" />
                    </CartAnchor>
                </CartContainer>
            </div>
        </HeaderContainer>
    )
}
