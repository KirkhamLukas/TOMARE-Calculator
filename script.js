'use strict'
const showPrice = function () {
  //input
  const htmlArticlePrice = document.querySelector('.js-articlePrice');
  const articlePrice = htmlArticlePrice.value; //deducted per item
  const htmlShippingCost = document.querySelector('.js-shippingCost');
  const shippingCost = htmlShippingCost.value; //deducted per item
  const htmlTaxPercentage = document.querySelector('.js-taxPercentage');
  const taxPercentage = htmlTaxPercentage.value; //deducted per item
  const htmlPlatformFee = document.querySelector('.js-platformFee');
  const platformFee = htmlPlatformFee.value; //deducted once per month
  const htmlTransactionFee = document.querySelector('.js-transactionFee');
  const transactionFee = htmlTransactionFee.value; //deducted per item
  const htmlOtherFees = document.querySelector('.js-otherFees');
  const otherFees = htmlOtherFees.value; //deducted once per month
  const htmlQuantitySold = document.querySelector('.js-quantitySold');
  const quantitySold = htmlQuantitySold.value;
  const htmlRetailPrice = document.querySelector('.js-retailPrice');
  const retailPrice = htmlRetailPrice.value;

  //output
  const htmlFrame = document.querySelector('.js-output');
  let output = '';

  //berekenen
  const taxAmount = retailPrice * (taxPercentage/100);
  const perItem = ((retailPrice - articlePrice - shippingCost - transactionFee) - taxAmount) * quantitySold;
  const perMonth = perItem - platformFee - otherFees;

  output = `<h1>€${perMonth.toFixed(2)}</h1>`;

  //tonen
  htmlFrame.innerHTML = output;
};

const init = function () {
  console.log('Pagina geladen');
  //start je code hier
  const htmlKader = document.querySelector('.js-send');
  htmlKader.addEventListener('click', showPrice);
};

document.addEventListener('DOMContentLoaded', init);
