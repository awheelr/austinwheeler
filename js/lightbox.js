// document.addEventListener('DOMContentLoaded', function () {
//     var arr = document.getElementsByClassName("lightbox_trigger")
//     console.log(arr)
    
//     for (var i=0; i<arr.length; i++) {
//     arr[i].addEventListener("click", function(e) {
//         console.log('test')
            
//         e.preventDefault();
        
//         let image_href = this.getAttribute('src');
        
//         var element =  document.querySelector('lightbox')
        
//         if (typeof(element) != 'undefined' && element != null) {
//             console.log('test')
            
//             document.getElementById('content').innerHTML = '<img src="' + image_href + '" />';
            
//             document.querySelector('lightbox').style.display = "";
//         }
        
//         else { 
//             console.log("inserting lightbox..")
            
//             var lightbox = 
//             '<lightbox>' +
//                 // '<p>Click to close</p>' +
//                 '<div id="content">' + 
//                     '<img src="' + image_href +'"/>' +
//                 '</div>' +	
//             '<lightbox>';

//             var target = document.querySelector("body");
//             target.insertAdjacentHTML('beforeend', lightbox);
//         }

//         var el = document.getElementById('lightbox')
//         if(el) {
//             document.getElementById('lightbox').addEventListener('click', function() { 
//                 document.getElementById("lightbox").style.display = "none"
//             })
//         }


//     });
// }
// }, false);

// class Lightbox{
//     constructor(){
//      this.init()
//     }
  
//     init(){
//      this.container = document.createElement('div');
//      this.container.id = 'lightbox';
//      document.body.appendChild(this.container);
  
//      this.lightboxImg = document.createElement('img');
//      this.container.appendChild(this.lightboxImg);
  
//      this.addListeners();
//     }
  
//     addListeners(){
//      const images = document.querySelectorAll('section img');
//      images.forEach(img => {
//       img.addEventListener('click', ()=> this.galleryImgClicked(img))
//      })
  
//      this.container.addEventListener('click', ()=>{
//       this.hideLightbox()
//      })
  
//      document.addEventListener('keydown', (e) => {
//       if(e.key === 'Escape') this.hideLightbox()
//      })
//     }
  
//     hideLightbox(){
//      this.container.classList.remove('active')
//     }
  
//     galleryImgClicked = (img) => {
//       this.lightboxImg.src = img.src;
//       this.container.classList.add('active')
//     }
//   }
//   document.addEventListener('DOMContentLoaded', function () {
//   const lightbox = new Lightbox()

//   })
