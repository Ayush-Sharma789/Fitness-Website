import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat nemo ipsa saepe consectetur adipisci suscipit inventore! Expedita tenetur quia quas?
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente unde corrupti ex porro tempora? Beatae est ipsum consequuntur cum animi officia delectus, et laboriosam deserunt quidem porro assumenda sint quos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ea illum sint error debitis voluptas ad dolor earum asperiores omnis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nisi.
          </p>
        </div>
      </div>
    </section>

    <section className="about__Vision">
      <div className="container about__Vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente unde corrupti ex porro tempora? Beatae est ipsum consequuntur cum animi officia delectus, et laboriosam deserunt quidem porro assumenda sint quos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ea illum sint error debitis voluptas ad dolor earum asperiores omnis!
          </p> 
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Vision Image" />
        </div>
      </div>
    </section>


    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Mission Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente unde corrupti ex porro tempora? Beatae est ipsum consequuntur cum animi officia delectus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ea illum sint error debitis voluptas ad dolor earum asperiores omnis!
          </p>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default About