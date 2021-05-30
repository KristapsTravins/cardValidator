console.log('Hello  This is  a  Creditcard  validator')
//Used Luhn Algorythm 
const credit = [
    {
      "CreditCard": {
        "IssuingNetwork": "American Express",
        "CardNumber": 373179808852769
      }
    },
    {
      "CreditCard": {
        "IssuingNetwork": "American Express",
        "CardNumber": 348802358322237
      }
    },
    {
      "CreditCard": {
        "IssuingNetwork": "American Express",
        "CardNumber": 379598807237678
      }
    },
    {
      "CreditCard": {
        "IssuingNetwork": "American Express",
        "CardNumber": 375493301563411
      }
    },
    {
      "CreditCard": {
        "IssuingNetwork": "American Express",
        "CardNumber": 373541805383900
      }
    }
  ];
  


  let cardNr = credit[3].CreditCard['CardNumber'].toString();
console.log(cardNr);
const NrValidator = (nr) =>{
const odd = [];
const even = [];
const reducer = (accumulator, curr) => accumulator + curr;
for(let i =0;i<nr.length;i++){
    i%2==0?even.push(parseInt(nr[i])):odd.push(parseInt(nr[i]));
};
const oddSum = odd.reduce(reducer);
const evenWork = (evernArr) =>{
  let resultArr = [];
  let evenTwo = [];
  for(j=0;j<even.length;j++){
  evenTwo.push(even[j]*2)
  }
  eventree = evenTwo.join('');
  for(k=0;k<eventree.length;k++){
    resultArr.push(parseInt(eventree[k]))
  };
  return resultArr.reduce(reducer);

};

return evenWork(even)+oddSum;
};
console.log(NrValidator(cardNr));
