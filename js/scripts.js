// Business Logic
var romanizer = (function(value){

  var numerals = ['M','D','C','L','X','V','I']
  var numeral = []
  var x = 0;
  var splitVal = value.split('');
  var revVar = splitVal.reverse();
  var checkValFinal = parseInt(value);
  if (checkValFinal < 4000){
    for (i = 0; i < splitVal.length; i++){
      if (splitVal[i] == "1"){
        numeral.push(numerals[6 - x]);
      } else if (splitVal[i] == "2"){
        numeral.push(numerals[6 - x] + numerals[6 - x]);
      }else if (splitVal[i] == "3"){
        numeral.push(numerals[6 - x] + numerals[6 - x] + numerals[6 - x]);
      }else if (splitVal[i] == "4"){
        numeral.push(numerals[6 - x] + numerals[5 - x]);
      }else if (splitVal[i] == "5"){
        numeral.push(numerals[5 - x]);
      }else if (splitVal[i] == "6"){
        numeral.push(numerals[5 - x] + numerals[6 - x]);
      }else if (splitVal[i] == "7"){
        numeral.push(numerals[5 - x] + numerals[6 - x] + numerals[6 - x]);
      }else if (splitVal[i] == "8"){
        numeral.push(numerals[5 - x] + numerals[6 - x] + numerals[6 - x] + numerals[6 - x]);
      }else if (splitVal[i] == "9"){
        numeral.push(numerals[6 - x] + numerals[4 - x]);
      }else {
        numeral.push('');
      }
      x = x + 2
    }
  }else {
    return "Romans didn't count this high.";
  }
  numeral = numeral.reverse();
  numeral = numeral.join('');
  return numeral
});
// interface logic
$(document).ready(function(){
  $('#submit').submit(function(event){
    event.preventDefault();
    var value = $('#field').val();
    var result = romanizer(value);
    $('#display').text(result);

  })
})
