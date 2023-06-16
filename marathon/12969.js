process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const str = "*"
    for (let i=0;i<b; i++) {
        for (let j=0;j<a; j++) {
            process.stdout.write(str)
        }
        console.log("")
    }
});

// 종화
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = '*'.repeat[0]+'\n', b =n[1];
    console.log(a.repeat(b));
});

function printStar(n, m) {
    let star = "";
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        star += "*";
      }
      star += "\n";
    }
    return star;
  }
  console.log(star(5, 3))


//소현
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    const star = "*".repeat(a);
    for (let i=0; i<b; i++)
        console.log(star);
});
