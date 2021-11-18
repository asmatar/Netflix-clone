import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { default as bd, default as db } from '../firebase';
import './Planscreen.scss';

const PlanScreen = ({userStore}) => {
    
    const [products, setProducts] = useState([])
    const [subscription, setSubscription] = useState(null)
    useEffect(() => {
        db.collection('customers').doc(userStore.uid).collection('subscriptions').get().then(querySnapshot=> {
            querySnapshot.forEach( async (subscription) => {
                setSubscription({
                    role: subscription.data().role,
                    current_period_end: subscription.data().current_period_end.seconds,
                    current_period_start: subscription.data().current_period_start.seconds,
                })
            })
        })
      
    }, [userStore.uid])
    useEffect(() => {
        db.collection('products').where('active', '==', true).get().then((querySnashot) => {
            const products = {};
            querySnashot.forEach(async (productDoc) => {
                products[productDoc.id] = productDoc.data();
                const priceSnap = await productDoc.ref.collection('prices').get();
                priceSnap.docs.forEach((price) =>{
                    products[productDoc.id].prices = {
                        priceId: price.id,
                        priceData: price.data()
                    }
                })
            });
            setProducts(products)
        })
    }, [])

// test credit card number 4242 4242 4242 4242 
    const loadCheckout = async (priceId) => {
        console.log('price is dans loadcheckout',priceId)
        const docRef = await bd.collection('customers').doc(userStore.uid).collection('checkout_sessions').add({
            price:priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin
        })
        docRef.onSnapshot(async(snap)=>{
            const {error, sessionId} = snap.data();

            if (error) {
                alert(`An error occured: ${error.message}`)
            }
            if (sessionId){
                const stripe = await loadStripe('pk_test_51JmxBgFkr8gEJezM0gPQ7Ugs9M4PPDdHk54S4Rs9JQjJfr8GJbXe1r0LFafzlupFGTfZKhMNdTLf6kRBMCJTWsiP00gaYhPXQd')
                stripe.redirectToCheckout({sessionId})
            }
        })
    }
    return (
        <div className='planScreen'>
            {/* {subscription && <p>Renewal Date: {new Date(subscription?.current_period_end * 1000).toLocaleDateString}</p>} */}
            {/* {console.log('subscription', subscription.current_period_end * 1000)} */}
            
            {Object.entries(products).map(([productId, productData]) => {
                // check if the user suscripcion is active
                const isCurrentPackage = productData.role?.toLowerCase().includes(subscription?.role.toLowerCase())
                return(
                    <div key={productId} className={`${isCurrentPackage && 'planScreen__plan--disabled'} planScreen__plan `}>
                        <div className="planScreen__info">
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button onClick={()=> !isCurrentPackage && loadCheckout(productData.prices.priceId)}> 
                            {isCurrentPackage ? 'current package' :  'subcribe'}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        userStore: state.userState.user
    }
  }
  // Login 3 : sign in, callback another function 'signInAPI' ( action creator)
  const mapDispatchToProps = (dispatch) => {
    // console.log('1 je suis dans dispatch de get user auth')
    return {
        // log : (payload) =>  dispatch(login(payload)),
        // getUserAuth: () => dispatch(getUserAuth())
      }
  }
  export default connect(mapStateToProps,mapDispatchToProps )(PlanScreen)
