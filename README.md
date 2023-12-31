# DGL 113 2024WI Assignment #1

In the `docs/app.js` file, declare and and initialize the following variables:

- `guestName` containing the name of the guest (e.g. 'Adam Smith')
- `numberOfNights` containing the number of nights of the hotel stay (e.g. 7)
- `nightlyRate` containing the nightly rate for the hotel room (e.g. $225)
- `pstRate` containing the rate of the provincial sales tax (e.g. 8%)
- `gstRate` containing the rate of the goods and services tax (e.g. 5%)
- `subTotal` containg the cost of the hotel room for the entire stay before taxes;
  this will be an arithmetic expression based on `numberOfNights` and `nightlyRate`
- `pstAmount` containg the dollar amount for the provincial sales tax for this
  hotel stay; this will be an arithmetic expression based on `pstRate` and `subTotal`
- `gstAmount` containg the dollar amount for the goods and services tax for this
  hotel stay; this will be an arithmetic expression based on `gstRate` and `subTotal`
- `total` containg the total cost of the hotel room for the entire stay including taxes;
  this is will be an arithmetic expression based on `subTotal`, `pstAmount`, and `gstAmount`

Be sure to try different values for `numberOfNights`, `nightlyRate`, `pstRate`, and `gstRate`
to confirm that all the arithmetic expressions are calculating everything correctly.

Before final stage, commit, and push, be sure to set the variables as follows:

- `guestName` to 'Adam Smith'
- `numberOfNights` to 7
- `nightlyRate` to $225
- `pstRate` to 8%
- `gstRate` to 5%

NOTE: Only modify the `docs/app.js` file. Do not make changes to any other files.

The final result will look like the image below.

![screenshot](screenshot.png)
