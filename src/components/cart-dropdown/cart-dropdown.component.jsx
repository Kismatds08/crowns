import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component'

const CartDropDown = ()=> (
    <div className = 'cart-dropdown'>
        <div className = 'cart-items'>
            Some Items
        </div>
        <CustomButton>
            GO TO CHECKOUT
        </CustomButton>
    </div>
)

export default CartDropDown;