import React from "react";

const Spotify = () => {
    return (
        <iframe
         
        src="https://open.spotify.com/embed/track/4U45aEWtQhrm8A5mxPaFZ7?utm_source=generator"
        frameBorder="0"
        allowFullScreen // Apenas a presença do atributo é suficiente
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Track Embed" // Adicionando um título para acessibilidade
    
        ></iframe>
    );
};

export default Spotify;
