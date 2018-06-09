import React from 'react';


class ButtonCta extends React.Component {
    render () {
        let text = "LEARN MORE";

        const styles = {
            padding: '1em',
            background: 'var(--ctaColor)',
            color: 'white',
            width: '15vw',
            marginBottom: ''
        };
        // console.log('Default btn style ' , styles);

        switch (this.props.type) {
            case 'white':
                styles.background = 'white';
                styles.color = 'black';
                break;
            case 'small':
                text = 'READ MORE'
                styles.padding = '0.4em';
                styles.width = '7em';
                styles.marginBottom = '2em';
        }
        // console.log('Final btn style ' , styles);        

        return(
            <a className="ButtonCta shadowBtn" style={styles}>{text}</a>
        )
    }
}


export default ButtonCta;