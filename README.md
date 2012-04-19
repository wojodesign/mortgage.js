# Mortgage.js

## Intro

This is a super simple Javascript Mortgage calculator.

This is very much a work in progress and not fully tested.  Use at your
own risk.

## Usage.

    var mortgage = new Mortgage.Calculator({
                        years: 30,
                        price: 100000,
                        market_value: 100000,
                        down_payment_percent: 10,
                        interest_percent: 6.5,
                        annual_taxes: 500,
                        annual_insurance: 500
                       });

    mortgage.monthly_payment() // without PMI
    mortgage.monthly_debt_service() // with PMI
    mortgage.annual_payment()  // without PMI
    mortgage.annual_debt_service()  // with PMI
    mortgage.amortization_table() // like what.

