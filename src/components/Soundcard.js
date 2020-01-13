import React, { createRef } from 'react'

const Soundcard = (props) => {
  const { id, src, description } = props;
  let audio = createRef();

  const clickPlay = () => {
    audio.current.play();
    audio.current.currentTime = 0
  }

  return (
    <div className="soundcard">
      <div className="soundcard__holder"
        onClick={clickPlay}>
        <p className="soundcard__holder__btn-paragraph" id={id}>
          {id}
          <audio src={src} ref={audio} />
        </p>
      </div>
      <p className="soundcard__paragraph">SCRIPT:<br />
        {description}
      </p>
    </div>
  )
}

export default Soundcard;