import React from 'react';
import "./styles.css"

const Card = () => { //denemeler
  return (
    <div className='cards-section w-100 flex justify-content-center'>
      
      <div className="card " style={{ width: '20rem'}}>
        <img
          src="https://images.unsplash.com/photo-1628771065518-0d82f1938462?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGlsbHxlbnwwfHwwfHx8MA%3D%3D" // Gerçek bir resim yolunu buraya ekleyin
          className="card-img-top "
          alt="Card Alt Text"
        />
        <div className="card-body">
          <h5 className="İLAÇLAR">İLAÇLAR</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn">
            Go somewhere
          </a>
        </div>
      </div>


      <div className="card"  style={{ width: '20rem' }}>
        <img
          src="https://cdn.ima.org.uk/wp/wp-content/uploads/2016/01/medicine-molecule.jpg" // Gerçek bir resim yolunu buraya ekleyin
          className="card-img-top"
          alt="Card Alt Text"
        />
        <div className="card-body">
          <h5 className="MOLEKÜLER YAPI">MOLEKÜLER YAPI</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn">
            Go somewhere
          </a>
        </div>
      </div>
    
      <div className="card"  style={{ width: '20rem' }}>
        <img
          src="https://images.theconversation.com/files/256057/original/file-20190129-108364-17hlc1x.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" // Gerçek bir resim yolunu buraya ekleyin
          className="card-img-top"
          alt="Card Alt Text"
        />
        <div className="card-body">
          <h5 className="ALERJİ">ALERJİ</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn ">
            Go somewhere
          </a>
        </div>
      </div>
    


    

    </div>

  );
};

export default Card;
