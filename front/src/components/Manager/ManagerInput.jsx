import { useEffect, useState, useRef } from "react";

export default function ManagerInput({ type, data, setData }) {
    const inputRef = useRef(null);
    const [inputTitle, setInputTitle] = useState('.....');
    const [maxLength, setMaxLength] = useState(128);
    const [inputData, setInputData] = useState(data); //Make sure this data gets to parent component

    useEffect(() => {
        if (type === 'title') {
            setInputTitle('Title');
            setMaxLength(128);
        } else if (type === 'description') {
            setInputTitle('Description');
            setMaxLength(1024);
        }
    }, [type]);

    useEffect(() => {
        if (inputRef.current.textContent !== inputData) {
          inputRef.current.textContent = inputData;
        }
      });

    useEffect(() => {
        setInputData(data);
    }, [data]);

    function handleSave() {
        setData(inputData);
    }

    return (
        <section className="w-full flex flex-col">
            <h1 className="font-bold">{inputTitle}</h1>
            <div 
                contentEditable 
                ref={inputRef} 
                className={`w-full px-4 py-2 border-2 border-slate-400 dark:border-neutral-600 rounded-lg resize-none overflow-hidden focus:outline-none break-words
                    ${type === 'description' && 'min-h-[8.8rem]'}`}
                maxLength={maxLength}
                spellCheck={false}
                onInput={event => setInputData(event.target.textContent)}
                onBlur={handleSave}
                suppressContentEditableWarning
            >
                {data}
            </div>
        </section>
    );
}
