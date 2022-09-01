function timeHourglass(n) {

    let row = 0
    let hourglass = " "

    for (let i = 0; i <= n; i++) {

        row++
        if (i == 0) {
            hourglass += `${"#".repeat(n - i)}\n`
        } else if (i == 1) {
            hourglass += `#${"#" + " ".repeat(n - 4)}##\n`
        } else if (i == 2) {
            hourglass += `#${"#" + " ".repeat((n-4-i))}# #\n`
        } else if (row%2 == 0 && row < n-3) {
            hourglass +=`#${" ".repeat((row/2)) + "#" + " ".repeat(n-4-row)+"#"+ " ".repeat((row/2))}#\n`
        }
    }

    for (let i = n; i >= 0; i--) {

        row--
        if (i == 0) {
            hourglass += `${"#".repeat(n - i)}\n`
        } else if (i == 1) {
            hourglass += `${"#".repeat(n)}\n`
        } else if (i == 2) {
            hourglass += `#${" ".repeat((i / 2) - 1) + "#".repeat(n - i - 2)} #\n`
        } else if (i % 2 == 0 && i < n - 3) {
            hourglass += `#${" ".repeat((row / 2)) + "#".repeat((n - row - 2)) + " ".repeat((row / 2))}#\n `
        }
    }

    return (hourglass)

}

console.log(timeHourglass(20))


