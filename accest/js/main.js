// document.addEventListener('DOMContentLoaded', function () { 
//   var header = document.querySelector(".header").innerHTML;
//   var footer = document.querySelector(".footer").innerHTML;
//   var headerIndex = document.getElementById("headerIndex");
//   var footerIndex = document.getElementById("footerIndex");

//    headerIndex.innerHTML = header;
//    footerIndex.innerHTML = footer;

// });
// /accest/js/main.js
document.addEventListener('DOMContentLoaded', function () {
  // Hàm tải và chèn nội dung HTML
  // function loadHtmlIntoElement(filePath, targetElementId) {
  //   const targetElement = document.getElementById(targetElementId);
  //   if (!targetElement) {
  //     console.error(`Không tìm thấy phần tử với ID: ${targetElementId}`);
  //     return;
  //   }

  //   fetch(filePath)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(`Lỗi tải file ${filePath}: ${response.statusText}`);
  //       }
  //       return response.text();
  //     })
  //     .then(html => {
  //       targetElement.innerHTML = html;
  //     })
  //     .catch(error => {
  //       console.error('Lỗi khi tải nội dung:', error);
  //       targetElement.innerHTML = `<p style="color: red;">Không thể tải ${filePath}.</p>`;
  //     });
  // }

  // // Gọi hàm để tải và chèn header
  // loadHtmlIntoElement('/header.html', 'headerIndex');

  // // Gọi hàm để tải và chèn footer
  // loadHtmlIntoElement('/footer.html', 'footerIndex');

  $(".headerIndex").load("header.html");
  $(".footerIndex").load("footer.html");
});
