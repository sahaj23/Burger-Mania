$(document).ready(function () {
  totalAmount = 0;
  totalQuantity = 0;
  burgers = window.localStorage.getItem("burgers");
  populate = JSON.parse(burgers);
  console.log(populate);
  $("#table").bootstrapTable({
    data: populate,
  });

  $("#table tr ").each(function (i, row) {
    var $row = $(row);
    var price = $row.find("td:nth-child(3)").text();
    var quantity = $row.find("td:nth-child(4)").text();
    console.log(quantity);
    if (quantity != "") {
      $row.find("td:nth-child(5)").text(parseInt(price) * parseInt(quantity));
      var amt = parseInt(price) * parseInt(quantity);

      console.log(amt);
      totalAmount += amt;
      totalQuantity += parseInt(quantity);
      var markup =
        "<td><button class='btn btn-danger' onclick='deleteRow(this)'>X</button></td>";
      $(row).append(markup);
      $("#totalQty").text(totalQuantity);
      $("#totalAmt").text(totalAmount);
    }
  });
  if (totalQuantity == 0) {
    document.getElementById("placeOrderBtn").disabled = true;
  }
});

function deleteRow(o) {
  var qty = parseInt(o.parentNode.parentNode.childNodes[3].innerText);
  totalAmount -=
    parseInt(o.parentNode.parentNode.childNodes[2].innerText) * qty;
  totalQuantity -= qty;
  $("#totalQty").text(totalQuantity);
  $("#totalAmt").text(totalAmount);
  if (totalQuantity == 0) {
    document.getElementById("placeOrderBtn").disabled = true;
  }
  var p = o.parentNode.parentNode;
  p.parentNode.removeChild(p);
}
function placeOrder() {
  var data = {
    totalQuantity: totalQuantity,
    totalPrice: totalAmount,
  };
  $.ajax({
    type: "POST",
    url: "http://localhost:9876/orders",
    dataType: "JSON",
    contentType: "application/json",
    data: JSON.stringify(data),
    success: function (data) {
      $(".outer").remove();
      $(".infoDiv").append(
        "<h3>Transaction details</h3>" +
          "<table class='table' id='tb'><tbody>" +
          "<tr>" +
          "<th>Total Quanity</th>" +
          "<td>" +
          data.quantity +
          "</td>" +
          "</tr>" +
          "<tr>" +
          "<th>Discount</th>" +
          "<td>" +
          data.discount +
          "%</td>" +
          "</tr>" +
          "<tr>" +
          "<th>Total Amount</th>" +
          "<td>" +
          data.price +
          "</td>" +
          "</tr>" +
          "</tbody></table><br><br><br><h4>Please wait while you are being redirected to home page...</h4>"
      );
      window.localStorage.removeItem("burgers");
      setTimeout(function () {
        window.location = "index.html";
      }, 5000);
    },
    error: function () {
      alert("lol");
    },
  });
}
