function text() {
const submit = document.getElementById("submit")
submit.addEventListener("click", (e) => {
  const formData = new FormData(document.getElementById("form"));
  const XHR = new XMLHttpRequest();
  XHR.open("POST", "/balances", true);
  XHR.responseType = "json";
  XHR.send(formData);
  XHR.onload = () => {
    if (XHR.status != 200) {
      alert(`Error ${XHR.status}: ${XHR.statusText}`);
      return null;
    }
    console.log(XHR.response)
    const item = XHR.response.balance;
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
  const list = document.getElementById("list");
  const formCategory = document.getElementById("category_id")
  const formDetail = document.getElementById("detail")
  const formMoneyAmount = document.getElementById("money_amount")
  const HTML = `
    
    <ul>
    <li>${name}</li>
    <li>${item.detail}</li>
    <li>${item.money_amount}</li>
    <li>
  </ul>`;
  list.insertAdjacentHTML("afterend", HTML);
  formCategory.value = ""
  formDetail.value = ""
  formMoneyAmount.value = ""
  };
  e.preventDefault();
});
}
window.addEventListener("load", text);