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

// Hàm cập nhật số ngày trong tháng
function updateDays() {
  const year = new Date().getFullYear(); // Lấy năm hiện tại
  const month = parseInt(document.getElementById('month').value, 10);

  let daysInMonth;
  if (month === 2) {
    daysInMonth = isLeapYear(year) ? 29 : 28; // Tháng 2
  } else if ([4, 6, 9, 11].includes(month)) {
    daysInMonth = 30; // Các tháng có 30 ngày
  } else {
    daysInMonth = 31; // Các tháng có 31 ngày
  }

  const daySelect = document.getElementById('day');
  daySelect.innerHTML = ""; // Xóa các tùy chọn cũ
  for (let i = 1; i <= daysInMonth; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    daySelect.appendChild(option);
  }
}

// Khởi tạo năm hiện tại
function setCurrentYear() {
  const currentYear = new Date().getFullYear();
  document.getElementById('year').value = currentYear; // Hiển thị năm hiện tại
}

// Gọi hàm khởi tạo khi tải trang
window.onload = () => {
  setCurrentYear(); // Hiển thị năm hiện tại
  updateDays(); // Cập nhật số ngày
};
// ********* bấm chọn phưognt hức thanh toán
// document.getElementById("toggleElement").addEventListener("click", function() {
//     // Kiểm tra xem phần tử đã có class "active" hay chưa
//     if (this.classList.contains("active")) {
//         // Nếu có, loại bỏ class "active" và trở lại màu nền ban đầu
//         this.classList.remove("active");
//     } else {
//         // Nếu chưa, thêm class "active" và thay đổi màu nền
//         this.classList.add("active");
//     }
// });
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