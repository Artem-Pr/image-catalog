import React, {useState} from 'react';
import {Header} from "./Components/Header/Header";
import {giphyAPI} from "./api/api";
import ModalWindow from "./Components/ModalWindow/ModalWindow";
import {Gallery} from "./Components/Gallery/Gallery";

interface IResponse {
    data: {
        data: { embed_url: string }
    }
}

export interface IStateItem {
    imageUrl: string,
    tag: string
}

function App() {
    const defaultState: IStateItem[] = [];
    const [searchTag, setSearchTag] = useState('');
    const [state, setState] = useState(defaultState);
    const [group, setGroup] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [modal, setModal] = useState({
        open: false,
        message: ''
    });

    const getErrorMessage = (error: any): string => {
        if (error.response) {
            if (error.response.status === 429) return 'Слишком много запросов на сервер';
            return 'Произошла http ошибка';
        }
        return error.message;
    };

    const fetchRandomImages = async (tag: string) => {
        setIsLoading(true);
        try {
            const response: IResponse = await giphyAPI.getRandomImg(tag);

            if (Array.isArray(response.data.data) && !response.data.data.length)
                throw new Error('По тегу ничего не найдено');

            let newStateItem: IStateItem = {
                imageUrl: response.data.data.embed_url,
                tag: tag
            };
            setState((prevState => [...prevState, newStateItem]));
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log('Error - ', error.message);

            setModal({
                open: true,
                message: getErrorMessage(error)
            });
        }
    };

    const handleSearchClick = (evt: React.MouseEvent<HTMLElement>, tag: string | undefined): void => {
        evt.preventDefault();
        tag && fetchRandomImages(tag);
        !tag && setModal({
            open: true,
            message: 'заполните поле "тег"'
        });
    };

    const handleGroupClick = (evt: React.MouseEvent<HTMLElement>): void => {
        evt.preventDefault();
        setGroup(prevState => !prevState);
    };

    const handleClearClick = (evt: React.MouseEvent<HTMLElement>): void => {
        evt.preventDefault();
        setState([]);
    };

    const handleImageClick = (evt: React.MouseEvent<HTMLElement>, tag: string): void => {
        evt.preventDefault();
        setSearchTag(tag);
    };

    return (
        <div className="App">
            <Header handleSearchClick={handleSearchClick}
                    handleGroupClick={handleGroupClick}
                    handleClearClick={handleClearClick}
                    isLoading={isLoading}
                    searchTag={searchTag}
                    group={group}/>
            {state.length
                ? <Gallery data={state}
                           handleImageClick={handleImageClick}
                           group={group}/>
                : ''}
            <ModalWindow isOpen={modal.open}
                         setModal={setModal}
                         message={modal.message}/>
        </div>
    );
}

export default App;
