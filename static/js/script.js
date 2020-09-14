(function () {
  let waitingServer = !1;

  const analyseBTN = document.querySelector(
    '.main-action button[type="button"]'
  );
  const analyseTEXT = document.querySelector('.main-action input[type="text"]');
  const resultContainer = document.querySelector(".result-container");
  const messageSYS = resultContainer.querySelector(".alert");

  showMSG = function (message, type = "alert-danger") {
    messageSYS.classList.remove("d-none");
    messageSYS.classList.add(type);
    messageSYS.innerHTML = message;
  };

  hideMSG = function () {
    messageSYS.setAttribute("class", "alert");
    messageSYS.classList.add("d-none");
    messageSYS.innerHTML = "";
  };

  request = function (url, params, method) {
    var http = new XMLHttpRequest();
    http.open(method, url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function () {
      if (http.readyState == 4 && http.status == 200) {
        resp = http.responseText;
        if (resp.length > 1) {
          html = resp;
          //remoteContainer.innerHTML = html;
          //remoteContainer.classList.remove("d-none");
        } else {
          showMSG("Something went wrong! :(");
          //container.classList.remove("d-none");
        }
      }
    };
    http.send(params);
  };

  analyseBTN.addEventListener(
    "click",
    function () {
      // Clear..
      hideMSG();
      var url = analyseTEXT.value;
      if (url.length > 0) {
        //startLoading();
        //request("/post", "url=" + url + "&type=" + "DESKTOP", "POST");
      } else {
        showMSG("Please enter a valid URL");
      }
      analyseBTN.blur();
    },
    false
  );

  $(".test-all-btn button").click(function () {
    if (true) {
      var url = analyseTEXT.value;
      request(
        "/send",
        "url=" + url + "&data=" + JSON.stringify(__automation_task.data),
        "POST"
      );
    }
  });
})();
