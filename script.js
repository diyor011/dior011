window.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
  })

  const menuBtn = document.querySelector('.menu-btn')
  const navigation = document.querySelector('.navigation')
  const navigationItems = document.querySelectorAll('.navigation a')

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active')
    navigation.classList.toggle('active')
  })

  navigationItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
      menuBtn.classList.remove('active')
      navigation.classList.remove('active')
    })
  })

  const scrollBtn = document.querySelector('.scrollToTop-btn')
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('active', window.scrollY > 500)
  })
  scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })

  window.addEventListener('scroll', () => {
    let reveals = document.querySelectorAll('.reveal')

    for(let i = 0; i< reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if(revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active')
      }
    }
  })
})


const TOKEN = "6979816792:AAH1j1ppbhHecPrDioyTwlf3YXB0VOfWk3U";
const CHAT_id = "-1002102869079";
const URi__API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const success = document.getElementById('success')

document.getElementById('tg').addEventListener('submit', function(e){
  e.preventDefault();
  

  let messagee = `<b>заявка с сайта</b>\n`
  messagee += `<b>имя : </b>${this.name.value}\n`
  messagee += `<b>собшения : </b>${this.message.value}\n`
  console.log(messagee);


  axios.post(URi__API, {
    chat_id : CHAT_id,
    parse_mode: 'html',
    text : messagee
  })

  .then((res)=>{
    this.name.value = "";
    this.message.value = "";
    success.innerHTML = ' заявка отправленна';
    success.style.display = `block`
  })

  .catch((err)=>{
console.warn(err)
  })
  .finally(()=>{
    console.log('kones');
  })
})