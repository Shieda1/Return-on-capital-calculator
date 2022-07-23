// https://calculator.swiftutors.com/return-on-capital-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 =  document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const returnonCapitalRadio = document.getElementById('returnonCapitalRadio');
const netIncomeRadio = document.getElementById('netIncomeRadio');
const dividendsRadio = document.getElementById('dividendsRadio');
const debtRadio = document.getElementById('debtRadio');
const equityRadio = document.getElementById('equityRadio');

let returnonCapital;
let netIncome = v1;
let dividends = v2;
let debt = v3;
let equity = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

returnonCapitalRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Income';
  variable2.textContent = 'Dividends';
  variable3.textContent = 'Debt';
  variable4.textContent = 'Equity';
  netIncome = v1;
  dividends = v2;
  debt = v3;
  equity = v4;
});

netIncomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Return on Capital (%)';
  variable2.textContent = 'Dividends';
  variable3.textContent = 'Debt';
  variable4.textContent = 'Equity';
  returnonCapital = v1;
  dividends = v2;
  debt = v3;
  equity = v4;
});

dividendsRadio.addEventListener('click', function() {
  variable1.textContent = 'Return on Capital (%)';
  variable2.textContent = 'Net Income';
  variable3.textContent = 'Debt';
  variable4.textContent = 'Equity';
  returnonCapital = v1;
  netIncome = v2;
  debt = v3;
  equity = v4;
});

debtRadio.addEventListener('click', function() {
  variable1.textContent = 'Return on Capital (%)';
  variable2.textContent = 'Net Income';
  variable3.textContent = 'Dividends';
  variable4.textContent = 'Equity';
  returnonCapital = v1;
  netIncome = v2;
  dividends = v3;
  equity = v4;
});

equityRadio.addEventListener('click', function() {
  variable1.textContent = 'Return on Capital (%)';
  variable2.textContent = 'Net Income';
  variable3.textContent = 'Dividends';
  variable4.textContent = 'Debt';
  returnonCapital = v1;
  netIncome = v2;
  dividends = v3;
  debt = v4;
});

btn.addEventListener('click', function() {
  
  if(returnonCapitalRadio.checked)
    result.textContent = `Return on Capital = ${computeReturnonCapital().toFixed(2)}%`;

  else if(netIncomeRadio.checked)
    result.textContent = `Net Income = ${computeNetIncome().toFixed(2)}`;

  else if(dividendsRadio.checked)
    result.textContent = `Dividends = ${computeDividends().toFixed(2)}`;

  else if(debtRadio.checked)
    result.textContent = `Debt = ${computeDebt().toFixed(2)}`;

  else if(equityRadio.checked)
    result.textContent = `Equity = ${computeEquity().toFixed(2)}`;
})

// calculation

function computeReturnonCapital() {
  return ((Number(netIncome.value) - Number(dividends.value)) / (Number(debt.value) + Number(equity.value))) * 100;
}

function computeNetIncome() {
  return ((Number(returnonCapital.value) / 100) * (Number(debt.value) + Number(equity.value))) + Number(dividends.value);
}

function computeDividends() {
  return Number(netIncome.value) - ((Number(returnonCapital.value) / 100) * (Number(debt.value) + Number(equity.value)));
}

function computeDebt() {
  return ((Number(netIncome.value) - Number(dividends.value)) / (Number(returnonCapital.value) / 100)) - Number(equity.value);
}

function computeEquity() {
  return ((Number(netIncome.value) - Number(dividends.value)) / (Number(returnonCapital.value) / 100)) - Number(debt.value);
}