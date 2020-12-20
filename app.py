import Adyen
ady = Adyen.Adyen()
 
ady.payment.client.platform = "test_H5T4RJ2U5ZCALOYK46JK7T6IK4RW655F"
ady.payment.client.xapikey = "AQEyhmfxKYLObRNKw0m/n3Q5qf3VaY9UCJ14XWZE03G/k2NFisuRs7z7KhB9kBC+ZOWG3q8QwV1bDb7kfNy1WIxIIkxgBw==-4HKICWIDhG8LHS5WQIjtc87Qxi+fkyN1wJo3s2XzGEU=-78wF+<p7,84eKmX;"

# Set X-API-KEY with the API key from the Customer Area.
adyen = Adyen.Adyen()
adyen.payment.client.platform = "test"
adyen.client.xapikey = 'AQEyhmfxKYLObRNKw0m/n3Q5qf3VaY9UCJ14XWZE03G/k2NFisuRs7z7KhB9kBC+ZOWG3q8QwV1bDb7kfNy1WIxIIkxgBw==-4HKICWIDhG8LHS5WQIjtc87Qxi+fkyN1wJo3s2XzGEU=-78wF+<p7,84eKmX;'
 
request = {
    'merchantAccount': 'AdyenRecruitmentCOM',
    'countryCode': 'NL',
    'shopperLocale': 'nl-NL',
    'amount': {
        'value': 1000,
        'currency': 'EUR'
    },
    'channel': 'Web'
}
response = adyen.checkout.payment_methods(request)
# Pass the response to your front end

{
  "paymentMethods":[
    {
      "details": [
        {
          "key": "number",
          "type": "text"
        },
        {
          "key": "expiryMonth",
          "type": "text"
        },
        {
          "key": "expiryYear",
          "type": "text"
        },
        {
          "key": "cvc",
          "type": "text"
        },
        {
          "key": "holderName",
          "type": "text"
        }
      ],
      "name": "Credit Card",
      "type": "scheme"
    },
    {
      "details":[
        {
          "key":"sepa.ownerName",
          "type":"text"
        },
        {
          "key":"sepa.ibanNumber",
          "type":"text"
        }
      ],
      "name":"SEPA Direct Debit",
      "type":"sepadirectdebit"
    },
    { "details":[
        {
            "type":"ideal",
            "issuer":"1121"
        }
       ],
       "name":"iDEAL",
       "type":"iDEAL"
    }
  ]
}

