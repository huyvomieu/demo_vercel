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

  document.addEventListener("DOMContentLoaded", () => {
    const showButton = document.getElementById("showMessageButton");
    const closeButton = document.getElementById("closeMessageButton");
    const acceptButton = document.getElementById("acceptMessageButton");
    const customMessage = document.getElementById("customMessage");

    // Hiển thị thông báo với hiệu ứng
    showButton.addEventListener("click", () => {
      customMessage.classList.remove("hidden");
      customMessage.classList.add("show");
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

  // Fake ticket data
  const tickets = [
    {
      orderID: "AVT123456",
      seats: "A1, A2",
      date: "25/12/2024",
      time: "7:00 PM",
      room: "Room 1",
      price: "200,000",
      discount: "10%",
      totalPrice: "180,000",
    },
    {
      orderID: "HP987654",
      seats: "B1, B2",
      date: "01/01/2025",
      time: "8:00 PM",
      room: "Room 2",
      price: "300,000",
      discount: "5%",
      totalPrice: "285,000",
    },
    {
      orderID: "SGK555555",
      seats: "C1, C2",
      date: "10/02/2025",
      time: "9:00 PM",
      room: "Room 3",
      price: "250,000",
      discount: "15%",
      totalPrice: "212,500",
    },
    {
      orderID: "OPM111111",
      seats: "D1, D2",
      date: "20/03/2025",
      time: "6:00 PM",
      room: "Room 4",
      price: "150,000",
      discount: "0%",
      totalPrice: "150,000",
    },
    {
      orderID: "DR999999",
      seats: "E1, E2",
      date: "05/04/2025",
      time: "5:00 PM",
      room: "Room 5",
      price: "100,000",
      discount: "20%",
      totalPrice: "80,000",
    },
  ];

  // Hiển thị chi tiết vé
  function showTicketDetail(index) {
    const ticket = tickets[index];
    document.getElementById("orderID").textContent = ticket.orderID;
    document.getElementById("seats_buy").textContent = ticket.seats;
    document.getElementById("datetimeticket").textContent = ticket.date;
    document.getElementById("time").textContent = ticket.time;
    document.getElementById("Room").textContent = ticket.room;
    document.getElementById("price").textContent = ticket.price + " VND";
    document.getElementById("discount").textContent = ticket.discount;
    document.getElementById("totalPrice").textContent =
      ticket.totalPrice + " VND";

    // Hiển thị div.pr
    const prElement = document.querySelector(".tk_pr");
    prElement.classList.add("active");

    // Tự động loại bỏ class "active" khỏi tất cả các phần tử
    document.querySelectorAll(".toggle-element").forEach(function (el) {
      el.classList.remove("active");
    });

    // Thêm class "active" vào phần tử hiện tại
    document
      .querySelectorAll(".toggle-element")
      [index].classList.add("active");
  }

  // Reset chi tiết vé và ẩn div.pr
  function resetDetail() {
    document.getElementById("orderID").textContent = "XXXXXXXXX";
    document.getElementById("seats_buy").textContent = "XX";
    document.getElementById("datetimeticket").textContent = "XX/XX/XXXX";
    document.getElementById("time").textContent = "XX:XX am";
    document.getElementById("Room").textContent = "XXXXXXXXXX";
    document.getElementById("price").textContent = "XXXXXXXXXX VND";
    document.getElementById("discount").textContent = "XX%";
    document.getElementById("totalPrice").textContent = "XXXXXXXX VND";

    // Ẩn div.pr
    const prElement = document.querySelector(".tk_pr");
    prElement.classList.remove("active");

    // Loại bỏ class "active" khỏi tất cả các toggle-element
    document.querySelectorAll(".toggle-element").forEach(function (el) {
      el.classList.remove("active");
    });
  }