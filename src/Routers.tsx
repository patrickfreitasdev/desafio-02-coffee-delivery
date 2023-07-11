import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './Pages/Home'
import { Cart } from './Pages/Cart'
import { CheckoutSuccess } from './Pages/CheckoutSuccess'


export function Router() {

    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />} >
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/success' element={<CheckoutSuccess />} />
            </Route>
        </Routes>
    )

}