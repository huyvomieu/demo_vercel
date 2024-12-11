// Huy code thêm
var idMovie = document.getElementById('idmovie').value
var quantityTicket = 1;


document.getElementById('dateInput').addEventListener('change', e=> {
  var date = e.target.value
  fetch(`${window.location.origin}/api/v1/ticket?id_movie=${idMovie}&date=${date}`)
    .then(response => response.json())
    .then(data => {
        let tickets = [...data];
        var html = ""
        tickets.forEach(ticket => {
          html += `<option value= '${ticket.timestart}' price= '${ticket.price}'>${ticket.timestart}  </option>`
        })
        document.getElementById('timeofTicket').innerHTML = html;
    })
    .catch(() => {
        console.log("error")
    })
})

document.getElementById('acceptMessageButton').addEventListener('click', e => {
  e.preventDefault();
  var orderID = document.getElementById('orderIDtb').textContent;
  var seats = document.getElementById('seats_buytb').textContent;
  var datetime = document.getElementById('datetimetickettb').textContent;
  var price = document.getElementById('pricetb').textContent;
  var total = document.getElementById('totalPricetb').textContent;
  if(!seats) {
    alert("Vui lòng chọn ghế ngồi");
    return;
  }
  if(!datetime) {
    alert("Vui lòng chọn thời gian!");
    return;
  }
  const form = document.getElementById('formSubmit')
  form.querySelector('#order_id').value = orderID
  form.querySelector('#seats').value = seats
  form.querySelector('#time').value = datetime
  form.querySelector('#price').value = price
  form.querySelector('#total').value = total.slice(0, total.length-3)
  form.submit();
})

document.getElementById('closeMessageButton').addEventListener('click', e => {
  e.preventDefault();
})
// end Huy code thêm

document.addEventListener("DOMContentLoaded", function() {
  // Kiểm tra chiều cao của phần tử văn bản
  const desc = document.querySelector('.desc');
  const seeMore = document.querySelector('.see-more');
  
  // Kiểm tra nếu chiều cao của đoạn văn bản lớn hơn 3 dòng
  if (desc.scrollHeight > desc.clientHeight) {
      seeMore.style.display = 'inline-block'; // Hiển thị "See more"
  } else {
      seeMore.style.display = 'none'; // Ẩn "See more" nếu văn bản không vượt quá 3 dòng
  }
});
 
function toggleText() {
  const storyline = document.querySelector('.st');
  const seeMore = document.querySelector('.see-more');
  storyline.classList.toggle('open'); // Thêm hoặc bỏ lớp 'open'

  if (storyline.classList.contains('open')) {
      seeMore.style.display = 'none'; // Ẩn nút "See more" khi nội dung đã mở rộng
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const seatContainer = document.getElementById("seat-container");

  // Create seat grid
  const rows = 10;
  const cols = 13;
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      const seat = document.createElement("div");
      seat.className = "seat";
      seat.innerText = `${String.fromCharCode(64 + i)}${j}`;
      seatContainer.appendChild(seat);

      seat.addEventListener("click", () => {
        if (!seat.classList.contains("occupied")) {
          seat.classList.toggle("selected"); // tggle là dùng để thêm class vào class đã có
        }
      });
    }
  }
});

////////////////////////// dung de sinh time 
// Hàm kiểm tra năm nhuận
function isLeapYear(year) {
return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}



// Gọi hàm khởi tạo khi tải trang
window.onload = () => {
};

// Lắng nghe sự kiện click vào tất cả các phần tử có class "toggle-element"
document.querySelectorAll('.toggle-element').forEach(function(element) {
  element.addEventListener('click', function() {
      // Tự động loại bỏ class "active" khỏi tất cả các phần tử
      document.querySelectorAll('.toggle-element').forEach(function(el) {
          el.classList.remove('active');
      });

      // Thêm class "active" vào phần tử hiện tại
      this.classList.add('active');
  });
});

// xuwr lys su kien
function submit_seats() {
// Lấy tất cả các ghế đã được chọn
const selectedSeats = document.querySelectorAll(".seat.selected");

// Lấy thông tin (nội dung) của các ghế đã chọn
const selectedSeatNumbers = Array.from(selectedSeats).map(seat => seat.innerText);

// Hiển thị danh sách ghế đã chọn trong thẻ <p> có id="seats_buy"
const seatsBuyElement = document.getElementById("seats_buy");
if (selectedSeatNumbers.length > 0) {
  // Cập nhật danh sách ghế đã chọn vào phần tử với id="seats_buy"
  seatsBuyElement.textContent = `${selectedSeatNumbers.join(", ")}`;

  // Tính tổng số ghế đã chọn và hiển thị
  quantityTicket  = selectedSeatNumbers.length;

} else {
  // Nếu không có ghế nào được chọn
  alert("Bạn chưa chọn ghế nào cả !!!!!!");
  seatsBuyElement.textContent = "XXXX";
  priceElement.innerHTML = "XXXX <span>VND</span>";
  totalPriceElement.innerHTML = "XXXX <span>VND</span>";
}
}

function submittime() {
// Lấy giá trị từ các trường trong form

const dateInput = document.getElementById('dateInput').value;
const timeofTicket = document.getElementById('timeofTicket').value;
const selectedTime = document.getElementById('timeofTicket');
const price = selectedTime.options[selectedTime.selectedIndex].getAttribute('price')

console.log(price)
// Tạo chuỗi thời gian đã chọn
const timedachon = `${timeofTicket}, ${dateInput}`;

// Hiển thị thời gian đã chọn trong thẻ <p> có id="datetimeticket"
const dateTimeTicketElement = document.getElementById('datetimeticket');
dateTimeTicketElement.textContent = timedachon;

document.getElementById("price").textContent = price
document.getElementById('totalPrice').textContent = price*quantityTicket + "VND"

// Log thông tin ra console (tuỳ chọn)
console.log(timedachon);
}

document.addEventListener("DOMContentLoaded", () => {
// Tạo Order ID ngẫu nhiên
function generateOrderID() {
  return Math.floor(100000000 + Math.random() * 900000000); // Tạo số ngẫu nhiên 9 chữ số
}

// Hiển thị Order ID khi trang tải hiển thị qua <p id="orderID">XXXXXXXXX</p>
const orderIDElement = document.getElementById("orderID");
orderIDElement.textContent = generateOrderID();
});

// Một số mã giảm giá giả
const discountCodes = {
  'GIAM30': 0.30, // 30% giảm
  'GIAM50': 0.50, // 50% giảm
  'GIAM10': 0.10,  // 10% giảm
  'GIAM70': 0.70,
  'GIAM20': 0.20,
  'GIAM40': 0.40,
  'GIAM60': 0.60,
  'GIAM80': 0.80,
  'GIAM90': 0.90,
  'GIAM100': 0.0
};

function applyDiscount() {
  // Lấy giá trị mã giảm giá từ input
  const discountCode = document.getElementById('discount').value.trim().toUpperCase();
  const priceElement = document.getElementById('price');
  const totalPriceElement = document.getElementById('totalPrice');
  
  // Lấy giá gốc từ phần tử price
  let price = parseInt(priceElement.textContent.replace(' VND', '').trim(), 10);

  // Kiểm tra mã giảm giá có hợp lệ không
  if (discountCodes[discountCode]) {
      const discount = discountCodes[discountCode]; // Lấy phần trăm giảm
      const discountedPrice = price - (price * discount); // Tính giá sau giảm

      // Cập nhật giá sau khi giảm
      totalPriceElement.textContent = `${discountedPrice} VND`;
  } else if(discountCode==""){
      totalPriceElement.textContent = `${price} VND`;
  } else{
      // Nếu mã giảm giá không hợp lệ, thông báo lỗi
      alert("Mã giảm giá không hợp lệ.");
  }
}

// thong baos
function buyticket() {
  var order = document.getElementById("orderID").textContent;
  var seat = document.getElementById("seats_buy").textContent;
  var dt = document.getElementById("datetimeticket").textContent;
  var price = document.getElementById("price").textContent;
  var total = document.getElementById("totalPrice").textContent;

  // Lấy mã giảm giá
  const discountCode = document.getElementById('discount').value.trim().toUpperCase();
  let discount = 0; // Mặc định không có giảm giá

  // Kiểm tra mã giảm giá
  if (discountCodes[discountCode]) {
      discount = discountCodes[discountCode] * 100 + "%"; // Chuyển thành phần trăm
  } else {
      discount = "0%"; // Không có mã giảm giá
  }

  // Gán giá trị cho thông báo
  document.getElementById("discounttb").textContent = discount;
  document.getElementById("orderIDtb").textContent = order;
  document.getElementById("seats_buytb").textContent = seat;
  document.getElementById("datetimetickettb").textContent = dt;
  document.getElementById("pricetb").textContent = price;
  document.getElementById("totalPricetb").textContent = total;

  console.log(order, seat, dt, price, discount, total);
}

document.addEventListener('DOMContentLoaded', () => {
  const showButton = document.getElementById('showMessageButton');
  const closeButton = document.getElementById('closeMessageButton');
  const acceptButton = document.getElementById('acceptMessageButton');
  const customMessage = document.getElementById('customMessage');

  
  
  // Hiển thị thông báo với hiệu ứng
  showButton.addEventListener('click', () => {
    customMessage.classList.remove('hidden');
    customMessage.classList.add('show');
    
    
  });

  // Ẩn thông báo với hiệu ứng
  closeButton.addEventListener('click', () => {
    customMessage.classList.remove('show');
    customMessage.classList.add('hidden');
  });
  
  acceptButton.addEventListener('click', () => {
    customMessage.classList.remove('show');
    customMessage.classList.add('hidden');
  });
});