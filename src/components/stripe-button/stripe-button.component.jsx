import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51I3wgGFTSkgvVyrmJY4dN63DkZAtHmmdLnBkxyOKseqF0FJLf8erJwxU1gxTihoRutju23khSxBOowADvASQsMmX00OUKSeR7K'
    
    const onToken = token => {
        alert('Payment Successful')
    }
    
    return (
        <StripeCheckout
        label='Pay Now'
        name='Ecommerce LLC'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description= {`Your Total Price is ${price}`}
        amount ={priceForStripe}
        panelLabel='Pay Now'
        token = {onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;