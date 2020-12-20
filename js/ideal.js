getPaymentMethods().then(response => {
// 1. Create an instance of AdyenCheckout
    const checkout = new AdyenCheckout({
        environment: 'test',
        clientKey: 'test_H5T4RJ2U5ZCALOYK46JK7T6IK4RW655F',
        paymentMethodsResponse: response,

        // Optionally show a Pay Button
        showPayButton: true,

        // Events
        onSubmit: (state, component) => {
            // Triggered when a shopper clicks on the Pay button
            makePayment(state.data);
        },
    });

    // 2. Create and mount the Component
    const ideal = checkout.create('ideal').mount('#ideal-container');
})