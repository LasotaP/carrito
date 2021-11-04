import { Component } from 'react';
import TitleComponent from './title/title';

class ItemListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            productos: ['Leche','Chocolate','Gaseosa']
         }
    }
    render() { 
        const products = this.state.productos
        return ( 
            <div>
                <TitleComponent name = "Lista de productos" />
                <ul>{products}</ul>
            </div>
         );
    }
}
 
export default ItemListContainer;