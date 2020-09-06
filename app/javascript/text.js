function text() {
if (document.URL.match( /edit/ )) {

  const submit = document.getElementById("submit")
  const sumMoney = document.getElementById("sum-money")
  const dataAmount = sumMoney.getAttribute("data-amount")
  const list = document.getElementById("list")
  submit.addEventListener("click", (e) => {
    const formData = new FormData(document.getElementById("form"));
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/balances", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.response == null) {
        alert(`必須項目を入力してください`);
      } else {

        
        if (XHR.status != 200) {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;
        }
        
        console.log(XHR.response)
        const item = XHR.response.balance;
        console.log(item.money_amount)
        let name = ""
        if(item.category_id == 2){
          name = "食費"
        } else if (item.category_id == 3){
          name = "日常費"
        } else if (item.category_id == 4){
          name = "娯楽費"
        } else if (item.category_id == 5){
          name = "自己投資"
        } else if (item.category_id == 6){
          name = "交通費"
        } else if (item.category_id == 7){
          name = "固定費"
        } else if (item.category_id == 8){
          name = "収入"
        }
        const listElements = document.createElement('div')
        listElements.setAttribute('id', "list-element")
        if (item.balance == "収入"){
          listElements.setAttribute('data-id', item.money_amount)
        }else {
          listElements.setAttribute('data-id', -(item.money_amount))
        }
        list.appendChild(listElements)
        const listAll = document.querySelectorAll("#list-element")
        
        
        const formCategory = document.getElementById("category_id")
        const formDetail = document.getElementById("detail")
        const formMoneyAmount = document.getElementById("money_amount")
        const HTML = `
        
        <ul>
        <li>${listAll.length}</li>
        <li>${item.balance}</li>
        <li>${name}</li>
        <li>${item.detail}</li>
        <li>${item.money_amount}</li>
        <li>
        </ul>`;
        listElements.insertAdjacentHTML("afterend", HTML);
        formCategory.value = ""
        formDetail.value = ""
        formMoneyAmount.value = ""
        let sum = 0
        listAll.forEach(function (listElement) {
          const moneyId = listElement.getAttribute("data-id")
          sum = sum + Number(moneyId);
        })
        sumMoney.innerHTML = sum + Number(dataAmount);
        
      }
    };
        e.preventDefault();
    
  })
}
}
window.addEventListener("load",text);