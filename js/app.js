let toggleNavShow = () => {

    let mblnav = document.getElementById('mblnav')
    let bar = document.getElementById('bar')
    let x = document.getElementById('x')
    mblnav.style.display = 'block'
    bar.style.display = 'none'
    x.style.display = 'block'
}
let toggleNavHide = () => {

    let mblnav = document.getElementById('mblnav')
    let bar = document.getElementById('bar')
    mblnav.style.display = 'none'
    bar.style.display = 'block'
    x.style.display = 'none'
}