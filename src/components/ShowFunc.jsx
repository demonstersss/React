

export default function ShowFunc({langs = []}) {
    if(langs.length > 0)
        return(
            <>
                <ul>
                    {langs.map((lang, index) => <li key={index}>{lang}</li>)}
                </ul>
            </>
        )
    else
        return "Я глупи(((";
}