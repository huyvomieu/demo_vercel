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

// document.addEventListener("DOMContentLoaded", () => {
//   const showButton = document.getElementById("showMessageButton");
//   const closeButton = document.getElementById("closeMessageButton");
//   const acceptButton = document.getElementById("acceptMessageButton");
//   const customMessage = document.getElementById("customMessage");

//   // Hiển thị thông báo với hiệu ứng
//   showButton.addEventListener("click", () => {
//     customMessage.classList.remove("hidden");
//     customMessage.classList.add("show");
//   });

//   // Ẩn thông báo với hiệu ứng
//   closeButton.addEventListener("click", () => {
//     customMessage.classList.remove("show");
//     customMessage.classList.add("hidden");
//   });

//   acceptButton.addEventListener("click", () => {
//     customMessage.classList.remove("show");
//     customMessage.classList.add("hidden");
//   });
// });


// Hiển thị chi tiết vé
function showTicketDetail(id) {
  console.log(id)

  // Hiển thị div.pr
  const prElement = document.querySelector(".tk_pr");
  prElement.classList.add("active");

  // Tự động loại bỏ class "active" khỏi tất cả các phần tử
  document.querySelectorAll("[order_id]").forEach(function (el) {
    el.classList.remove("active");
  });

  // Thêm class "active" vào phần tử hiện tại
  document.querySelector(`[order_id='${id}']`).classList.add("active");
}

// Reset chi tiết vé và ẩn div.pr
function resetDetail() {
  // document.getElementById("orderID").textContent = "XXXXXXXXX";
  // document.getElementById("seats_buy").textContent = "XX";
  // document.getElementById("datetimeticket").textContent = "XX/XX/XXXX";
  // document.getElementById("time").textContent = "XX:XX am";
  // document.getElementById("Room").textContent = "XXXXXXXXXX";
  // document.getElementById("price").textContent = "XXXXXXXXXX VND";
  // document.getElementById("discount").textContent = "XX%";
  // document.getElementById("totalPrice").textContent = "XXXXXXXX VND";

  // Ẩn div.pr
  const prElement = document.querySelector(".tk_pr");
  prElement.classList.remove("active");

  // Loại bỏ class "active" khỏi tất cả các toggle-element
  document.querySelectorAll(".toggle-element").forEach(function (el) {
    el.classList.remove("active");
  });
}