export default function formatPrice(price) {
  return price.toString().replace(/(\d+)\.(\d+)?/, (_, n1, n2) => {
    n2 = !n2 ? '00' : n2
    return `${n1},${n2}`
  })
}
