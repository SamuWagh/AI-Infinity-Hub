// Open tool in new tab
function openTool(url) {
  window.open(url, "_blank");
}

// 🔍 Search functionality with jQuery
$(document).ready(function() {
  $("#search").on("keyup", function() {
    let value = $(this).val().toLowerCase();
    $(".category").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
