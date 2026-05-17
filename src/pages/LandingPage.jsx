import BackgroundImg from '../assets/BackgroundImg.jpg'
export default function LandingPage(){
    return(
        <> 
        <div className="bg-image text-white p-5 " style= {{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${BackgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '550px'
      }}>  
        <div  className="container text-center">
            <h3 className="display-1 mb-4">PETEROH'S SHOES COLLECTION</h3>
            <p className="lead mb-4">Welcome to Peteroh's Shop.</p>
            <p className="lead mb-4">I will plug you with the latest shoe</p>
        </div>
        </div>
        </>
       
    )
}