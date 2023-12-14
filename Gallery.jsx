import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import Image1 from "../../images/gallery1.jpg"
import Image2 from "../../images/gallery2.jpg"
import Image3 from "../../images/gallery3.jpg"
import Image4 from "../../images/gallery4.jpg"
import Image5 from "../../images/gallery5.jpg"
import Image6 from "../../images/gallery6.jpg"
import Image7 from "../../images/gallery7.jpg"
import Image8 from "../../images/gallery8.jpg"
import Image9 from "../../images/gallery9.jpg"
import Image10 from "../../images/gallery10.jpg"
import Image11 from "../../images/gallery11.jpg"
import Image12 from "../../images/gallery12.jpg"
import Image13 from "../../images/gallery13.jpg"
import Image14 from "../../images/gallery14.jpg"
import Image15 from "../../images/gallery15.jpg"


import './gallery.css'
/*
const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for(let i=1; i <= galleryLength; i++){
    images.push(`../../images/gallery${i}.jpg`)
  }
  
  console.log(images);

  {
          images.map((image, index) => {
            return <article key={index}>
              
              <img src={image} alt={`Gallery Image ${index + 1}`} />
            </article>
          })
   }
*/

const Gallery = () => {
  return (
    <>
    <Header title="Our Gallery" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit unde debitis optio totam ducimus harum!
    </Header>
    <section className="gallery">
      <div className="container gallery__container">
        <article><img src={Image1} alt="Gallery Image 1" /> </article>
        <article><img src={Image2} alt="Gallery Image 2" /> </article> 
        <article><img src={Image3} alt="Gallery Image 3" /> </article> 
        <article><img src={Image4} alt="Gallery Image 4" /> </article> 
        <article><img src={Image5} alt="Gallery Image 5" /> </article> 
        <article><img src={Image6} alt="Gallery Image 6" /> </article> 
        <article><img src={Image7} alt="Gallery Image 7" /> </article> 
        <article><img src={Image8} alt="Gallery Image 8" /> </article> 
        <article><img src={Image9} alt="Gallery Image 9" /> </article> 
        <article><img src={Image10} alt="Gallery Image 10" /> </article> 
        <article><img src={Image11} alt="Gallery Image 11" /> </article> 
        <article><img src={Image12} alt="Gallery Image 12" /> </article> 
        <article><img src={Image13} alt="Gallery Image 13" /> </article> 
        <article><img src={Image14} alt="Gallery Image 14" /> </article> 
        <article><img src={Image15} alt="Gallery Image 15" /> </article> 
        
        
      </div>
    </section>
    </>
  )
}

export default Gallery