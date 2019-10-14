/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  let out = "false"
  if (typeof(bytes) == "number" && Number.isFinite(bytes) && Number.isInteger(bytes)) {
    if (bytes < 0) {
      return out
    }
    let i = 0
    let str = "KMGTPEZY"
    while (bytes >= 1024) {
      i++
      bytes = bytes / 1024
    }
    bytes = Math.round(bytes * 100) / 100
    if (i > 0) {
      out = String(bytes) + " " + str[i - 1] + "B"
    } else {
      out = String(bytes) + " " + "B"
    }
    return out
  } else {
    return out
  }
  // your solution goes here
}
