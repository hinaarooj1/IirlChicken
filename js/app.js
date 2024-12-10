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
const contractAddress = "Df6yfrKC8kZE3KNkrHERKzAetSxbrWeniQfyJY4Jpump";
const copyIcon = document.getElementById('copy-icon');
const checkIcon = document.getElementById('check-icon');

copyIcon.addEventListener('click', () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
        copyIcon.style.display = 'none'; // Hide copy icon
        checkIcon.style.display = 'flex'; // Show check icon

        // Hide the checkmark after 3 seconds
        setTimeout(() => {
            checkIcon.style.display = 'none';
            copyIcon.style.display = 'flex';
        }, 3000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});