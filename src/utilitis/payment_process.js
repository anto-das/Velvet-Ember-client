/**
 * 1.install stripe and stripe react
 * 2.create card element
 * 3.create stripe account and get publishable key
 * 4.use publishable key and use stripe to get card information and error
 * 5.create payment intent on the server side and return client secret.
 * install stripe on server side then get client secret.make sure you used the payment method type:['card']
 * 6. confirm payment handle in client and save the client secret
 * 7. pass the client information using {
 * payment_method:card,
 * billing_details:{
 * }
 * }
 * 8.display transaction id
 * */ 