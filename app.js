const faqs = document.querySelectorAll(".faq");
    faqs.forEach(faq => {
      faq.addEventListener("click", () =>{
        faq.classList.toggle("active");
      })
    })

// const accordion = document.getElementsByClassName('accordion-body');

// for (i=0; i<accordion.length; i++) {
//   accordion[i].addEventListener('click', function () {
//     this.classList.toggle('active')
//   })
// }


// // $('.accordion-body').each(function(){
// //   if ($(this).hasClass('in')) {
// //       $(this).collapse('toggle');
// //   }
// // });

