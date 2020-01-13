import React, { useState } from "react";
import { ReactMic } from 'react-mic';

const Studio = (props) => {
    const [recording, setRecording] = useState(false)
    const [audioBlob, setAudioBlob] = useState(null)

    const beginVoiceRec = () => {
        setRecording(true)
    }
    const stopVoiceRec = () => {
        setRecording(false)
    }

    const onData = (recBlob) => {
        console.log('chunk of real time data (ONDATA)', recBlob);
    }
    const onStop = (recBlob) => {
        console.log('chunk of real time data', recBlob);
        setAudioBlob(recBlob.blobURL)
    }


    return (
        <div className="studio">
            <h2 className="studio__header">Studio</h2>
            <h3 className="studio__desc">
                Want to add your own voice to the soundboard?<br />
                Press Record — stop it at any time.<br />
                If you do, you'll have to [re]Record <br />
                Press play, after you've stopped recording to listen to it!<br />
                If you're happy, add it to the soundboard below!
            </h3>
            <p><ReactMic className="studio__sound-wave"
                record={recording}
                onStop={onStop}
                onData={onData}
                strokeColor="#cdf7e8"
                backgroundColor="#68adab" />
            </p>
            <button
                onClick={beginVoiceRec}
                className="studio__btn studio__btn-record" type="button">[re]Record</button>
            <button onClick={stopVoiceRec} type="button" className="studio__btn studio__btn-stop">STOP</button>

            <p><audio
                className="studio__audio-playback"
                controls="controls" src={audioBlob} />
            </p>
        </div>
    )
}

export default Studio
