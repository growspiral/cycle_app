function text() {
if (document.URL.match( /edit/ )) {

  const submit = document.getElementById("submit")
  const sumMoney = document.getElementById("sum-money")
  const dataAmount = sumMoney.getAttribute("data-amount")
  const list = document.getElementById("list")
  submit.addEventListener("click", (e) => {
    const formData = new FormData(document.getElementById("form"));
    console.log(formData)
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/balances", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      console.log(formData)
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
        if (item.balance == "収入"){
          let HTML = `
          
          <ul class="list-content">
          <li class="lists-num">${listAll.length}</li>
          <li class="lists-balance">${item.balance}</li>
          <li class="lists-category">${name}</li>
          <li class="lists-detail">${item.detail}</li>
          <li class="lists-money">${item.money_amount}</li>
          
          </ul>`;
        }else {
           HTML = `
          
          <ul class="list-content">
          <li class="lists-num">${listAll.length}</li>
          <li class="lists-balance">${item.balance}</li>
          <li class="lists-category">${name}</li>
          <li class="lists-detail">${item.detail}</li>
          <li class="lists-money">${-(item.money_amount)}</li>
          
          </ul>`;

        }
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