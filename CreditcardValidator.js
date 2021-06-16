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

const FilterFaulty = () =>{ 
console.log("Faulty Card numbers :");
  for(var i = 0; i < credit.length ; i++) {
    let cardNr = credit[i].CreditCard['CardNumber'].toString();
    NrValidator(cardNr)%10 != 0?console.log(cardNr):true;
  }





};
console.log(FilterFaulty());

