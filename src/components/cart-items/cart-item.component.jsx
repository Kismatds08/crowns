import './cart-item.styles.scss'

const CartItem = () => (
    <div className ='cart-item'>
    <img />
    <div className= 'item-details'>
        <span className='name'>Name</span>
        <span className='price'>Quantity * Price</span>
    </div>
    </div>
)

export default CartItem;