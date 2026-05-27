function calculateBudget() {
    let twd = parseFloat(document.getElementById('twdAmount').value);
    let rate = parseFloat(document.getElementById('rate').value);
    let currencyName = document.getElementById('rate').options[document.getElementById('rate').selectedIndex].text.split(' ')[0];
    
    let pStay = parseFloat(document.getElementById('pStay').value) || 0;
    let pFood = parseFloat(document.getElementById('pFood').value) || 0;
    let pTraffic = parseFloat(document.getElementById('pTraffic').value) || 0;
    let pShopping = parseFloat(document.getElementById('pShopping').value) || 0;

    let totalPercent = pStay + pFood + pTraffic + pShopping;
    if (totalPercent !== 100) {
        alert("錯誤：您的分配比例總和為 " + totalPercent + "%，必須剛好等於 100% 才能正確計算喔！");
        return;
    }
    
    if (isNaN(twd) || twd <= 0) { alert("請輸入正確預算"); return; }
    
    let total = twd * rate;
    document.getElementById('totalForeign').innerText = `總外幣: ${total.toLocaleString()} ${currencyName}`;
    
    document.getElementById('lblStay').innerText = `🏠 住宿預算 (${pStay}%)`;
    document.getElementById('lblFood').innerText = `🍱 美食預算 (${pFood}%)`;
    document.getElementById('lblTraffic').innerText = `🚌 交通預算 (${pTraffic}%)`;
    document.getElementById('lblShopping').innerText = `🛍️ 購物/預備金 (${pShopping}%)`;

    document.getElementById('stay').innerText = (total * (pStay / 100)).toLocaleString() + ` ${currencyName}`;
    document.getElementById('food').innerText = (total * (pFood / 100)).toLocaleString() + ` ${currencyName}`;
    document.getElementById('traffic').innerText = (total * (pTraffic / 100)).toLocaleString() + ` ${currencyName}`;
    document.getElementById('shopping').innerText = (total * (pShopping / 100)).toLocaleString() + ` ${currencyName}`;
    
    document.getElementById('result').style.display = 'block';
}
