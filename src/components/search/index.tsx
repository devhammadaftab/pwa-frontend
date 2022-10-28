import React, { useRef, useState } from 'react';
import { Container, Input } from 'reactstrap';
import { useStore } from 'store';
import { setAutocompleteWords, setResults, setKeyword } from 'store/actions';
import { useOutsideClick } from 'hooks';

interface Props {
    height?: string,
    width?: string
}

const SearchBox: React.FC<Props> = ({ height, width }) => {

    const { state, dispatch } = useStore();
    const [show, setShow] = useState(false);
    const inputRef = useRef(null);

    const handleChange = (keyword: string) => {
        dispatch(setKeyword(keyword));
        setShow(true);
        (async (keyword: string) => {
            dispatch(await setAutocompleteWords(keyword));
        })(keyword)
    }

    const onSelect = async (keyword: string) => {
        console.log("searching")
        dispatch(setKeyword(keyword));
        dispatch(await setResults(keyword));
        console.log("searched");
        setShow(false);
    }

    const onClose = () => {
        setShow(false);
    }

    useOutsideClick(inputRef, onClose);

    return (
        <Container style={{ height, width }} ref={inputRef}>
            <Input
                value={state.keyword}
                onChange={(e) => handleChange(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onSelect(state.keyword);
                    }
                }}
            />
            {show && <div style={{ height, width, position: "absolute", zIndex: 999, background: "white", top: height }} className="autocomplete">
                {state.autocomplete.words.map(word => <div onClick={(e) => {
                    e.stopPropagation();
                    onSelect(word);
                }} style={{ padding: "0.3rem" }}>{word}</div>)}
            </div>}
        </Container>
    );
}

export default SearchBox