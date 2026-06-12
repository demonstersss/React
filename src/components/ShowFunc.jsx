

export default function ShowFunc({langs = []}) {
    if(langs.length > 1 || (langs.length === 1 && langs[0] !== ""))
        return(
            <>
                <ul>
                    {langs.map((lang, index) => <li key={index}>{lang}</li>)}
                </ul>
            </>
        )
    else
        return "Ти глупи(((";
}