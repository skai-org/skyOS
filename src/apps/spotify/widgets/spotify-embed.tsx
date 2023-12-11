import Draggable from "react-draggable";

const SpotifyEmbed = () => {
    const iframeStyle: React.CSSProperties = {
        borderRadius:"12px",
      
      };
    
  return (
   <Draggable bounds='parent'>
    <div className="px-4 bg-black w-full">
     <iframe style={iframeStyle} className="absolute bottom-20 right-10"
     src="https://open.spotify.com/embed/playlist/4Zjli1P13J5mmSCD5iKAXK?utm_source=generator&theme=0"  
      frameBorder="0" 
      width="320px" 
     height="80px"
      allowFullScreen={false}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy"></iframe>
      </div>
    </Draggable>
    

  );
};

export default SpotifyEmbed;
