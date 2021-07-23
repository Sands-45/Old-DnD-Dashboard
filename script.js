let transformSetting = document.getElementById("navbar").style.transform = "scale(1, 1)";
let widthSetting = (document.getElementById("navbar").style.width = "16.66666667%");

function sideBar(){
 if (transformSetting == "scale(1, 1)" && widthSetting == '16.66666667%') {
    transformSetting = document.getElementById("navbar").style.transform ="scale(0, 1)";;
    widthSetting = document.getElementById("navbar").style.width ="0%";
    document.getElementById("navbar").style.opacity="0";
     } else {
     transformSetting = (document.getElementById("navbar").style.transform ="scale(1, 1)");
     widthSetting = (document.getElementById("navbar").style.width ="16.66666667%");
     document.getElementById("navbar").style.opacity = "1";
     }
   }

   /* Charts or Dashboard Reports */
   var options = {
     series: [
       {
         name: "Sales",
         data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
       },
     ],
     chart: {
       height: 350,
       type: "line",
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
     toolbar: {
       show: false,
       tools: {
         download: false,
       },
     },
   };
var chart = new ApexCharts(document.querySelector("#chartOne"), options);
chart.render();

//ChartTwo ----
 