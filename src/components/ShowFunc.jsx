

export default function ShowFunc({langs = []}) {
    if(langs.length > 1 || (langs.length === 1 && langs[0] !== ""))
        return(
            <>
                <div>
                    <ul>
                        {langs.map((lang, index) => <li key={index}>{lang}</li>)}
                    </ul>
                    
                </div>
                <hr width="700px" />
            </>
        )
    else
        return "Ти глупи(((";
}