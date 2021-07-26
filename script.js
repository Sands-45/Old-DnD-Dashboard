let transformSetting = (document.getElementById("navbar").style.transform =
  "scale(1, 1)");
let widthSetting = (document.getElementById("navbar").style.width =
  "16.66666667%");

function sideBar() {
  if (transformSetting == "scale(1, 1)" && widthSetting == "16.66666667%") {
    transformSetting = document.getElementById("navbar").style.transform =
      "scale(0, 1)";
    widthSetting = document.getElementById("navbar").style.width = "0%";
    document.getElementById("navbar").style.opacity = "0";
  } else {
    transformSetting = document.getElementById("navbar").style.transform =
      "scale(1, 1)";
    widthSetting = document.getElementById("navbar").style.width =
      "16.66666667%";
    document.getElementById("navbar").style.opacity = "1";
  }
}

/* Charts or Dashboard Reports */
//Projects Chart =======================================================
var options = {
  series: [
    {
      name: "Projects",
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    },
  ],
  chart: {
    height: 350,
    type: "line",
    toolbar: {
      show: false,
    },
  },
  forecastDataPoints: {
    count: 7,
  },
  stroke: {
    width: 5,
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "1/11/2000",
      "2/11/2000",
      "3/11/2000",
      "4/11/2000",
      "5/11/2000",
      "6/11/2000",
      "7/11/2000",
      "8/11/2000",
      "9/11/2000",
      "10/11/2000",
      "11/11/2000",
      "12/11/2000",
      "1/11/2001",
      "2/11/2001",
      "3/11/2001",
      "4/11/2001",
      "5/11/2001",
      "6/11/2001",
    ],
    tickAmount: 10,
    labels: {
      formatter: function (value, timestamp, opts) {
        return opts.dateFormatter(new Date(timestamp), "dd MMM");
      },
    },
  },
  title: {
    text: "Work Summary",
    align: "center",
    style: {
      fontSize: "16px",
      color: "#666",
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      gradientToColors: ["#FDD835"],
      shadeIntensity: 1,
      type: "horizontal",
      opacityFrom: 0.5,
      opacityTo: 1,
      stops: [0, 100, 100, 100],
    },
  },
  yaxis: {
    min: -10,
    max: 40,
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
};
var chart = new ApexCharts(document.querySelector("#chartOne"), options);
chart.render();

//---------------------------------------------------
//Admin Dashboards Access
function restaurants() {
  if (document.getElementById("password").value !== "assurance@123") {
    document.getElementById("dashboards5").src = "";
    document.getElementById("response").innerHTML = "Incorrect password 🤨";
  } else {
    document.getElementById("dashboards5").src =
      "https://datastudio.google.com/embed/reporting/c5071f7b-23ac-4a94-9856-5ea7547f1dff/page/jKlQC";
    document.getElementById("pass-box").style.display = "none";
    document.getElementById("navbar").style.pointerEvents = "inherit";
  }
}
function queries() {
  if (document.getElementById("password1").value !== "assurance@123") {
    document.getElementById("dashboards6").src = "";
    document.getElementById("response1").innerHTML = "Incorrect password 🤨";
  } else {
    document.getElementById("dashboards6").src =
      "https://datastudio.google.com/embed/reporting/49454e7b-3ef0-4d81-9d68-70a2d118fdf4/page/jKlQC";
    document.getElementById("pass-box1").style.display = "none";
    document.getElementById("navbar").style.pointerEvents = "inherit";
  }
}
function warnings() {
  if (document.getElementById("password2").value !== "assurance@123") {
    document.getElementById("dashboards").src = "";
    document.getElementById("response2").innerHTML = "Incorrect password 🤨";
  } else {
    document.getElementById("dashboards").src =
      "https://datastudio.google.com/embed/reporting/87519d28-32cd-4408-813d-058e8ddd3887/page/hQAwB";
    document.getElementById("pass-box2").style.display = "none";
    document.getElementById("sidenav").style.pointerEvents = "inherit";
  }
}
function adherence() {
  if (document.getElementById("password3").value !== "assurance@123") {
    document.getElementById("dashboards").src = "";
    document.getElementById("response3").innerHTML = "Incorrect password 🤨";
  } else {
    document.getElementById("dashboards").src =
      "https://datastudio.google.com/embed/reporting/87519d28-32cd-4408-813d-058e8ddd3887/page/hQAwB";
    document.getElementById("pass-box3").style.display = "none";
    document.getElementById("sidenav").style.pointerEvents = "inherit";
  }
}
