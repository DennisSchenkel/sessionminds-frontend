import styles from "./Content.module.css";
import EmojiPicker from "emoji-picker-react";
import { Emoji } from "emoji-picker-react";
import { useState } from "react";
import { Button } from "react-bootstrap";



export default function ContentHome() {

    const [emoji, setEmoji] = useState(null);

    const onEmojiClick = (emojiData) => {
        setEmoji(emojiData.unified);
    };


    return (
    <>
        <div className="pb-3">
            <div className={`row ${styles["headline-row"]}`}>
                <h1>Explore</h1>
            </div>
            <p>Explore the latest and greatest tools for your session.</p>
        </div>
        <div className="pb-4">
            <div className={`row ${styles["headline-row"]}`}>
                <h2>Top Tools</h2>
            </div>
            Test Row 1
        </div>
        <div className="pb-4">
            <div className={`row ${styles["headline-row"]}`}>
                <h2>Latest Tools</h2>
            </div>
            Test Row 2
        </div>
        <div className="pb-4">
            <div className={`row ${styles["headline-row"]}`}>
                <h2>Top Topics</h2>
            </div>

            Test Row 3

            </div>


        <div>
            <EmojiPicker onEmojiClick={onEmojiClick} />
            <Button onClick={() => setEmoji(null)}>Delete Icon</Button>
        </div>

        <div>
            <Emoji unified={emoji} size={64} />
        </div>


    </>
    )
    }