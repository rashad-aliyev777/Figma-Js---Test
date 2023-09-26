


// overlay menyu iconuna yaradilan funksiya start

const navbarIconu = document.querySelector(".fa-bars")
const baglamaqIconu = document.querySelector(".fa-xmark")
const overlayMenyuDivi = document.querySelector(".overlay-menu")



// navbarIconu.onclick = function() {
//     document.querySelector(".overlay-menu").style.width="100%" 
// }

// baglamaqIconu.onclick = function() {
//     document.querySelector(".overlay-menu").style.width="0" 
// }

navbarIconu.addEventListener('click',function() {
  overlayMenyuDivi.style.width="100%"
}
  )

  baglamaqIconu.addEventListener('click',function() {
    overlayMenyuDivi.style.width="0"
  })


// overlay menyu iconuna yaradilan funksiya end






// BLOG HISSESI API YUKLEME START


            const latestSag = document.getElementsByClassName("latest-sag")[0]
            console.log(latestSag)


            window.addEventListener("DOMContentLoaded",melumatlariGetir)

            async function melumatlariGetir() {
                
                const unvan = "melumatlar.json"
                
                try {
                    const servereAtilanIstek = await fetch(unvan)
                    const gelenCavabJSON = await servereAtilanIstek.json()

                    console.log(servereAtilanIstek)

                    for(let i=0; i<gelenCavabJSON.length; i++) {
                        
                        latestSag.innerHTML += `
                        <div class="blog">
                        <span class="metadata">${gelenCavabJSON[i].xeberin_tarixi}</span>
    
                        <h3>${gelenCavabJSON[i].xeberin_basligi}</h3>
                        <a href="#">Read the article <img src="./assets/images/Blogs Hissesi/blogsdaki-ag-icon.svg" alt=""></a>
                        </div>
                        `
                    }
                    
                }

                catch(error) {
                    console.log(error.message)
                }
            }

// BLOG HISSESI API YUKLEME END




// Sweaper JS KOD

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
  });


// Sweaper hissesi end

AOS.init();

// faq hissesinde klik zamani yaranan cavab start

const accordionBasligi = document.querySelectorAll(".accordion-header")

  for(let i=0; i<8; i++) {
    accordionBasligi[i].addEventListener("click",function() {

      const moderatorVerdiyiCavabDivi = this.nextElementSibling

      console.log(moderatorVerdiyiCavabDivi);

      if(moderatorVerdiyiCavabDivi.style.maxHeight) {
        moderatorVerdiyiCavabDivi.style.maxHeight = null


      }

      else {
        moderatorVerdiyiCavabDivi.style.maxHeight = "100px"
      }

    })
  }

  

// faq hissesinde klik zamani yaranan cavab end




