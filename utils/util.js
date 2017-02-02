function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getDateDiff(time) {
  let lasttime = new Date(time);
  const between = (Date.now() - Number(lasttime)) / 1000;
  if (between < 3600) {
    return `${~~(between / 60)} 分钟前`
  } else if (between < 86400) {
    return `${~~(between / 3600)} 小时前`
  } else if (between < 2592000) {
    return `${~~(between / 86400)} 天前`
  } else {
    return `${~~(between / 2592000)} 月前`
  }
}

module.exports = {
  formatTime,
  getDateDiff
}
