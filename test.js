function generate(row) {
    return Array(row).fill(1).map((_,i,r) => r[i] = Array(i+1).fill(1).map((v,j) =>
        j > 0 && j < i ? r[i-1][j-1] + r[i-1][j] : v
    ))
}

console.log(generate(5));