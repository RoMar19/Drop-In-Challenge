// 0. Get clientKey
getClientKey().then(clientKey => {
    // 1. Create an instance of AdyenCheckout
    const checkout = new AdyenCheckout({
        environment: 'test',
        clientKey: 'test_H5T4RJ2U5ZCALOYK46JK7T6IK4RW655F',
    });

    // 2. Create and mount the Component
    const card = checkout
        .create('card', {
            // Optional Configuration
            hasHolderName: true,

            // Optional. Customize the look and feel of the payment form
            // https://docs.adyen.com/developers/checkout/api-integration/configure-secured-fields/styling-secured-fields
            styles: {
                error: {
                    color: 'red'
                },
                validated: {
                    color: 'green'
                },
                placeholder: {
                    color: '#d8d8d8'
                }
            },

            // Optional. Define custom placeholders for the Card fields
            // https://docs.adyen.com/developers/checkout/api-integration/configure-secured-fields/styling-secured-fields
            placeholders: {
                encryptedCardNumber: '9999 9999 9999 9999',
                encryptedExpiryDate: '01/22',
                encryptedSecurityCode : '123'
            },

            // Optionally show a Pay Button
            showPayButton: true,

            // Events
            onSubmit: (state, component) => {
                if (state.isValid) {
                    makePayment(card.data);
                }
            },

        })
        .mount('#card-container');
        });
