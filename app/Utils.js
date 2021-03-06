const getColor = (color, opacity) => {
  opacity = opacity || 1

  return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${opacity})`
}

const getDateRangeForPeriod = (period) => {
  let currentDate = new Date()
  let pastDate = new Date(currentDate.getTime())

  switch (period) {
    case 'day':
      pastDate.setDate(pastDate.getDate() - 1)

      break

    case 'week':
      pastDate.setDate(pastDate.getDate() - 7)

      break

    case 'month':
      pastDate.setMonth(pastDate.getMonth() - 1)

      break
    
    case 'months3':
      pastDate.setMonth(pastDate.getMonth() - 3)

      break
	  
    case 'months6':
      pastDate.setMonth(pastDate.getMonth() - 6)

      break

    case 'year':
      pastDate.setFullYear(pastDate.getFullYear() - 1)

      break

    case '2016':
      currentDate = new Date('2016-12-31T23:59:59')
      pastDate = new Date('2016-01-01T00:00:01')

      break

    case '2017':
      currentDate = new Date('2017-12-31T23:59:59')
      pastDate = new Date('2017-01-01T00:00:01')

      break

    case '2018':
      currentDate = new Date('2018-12-31T23:59:59')
      pastDate = new Date('2018-01-01T00:00:01')

      break

    case '2019':
      currentDate = new Date('2019-12-31T23:59:59')
      pastDate = new Date('2019-01-01T00:00:01')

      break
  }

  return {
    from: pastDate,
    to: currentDate
  }
}

const getVideoFrameURL = (baseURL, id, frame) => {
  baseURL = baseURL || 'https://www.webpagetest.org'

  const filename = frame._i || `frame_${leftPad(frame._t / 100, 4)}.jpg`

  return `${baseURL}/getfile.php?test=${id}&video=video_1&file=${filename}`
}

const leftPad = (input, length, pad) => {
  pad = pad || '0'

  let inputStr = input.toString()
  let lengthDiff = length - inputStr.length

  if (lengthDiff > 0) {
    return pad.repeat(lengthDiff) + inputStr
  }

  return inputStr
}

const traverseObject = (obj, callback, path) => {
  path = path || []

  if ((typeof obj === 'object') && !(obj instanceof Array)) {
    Object.keys(obj).forEach(key => {
      traverseObject(obj[key], callback, path.concat(key))
    })
  } else {
    callback(obj, path)
  }
}

const getTimestampsByInterval = (timestamps, dateFrom, dateTo) => {
  return Object.keys(timestamps).filter(timestamp => {
    const timestampMillis = timestamp * 1000

    return (timestampMillis >= dateFrom) && (timestampMillis <= dateTo)
  })
}

export {
  getColor,
  getDateRangeForPeriod,
  getVideoFrameURL,
  getTimestampsByInterval,
  traverseObject
}
