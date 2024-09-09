function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}

let header_btn = document.querySelector('.header_btn')
header_btn.addEventListener('click', scrollDown)

let github = document.querySelector('.github')
github.addEventListener('click', function() {
    location.assign('https://github.com/GrechkaMykhailo12345')
})

let instagram = document.querySelector('.instagram')
instagram.addEventListener('click', function() {
    location.assign('https://www.instagram.com/mykhailogrechka1228/')
})

let telegram = document.querySelector('.telegram')
telegram.addEventListener('click', function() {
    location.assign('https://t.me/MasterMish')
})

let gmail = document.querySelector('.gmail')
gmail.addEventListener('click', function() {
    location.assign('mailto:yalta010709@gmail.com')
})