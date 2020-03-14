import React from "react";
import {Col} from "reactstrap";

interface IGalleryItem {
    imageUrl: string;
    tag: string
    handleImageClick: (evt: React.MouseEvent<HTMLElement>, tag: string) => void,
}

export const GalleryItem = ({
                                imageUrl,
                                tag,
                                handleImageClick,
                            }: IGalleryItem) => {
    const styles = {
        iFrameWrapper: {
            width: "100%",
            height: "0",
            paddingBottom: "75%",
            position: 'relative' as 'relative'
        },
        iFrame: {
            position: 'absolute' as 'absolute',
            right: "0"
        },
        iFrameButton: {
            position: 'absolute' as 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 5000
        }
    };

    return (
        <Col sm={4} className="border rounded">
            <div style={styles.iFrameWrapper}>
                <iframe src={imageUrl} width="100%" height="100%"
                        style={styles.iFrame} frameBorder="0" className="giphy-embed"
                        allowFullScreen> </iframe>
                <div style={styles.iFrameButton}
                     onClick={evt => handleImageClick(evt, tag)}> </div>
            </div>
        </Col>
    )
};