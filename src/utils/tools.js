export function formatDate(timeStamp) {
  let date = new Date(+timeStamp);

  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");

  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let seconds = date.getSeconds().toString().padStart(2, "0");
  let weekArr = ["星期日", "星期一","星期二", "星期三", "星期四", "星期五", "星期六"];
  let week = weekArr[date.getDay()];

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${week}`
}