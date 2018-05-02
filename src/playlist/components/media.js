import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './media.css'

//Componentes funcionales, puro y clasico, son las formas

//PureComponente y Componente: en le primero no es necesario comprobar si el componente se actualiza


class Media extends PureComponent {
    state = {
        author : 'Leonidas'
    }
    //realizar el bind con es215
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         author : 'Juan'
    //     }
    // }
    //Acceder al contexto de la clasa usando arrow function
    handleClick = (event) => {
        console.log(this.props.image)
        this.setState({
            author : 'Ricardo'
        })
    }
    render(){
        const styles = {
            container: {
                //fontSize : 18,//Si se usa PX como medida, react actumaticamente las conveirte, caso contrario se debe especificar "14em"
                color : '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red'
            }
        }

        return(
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover"> 
                    <img
                        src={this.props.cover}
                        alt=""
                        className="Media-image"
                        width={260}
                        height={160}
                    />
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.props.author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video','audio'])
}

export default Media;