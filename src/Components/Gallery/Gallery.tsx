import React, {useEffect, useState} from "react";
import {Container, Row} from "reactstrap";
import {IStateItem} from "../../App";
import {GalleryItem} from "./GalleryItem";

interface IGallery {
    handleImageClick: (evt: React.MouseEvent<HTMLElement>, tag: string) => void,
    data: IStateItem[],
    group: boolean
}

export const Gallery = ({
                            handleImageClick,
                            data,
                            group,
                        }: IGallery) => {

    const defaultTagList: string[] = [];
    const [tagList, setTagList] = useState(defaultTagList);

    useEffect(() => {
        const tags: { [key: string]: string; } = {};
        data.forEach(item => tags[item.tag] = item.tag);
        setTagList(Object.values(tags));
    }, [data]);

    if (!group) return <section>
        <Container>
            <Row>
                {data.map((item, index) =>
                    <GalleryItem key={index}
                                 imageUrl={item.imageUrl}
                                 tag={item.tag}
                                 handleImageClick={handleImageClick}/>
                )}
            </Row>
        </Container>
    </section>;

    return <section>
        <Container>
            {tagList.map(itemTag =>
                <div key={itemTag} className="p-3 border rounded">
                    <h3 className="mb-2 text-left">{itemTag}</h3>
                    <Row>
                        {data.filter(item => item.tag === itemTag).map((item, index) =>
                            <GalleryItem key={index}
                                         imageUrl={item.imageUrl}
                                         tag={item.tag}
                                         handleImageClick={handleImageClick}/>
                        )}
                    </Row>
                </div>
            )}
        </Container>
    </section>
};