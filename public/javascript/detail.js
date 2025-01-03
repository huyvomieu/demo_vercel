// Huy code thêm
var idMovie = document.getElementById("idmovie").value;
var quantityTicket = 1;
var dsTicket = []
// Call API danh sách vé
document.getElementById("dateInput").addEventListener("change", (e) => {
  var date = e.target.value;
  fetch(
    `${window.location.origin}/api/v1/ticket?id_movie=${idMovie}&date=${date}`
  )
    .then((response) => response.json())
    .then((data) => {
      let tickets = [...data];
      dsTicket = [...data];
      var html = "<option selected disabled> Chọn khung giờ chiếu trong ngày!</option>";
      tickets.forEach((ticket) => {
        html += `<option value= '${ticket.timestart}' price= '${ticket.price}' ticket-id = '${ticket._id}'>${ticket.timestart}  </option>`;
      });
      if (!html) {
        html = `<option disabled> Không có khung giờ chiếu nào trong ngày!</option>`;
      }

      document.getElementById("timeofTicket").innerHTML = html;
    })
    .catch(() => {
      console.log("error");
    });
});
document.getElementById("timeofTicket").addEventListener("change", (e) => {
  var seatContainer = document.querySelector('#seat-container')
  var ticket = dsTicket.filter(item => item.timestart == e.target.value)[0];
  var arraySeats = ticket.seats;
  if (arraySeats.length > 0) {
    for (const seat of arraySeats) {
      seatContainer.querySelector(`div[data-seat="${seat}"]`).classList.replace('seat', 'conguoidat')
    }
  }
  else {
    seatContainer.querySelectorAll(`.conguoidat`).forEach(seatItem => {
      seatItem.classList.replace('conguoidat', 'seat')
    });
  }
});

document.getElementById("showMessageButton").addEventListener("click", (e) => {
  e.preventDefault();
  var orderID = document.getElementById("orderID").textContent;
  var seats = document.getElementById("seats_buy").textContent;
  var datetime = document.getElementById("datetimeticket").textContent;
  var price = document.getElementById("price").textContent;
  var total = document.getElementById("totalPrice").textContent;
  var ticket = document.getElementById("timeofTicket")
  // Lấy thẻ option đang được chọn
  const selectedOption = ticket.options[ticket.selectedIndex];
  const ticketId = selectedOption.getAttribute('ticket-id')

  if (!selectedOption) {
    alert("Không có vé nào được chọn")
    return
  }
  if (!seats || seats.includes("X")) {
    alert("Vui lòng chọn ghế ngồi");
    return;
  }
  if (!datetime || datetime.includes("X")) {
    alert("Vui lòng chọn thời gian!");
    return;
  }
  const form = document.getElementById("formSubmit");
  form.querySelector("#order_id").value = orderID;
  form.querySelector("#ticket_id").value = ticketId;
  form.querySelector("#seats").value = seats;
  form.querySelector("#time").value = datetime;
  form.querySelector("#price").value = price;
  form.querySelector("#total").value = total.slice(0, total.length - 3);
  // form.submit();
});

document.getElementById("closeMessageButton").addEventListener("click", (e) => {
  e.preventDefault();
});
// end Huy code thêm

document.addEventListener("DOMContentLoaded", function () {
  // Kiểm tra chiều cao của phần tử văn bản
  const desc = document.querySelector(".desc");
  const seeMore = document.querySelector(".see-more");
  const buyTicketButton = document.getElementById("showMessageButton");

  // Kiểm tra nếu chiều cao của đoạn văn bản lớn hơn 3 dòng
  if (desc.scrollHeight > desc.clientHeight) {
    seeMore.style.display = "inline-block"; // Hiển thị "See more"
  } else {
    seeMore.style.display = "none"; // Ẩn "See more" nếu văn bản không vượt quá 3 dòng
  }
});

function toggleText() {
  const storyline = document.querySelector(".st");
  const seeMore = document.querySelector(".see-more");
  storyline.classList.toggle("open"); // Thêm hoặc bỏ lớp 'open'

  if (storyline.classList.contains("open")) {
    seeMore.style.display = "none"; // Ẩn nút "See more" khi nội dung đã mở rộng
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
      seat.setAttribute('data-seat', `${String.fromCharCode(64 + i)}${j}`);
      seatContainer.appendChild(seat);

      seat.addEventListener("click", () => {
        if (!seat.classList.contains("occupied")) {
          seat.classList.toggle("selected"); // tggle là dùng để thêm class vào class đã có
        }
      });
    }
  }
});



// Lắng nghe sự kiện click vào tất cả các phần tử có class "toggle-element"
document.querySelectorAll(".toggle-element").forEach(function (element) {
  element.addEventListener("click", function () {
    // Tự động loại bỏ class "active" khỏi tất cả các phần tử
    document.querySelectorAll(".toggle-element").forEach(function (el) {
      el.classList.remove("active");
    });

    // Thêm class "active" vào phần tử hiện tại
    this.classList.add("active");
  });
});

// xuwr lys su kien
function submit_seats() {
  // Lấy tất cả các ghế đã được chọn
  const selectedSeats = document.querySelectorAll(".seat.selected");

  // Lấy thông tin (nội dung) của các ghế đã chọn
  const selectedSeatNumbers = Array.from(selectedSeats).map(
    (seat) => seat.innerText
  );

  // Hiển thị danh sách ghế đã chọn trong thẻ <p> có id="seats_buy"
  const seatsBuyElement = document.getElementById("seats_buy");
  if (selectedSeatNumbers.length > 0) {
    // Cập nhật danh sách ghế đã chọn vào phần tử với id="seats_buy"
    seatsBuyElement.textContent = `${selectedSeatNumbers.join(", ")}`;

    // Tính tổng số ghế đã chọn và hiển thị
    quantityTicket = selectedSeatNumbers.length;
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

  const dateInput = document.getElementById("dateInput").value;
  const timeofTicket = document.getElementById("timeofTicket").value;
  const selectedTime = document.getElementById("timeofTicket");
  const price =
    selectedTime.options[selectedTime.selectedIndex].getAttribute("price");

  if (!price) {
    alert("Không có giờ chiếu nào với ngày bạn chọn! \nVui lòng chọn ngày khác")
    return
  }
  // Tạo chuỗi thời gian đã chọn
  const timedachon = `${timeofTicket}, ${dateInput}`;

  // Hiển thị thời gian đã chọn trong thẻ <p> có id="datetimeticket"
  const dateTimeTicketElement = document.getElementById("datetimeticket");
  dateTimeTicketElement.textContent = timedachon;

  document.getElementById("price").textContent = price;
  document.getElementById("totalPrice").textContent =
    price * quantityTicket + "VND";

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
  /////////// fix lỗi làm mờ khi chưa chọn chỗ 
  const buyTicketButton = document.getElementById("showMessageButton");
  const submitSeatsButton = document.getElementById("submit-seats");
  const submitTimeButton = document.querySelector(".subtime");

  // Mặc định nút Buy Ticket bị vô hiệu hóa
  buyTicketButton.disabled = true;

  // Kiểm tra điều kiện khi chọn ghế
  submitSeatsButton.addEventListener("click", function () {
    const seatSelected = document.querySelectorAll('.seat.selected').length > 0;
    checkButtonStatus(seatSelected);
  });

  // Kiểm tra điều kiện khi chọn thời gian
  submitTimeButton.addEventListener("click", function () {
    const timeSelected = document.getElementById('dateInput').value !== "" &&
      document.getElementById('timeofTicket').value !== ""
    checkButtonStatus(true, timeSelected);  // Cả hai điều kiện đều phải được kiểm tra
  });

  // Hàm kiểm tra trạng thái nút Buy Ticket
  function checkButtonStatus(seatSelected = false, timeSelected = false) {
    if (seatSelected && timeSelected) {
      buyTicketButton.disabled = false; // Kích hoạt nút khi cả hai điều kiện được chọn
    } else {
      buyTicketButton.disabled = true;  // Giữ nút mờ đi nếu chưa chọn đủ
    }
  }

  // Cập nhật lại trạng thái nút khi load trang nếu ghế và thời gian đã được chọn từ trước
  const seatSelected = document.querySelectorAll('.seat.selected').length > 0;
  const timeSelected = document.getElementById('dateInput').value !== "" &&
    document.getElementById('timeofTicket').value !== "";
  checkButtonStatus(seatSelected, timeSelected);

});

// Một số mã giảm giá giả
const discountCodes = {
  GIAM30: 0.3, // 30% giảm
  GIAM50: 0.5, // 50% giảm
  GIAM10: 0.1, // 10% giảm
  GIAM70: 0.7,
  GIAM20: 0.2,
  GIAM40: 0.4,
  GIAM60: 0.6,
  GIAM80: 0.8,
  GIAM90: 0.9,
  GIAM100: 0.0,
};

function applyDiscount() {
  // Lấy giá trị mã giảm giá từ input
  const discountCode = document
    .getElementById("discount")
    .value.trim()
    .toUpperCase();
  const priceElement = document.getElementById("price");
  const totalPriceElement = document.getElementById("totalPrice");

  // Lấy giá gốc từ phần tử price
  let price = parseInt(priceElement.textContent.replace(" VND", "").trim(), 10);

  // Kiểm tra mã giảm giá có hợp lệ không
  if (discountCodes[discountCode]) {
    const discount = discountCodes[discountCode]; // Lấy phần trăm giảm
    const discountedPrice = price - price * discount; // Tính giá sau giảm

    // Cập nhật giá sau khi giảm
    totalPriceElement.textContent = `${discountedPrice} VND`;
  } else if (discountCode == "") {
    totalPriceElement.textContent = `${price} VND`;
  } else {
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
  const discountCode = document
    .getElementById("discount")
    .value.trim()
    .toUpperCase();
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

document.addEventListener("DOMContentLoaded", () => {
  const showButton = document.getElementById("showMessageButton");
  const closeButton = document.getElementById("closeMessageButton");
  const acceptButton = document.getElementById("acceptMessageButton");
  const customMessage = document.getElementById("customMessage");

  // Hiển thị thông báo với hiệu ứng
  showButton.addEventListener("click", () => {
    customMessage.classList.remove("hidden");
    customMessage.classList.add("show");
    console.log("ok")
  });

  // Ẩn thông báo với hiệu ứng
  closeButton.addEventListener("click", () => {
    customMessage.classList.remove("show");
    customMessage.classList.add("hidden");
  });

  acceptButton.addEventListener("click", () => {
    customMessage.classList.remove("show");
    customMessage.classList.add("hidden");
  });
});

// fix lỗi làm mờ button khi không có chỗ và time
