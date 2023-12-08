import backdropImage from '../../assets/backdrops/12.png'

const imgBg = () => {
  return (
 <img
                className="object-fill 100-full w-full select-none"
                src={backdropImage}
                alt={"randImage"}
                draggable={false}
              /> 
  )
}

export default imgBg