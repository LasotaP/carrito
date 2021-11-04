import { Component } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


class CarWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <IconButton
                    size="large"
                    aria-label="show 17 new products"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </div>
         );
    }
}
 
export default CarWidget;