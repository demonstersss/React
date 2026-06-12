import React from 'react';

class ShowClass extends React.Component {
    LangDefis = function(langs) {
        return langs.join(', ');
    }

    render() { 
        return (
            <>
                <h2>I know: {this.props.langs.join(', ')}</h2>
                <h2>I dont know: {this.LangDefis(["asm"])}</h2>
            </>
        );}
}

export default ShowClass;