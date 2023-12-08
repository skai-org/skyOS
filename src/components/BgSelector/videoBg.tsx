import backdropVideo from '../../assets/backdrops/videos/lofi-van-life-moewalls-com.mp4'



const BackDrop = () => {
  return (

    <div className="h-screen w-screen">
        <video className="object-cover w-[100%] h-[100%] " src={backdropVideo} autoPlay={true} loop muted 
        typeof='mp4' 
        />
    </div>

  )
}

export default BackDrop;