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

let sideNavToggle = document.getElementById("sideNavToggle");
let closeNav = document.getElementById("closeNav");

sideNavToggle.addEventListener("click", () => {
  let element = document.getElementById("navbar");
  element.classList.remove("d-none");
  transformSetting = document.getElementById("navbar").style.transform =
    "scale(1, 1)";
  widthSetting = document.getElementById("navbar").style.width = "16.66666667%";
  document.getElementById("navbar").style.opacity = "1";
  document.getElementById("mainContent").style.opacity = ".5";
  const div = document.getElementById("navbar");
  checkClassList = div.classList.contains("d-none");
  if (checkClassList == false) {
    document.getElementById("mainContent").style.pointerEvents = "none";
  } else {
    document.getElementById("mainContent").style.pointerEvents = "inherit";
  }
});
closeNav.addEventListener("click", () => {
  let element = document.getElementById("navbar");
  element.classList.add("d-none");
  const div = document.getElementById("navbar");
  checkClassList = div.classList.contains("d-none");
  document.getElementById("mainContent").style.opacity = "1";
  if (checkClassList == false) {
    document.getElementById("mainContent").style.pointerEvents = "none";
  } else {
    document.getElementById("mainContent").style.pointerEvents = "inherit";
  }
});

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
let chart = new ApexCharts(document.querySelector("#chartOne"), options);
chart.render();
// Dashboards =======================================
const home = document.getElementById("v-pills-home-tab");
const appraisals = document.getElementById("v-pills-appraisals-tab");
const credits = document.getElementById("v-pills-credits-tab");
const compliments = document.getElementById("v-pills-compliments-tab");
const upSell = document.getElementById("v-pills-upsell-tab");
const schedule = document.getElementById("v-pills-schedule-tab");
const calls = document.getElementById("v-pills-calls-tab");
const shops = document.getElementById("v-pills-shops-tab");
const incomplete = document.getElementById("v-pills-incomplete-tab");

home.addEventListener("click", () => {
  document.getElementById("subhead").innerHTML =
    'Projects & Reports  <i class="bi bi-columns-gap"></i>';
  document.getElementById("quote").innerHTML =
    "I hope you are having a great day 😉!";
});

appraisals.addEventListener("click", () => {
  document.getElementById("dashboards").src =
    "https://datastudio.google.com/embed/reporting/d055e3ac-b7c1-435b-b63d-68ac9e99eefc/page/p_gk2ba1vvlc";
  document.getElementById("subhead").innerHTML =
    'Performance Appraisals <i class="bi bi-clipboard-data"></i>';
  document.getElementById("quote").innerHTML =
    "“Leadership and learning are indispensable to each other.”John F. Kennedy 📊!";
});

credits.addEventListener("click", () => {
  document.getElementById("dashboards2").src =
    "https://datastudio.google.com/embed/reporting/2e1b5d10-d855-44b6-b498-953932a08a59/page/jKlQC";
  document.getElementById("subhead").innerHTML =
    'Call-Center Credits <i class="bi bi-cart-x"></i>';
  document.getElementById("quote").innerHTML =
    '"Your most unhappy customers are your greatest source of learning." - Bill Gates📚';
});

compliments.addEventListener("click", () => {
  document.getElementById("dashboards3").src =
    "https://datastudio.google.com/embed/reporting/ea997b03-538e-4b50-b512-998a673838e6/page/jKlQC";
  document.getElementById("subhead").innerHTML =
    'These are Compliments <i class="bi bi-emoji-smile"></i>';
  document.getElementById("quote").innerHTML =
    '"Always have an attitude of gratitude."- James R. Nowlin 🤞';
});

upSell.addEventListener("click", () => {
  document.getElementById("subhead").innerHTML =
    'Upsell Update <i class="bi bi-receipt-cutoff"></i>';
  document.getElementById("dashboards4").src =
    "https://datastudio.google.com/embed/reporting/ff366ab5-5b0d-4cfd-959c-bcdde083081e/page/jKlQC";
  document.getElementById("quote").innerHTML =
    "‘Absorb what is useful, discard what is not, add what is uniquely your own’ – Bruce Lee 📈";
});

schedule.addEventListener("click", () => {
  document.getElementById("dashboards8").src = "";
  document.getElementById("subhead").innerHTML =
    'Schedules <i class="bi bi-calendar2-x"></i>';
  document.getElementById("quote").innerHTML =
    '"A schedule defends from chaos and whim. A net for catching days." – Stephan Covey 📅';
});

calls.addEventListener("click", () => {
  document.getElementById("subhead").innerHTML =
    'Calls & Missed Calls <i class="bi bi-telephone-plus-fill"></i>';
  document.getElementById("dashboards10").src =
    "https://datastudio.google.com/embed/reporting/51835266-272d-4ce3-82aa-216a6349de48/page/p_x3rjv9zwlc";
  document.getElementById("quote").innerHTML =
    "‘One customer well taken care of could be more valuable than $10,000 worth of advertising. – Jim Rohn’";
});

shops.addEventListener("click", () => {
  document.getElementById("dashboards5").src = "";
  document.getElementById("pass-box").style.display = "block";
  document.getElementById("navbar").style.pointerEvents = "none";
  document.getElementById("subhead").innerHTML =
    'Restaurants Performance <i class="bi bi-shop"></i>';
  document.getElementById("quote").innerHTML =
    '"Unless you love everybody, you can’t sell anybody." – Dicky Fox 🛍';
});

incomplete.addEventListener("click", () => {
  document.getElementById("dashboards6").src =
    "https://datastudio.google.com/embed/reporting/49454e7b-3ef0-4d81-9d68-70a2d118fdf4/page/jKlQC";
  document.getElementById("subhead").innerHTML =
    'Queries & Complaints <i class="bi bi-telephone-x"></i>';
  document.getElementById("quote").innerHTML =
    '"Everything Starts with the customer." 😑 ';
});

//---------------------------------------------------
let passboxHide = document.querySelector(".close-box");
passboxHide.addEventListener("click", () => {
  document.getElementById("pass-box").style.display = "none";
  document.getElementById("navbar").style.pointerEvents = "inherit";
});

//Admin Dashboards Access
let accessBox =document.querySelector("[data-restricted-dash]");

accessBox.addEventListener("submit",(e)=>{
  e.preventDefault();
  if (document.getElementById("password").value !== "assurance@123") {
    document.getElementById("dashboards5").src = "";
    document.getElementById("response").innerHTML = "Incorrect password 🤨";
  } else {
    document.getElementById("dashboards5").src =
      "https://datastudio.google.com/embed/reporting/c5071f7b-23ac-4a94-9856-5ea7547f1dff/page/jKlQC";
    document.getElementById("pass-box").style.display = "none";
    document.getElementById("navbar").style.pointerEvents = "inherit";
  }
})

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
