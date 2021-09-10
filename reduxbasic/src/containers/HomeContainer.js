import {connect} from 'react-redux'
import Home from '../components/Home'
import { addToCart } from '../services/actions/action';


const mapStateToProps = state =>({
    cardData:state.cardItems
})


const mapDispatchToProps = dispatch => ({
    addCartHandler:data =>dispatch(addToCart(data))
})


export default connect(mapStateToProps,mapDispatchToProps)(Home)


