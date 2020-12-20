// 1. Create an instance of AdyenCheckout
        const checkout = new AdyenCheckout({
            environment: 'test',
            clientKey: 'test_H5T4RJ2U5ZCALOYK46JK7T6IK4RW655F',
            paymentMethodsResponse: response,
        });

        // 2. Create and mount the Component
        const dropin = checkout
            .create('dropin', {
                // Event
                onSubmit: (state, component) => {
                    state.data;
                    state.isValid;
                    makePayment(state.data);
                }
            })
            .mount('#dropin-container');
