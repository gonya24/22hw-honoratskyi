const tb = document.getElementById('tbody')
for (let i = 1; i<=10; i++){
    const lin = document.createElement('tr')
    tb.appendChild(lin)
    for(let y = 1; y<=10; y++){
        const col = document.createElement('td')
        col.innerHTML =i*y;
        lin.appendChild(col)
    } 
}