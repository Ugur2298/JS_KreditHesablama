function getCalculate()
{
    let creditMoney, creditMonth;
    let monthlyMoney, maxPaidMoney;

    creditMoney=document.getElementById("creditAmount").value;
    var list=document.getElementById("creditMonth")
    creditMonth=list.options[list.selectedIndex].value;
    
    maxPaidMoney=creditMoney*1.1;
    monthlyMoney=maxPaidMoney/creditMonth;

    document.querySelector("#result").innerHTML="Geri odenilecek mebleg:"+" "+maxPaidMoney+" "+ "Ayliq odenis:"+" "+ monthlyMoney;
}