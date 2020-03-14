import React, {useEffect, useState} from "react";
import {Input, Container, Button} from 'reactstrap';

interface IHeader {
    handleSearchClick: (evt: React.MouseEvent<HTMLElement>, tag: string | undefined) => void;
    handleGroupClick: (evt: React.MouseEvent<HTMLElement>) => void;
    handleClearClick: (evt: React.MouseEvent<HTMLElement>) => void;
    isLoading: boolean;
    searchTag: string;
    group: boolean;
}

export const Header = ({
                           handleSearchClick,
                           handleGroupClick,
                           handleClearClick,
                           isLoading,
                           searchTag,
                           group,
                       }: IHeader) => {

    const [tag, setTag] = useState(searchTag);

    useEffect(() => {
        setTag(searchTag);
    }, [searchTag]);

    return <header className="mt-3 mb-3">
        <Container className="d-flex flex-sm-nowrap">
            <Input className="mr-2" type="text" name="text" placeholder="введите тег"
                   value={tag}
                   onChange={evt => setTag(evt.target.value)}/>
            <Button className="mr-2" color="success"
                    disabled={isLoading}
                    onClick={evt => handleSearchClick(evt, tag)}>
                {isLoading ? 'Загрузка...' : 'Загрузить'}
            </Button>
            <Button className="mr-2" color="danger"
                    onClick={handleClearClick}>Очистить</Button>
            <Button color="primary"
                    onClick={handleGroupClick}>
                {group ? 'Разгруппировать' : 'Группировать'}
            </Button>
        </Container>
    </header>
};