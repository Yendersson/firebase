
const PictureZoom = ({src, display, close}) => {

    function closeModal(){
        close();
    }

    return (
        <div id="myModal" className="modal" style={{display:display?"block":"none"}}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img className="modal-content" src={src} id="img01" />
        </div>
    )
}

export default PictureZoom;