const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button4 = document.getElementById("btn4");
const button5 = document.getElementById("btn5");


button1.addEventListener("click", () => {
    fetchCoins("category1");
});

button2.addEventListener("click", () => {
    fetchCoins("category2");
});

button3.addEventListener("click", () => {
    fetchCoins("category3");
});
button4.addEventListener("click", () => {
  fetchCoins("category4");

});
button5.addEventListener("click", () => {
  fetchCoins("category5");
});
function fetchCoins(category) {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let filteredData = data.filter(coin => {
                // Perform filtering based on the category
                return true; // Replace this with your own filtering logic
            });

            let selectedCoins = [];
            for (let i = 0; i < 15; i++) {
                let randomIndex = Math.floor(Math.random() * filteredData.length);
                selectedCoins.push(filteredData[randomIndex]);
                filteredData.splice(randomIndex, 1);
            }

            // Render the selected coins to the page
            renderCoins(selectedCoins);
        })
        .catch(error => console.error(error));
}

function renderCoins(coins) {
    const tableBody = document.getElementById("coin-data");
    tableBody.innerHTML = "";

    coins.forEach(coin => {
        const { name, symbol, image, current_price, market_cap, price_change_percentage_24h, high_24h, low_24h, price_change_24h } = coin;
        const rank = coin.market_cap_rank;
        const chartUrl = `https://www.coingecko.com/en/coins/${coin.id}/chart`;

        const newRow = `
            <tr>
                <td>${rank}</td>
                <td>${name} (${symbol.toUpperCase()})</td>
                <td><img src="${image}" alt="${name}" width="32" height="32"></td>
                <td>$${current_price.toLocaleString()}</td>
                <td>${price_change_percentage_24h.toFixed(2)}%</td>
                <td>$${market_cap.toLocaleString()}</td>
                <td>$${high_24h.toLocaleString()}</td>
                <td>$${low_24h.toLocaleString()}</td>
                <td>$${price_change_24h.toLocaleString()}</td>
            </tr>
        `;

        tableBody.innerHTML += newRow;
    });
}



const tableBody = document.getElementById('coin-data');
            fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1')
                 .then(response => response.json())
                 .then(data => {
                        data.forEach(coin => {
                          const { name, symbol, image, current_price, market_cap, price_change_percentage_24h,high_24h,low_24h,price_change_24h} = coin;
                          const rank = coin.market_cap_rank;
                          const chartUrl = `https://www.coingecko.com/en/coins/${coin.id}/chart`;
              
                          const newRow = `
                            <tr>
                              <td>${rank}</td>
                              <td>${name} (${symbol.toUpperCase()})</td>
                              <td><img src="${image}" alt="${name}" width="32" height="32"></td>
                              <td>$${current_price.toLocaleString()}</td>
                              <td>${price_change_percentage_24h.toFixed(2)}%</td>
                              <td>$${market_cap.toLocaleString()}</td>
                              <td>$${high_24h.toLocaleString()}</td>
                              <td>$${low_24h.toLocaleString()}</td>
                              <td>$${price_change_24h.toLocaleString()}</td>
                              
                            </tr>
                          `;
              
                          tableBody.innerHTML += newRow;
                        });
                      })
                      .catch(error => console.log(error));

                    
                      function fetchTop10Coins() {
                        const tableBody = document.getElementById("coin-data");
                        fetch(
                          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
                        )
                          .then((response) => response.json())
                          .then((data) => {
                            const top10Coins = data.slice(0, 10);
                            tableBody.innerHTML = ""; // xóa bảng hiện tại
                            top10Coins.forEach((coin) => {
                              const { name, symbol, image, current_price, market_cap, price_change_percentage_24h, high_24h, low_24h, price_change_24h } = coin;
                              const rank = coin.market_cap_rank;
                              const chartUrl = `https://www.coingecko.com/en/coins/${coin.id}/chart`;
                      
                              const newRow = `
                                <tr>
                                  <td>${rank}</td>
                                  <td>${name} (${symbol.toUpperCase()})</td>
                                  <td><img src="${image}" alt="${name}" width="32" height="32"></td>
                                  <td>$${current_price.toLocaleString()}</td>
                                  <td>${price_change_percentage_24h.toFixed(2)}%</td>
                                  <td>$${market_cap.toLocaleString()}</td>
                                  <td>$${high_24h.toLocaleString()}</td>
                                  <td>$${low_24h.toLocaleString()}</td>
                                  <td>$${price_change_24h.toLocaleString()}</td>
                                </tr>
                              `;
                      
                              tableBody.innerHTML += newRow;
                            });
                          })
                          .catch((error) => console.log(error));
                      }
  const viewAllButton = document.getElementById('view-all-button');

viewAllButton.addEventListener('click', () => {
  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
    .then(response => response.json())
    .then(data => {
      tableBody.innerHTML = ''; // xóa toàn bộ dòng trong bảng để thêm lại danh sách mới
      data.forEach(coin => {
        const { name, symbol, image, current_price, market_cap, price_change_percentage_24h,high_24h,low_24h,price_change_24h} = coin;
        const rank = coin.market_cap_rank;
        const chartUrl = `https://www.coingecko.com/en/coins/${coin.id}/chart`;

        const newRow = `
          <tr>
            <td>${rank}</td>
            <td>${name} (${symbol.toUpperCase()})</td>
            <td><img src="${image}" alt="${name}" width="32" height="32"></td>
            <td>$${current_price.toLocaleString()}</td>
            <td>${price_change_percentage_24h.toFixed(2)}%</td>
            <td>$${market_cap.toLocaleString()}</td>
            <td>$${high_24h.toLocaleString()}</td>
            <td>$${low_24h.toLocaleString()}</td>
            <td>$${price_change_24h.toLocaleString()}</td>
          </tr>
        `;

        tableBody.innerHTML += newRow;
      });
    })
    .catch(error => console.log(error));
});
                
// const coins = ['bitcoin', 'ethereum', 'dogecoin', 'ripple','litecoin','binancecoin'];

// const tableBody = document.getElementById('table-body');

// // Tạo mảng chứa thông tin giá của từng đồng coin
// let coinPrices = coins.map(() => ({ usd: null, usd_24h_change: null, usd_market_cap: null }));

// const getCoinData = (coinId, index) => {
//   const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd,symbol&&include_market_cap=true&include_24hr_change=true&tickers=true`;
//   const coinName = coinId.charAt(0).toUpperCase() + coinId.slice(1);
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       const { usd, usd_24h_change, usd_market_cap } = data[coinId];

//       // Cập nhật giá cho đồng coin tương ứng trong mảng coinPrices
//       coinPrices[index] = { usd, usd_24h_change, usd_market_cap };

//       // Tạo mới bảng dựa trên mảng coinPrices
//       const rows = coinPrices.map(({ usd, usd_24h_change, usd_market_cap }, index) => `
//         <tr>
//           <td>${index + 1}</td>
//           <td>${coins[index].charAt(0).toUpperCase() + coins[index].slice(1)}</td>
//           <td>$${usd.toFixed(2)}</td>
//           <td>${usd_24h_change.toFixed(2)}%</td>
//           <td>$${usd_market_cap.toLocaleString()}</td>
//         </tr>
//       `);

//       // Cập nhật bảng trên trang web
//       tableBody.innerHTML = rows.join('');
//     })
//     .catch(error => console.log(error));
// };

// coins.forEach((coin, index) => getCoinData(coin, index));

