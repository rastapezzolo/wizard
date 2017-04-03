import { connect } from 'react-redux';
import ButtonList from '../components/ButtonList';
import { fetchChildren, fetchChildrenSuccess, fetchChildrenFail, toggleButton } from '../actions/wizard'

const mapStateToProps = (state) => {
	return{
		buttons: state.buttons
	}
}
 

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonClick: (id) => dispatch(fetchChildren(id)).payload
			.then((response) => {
				if( !response.error ){
					dispatch(fetchChildrenSuccess(response.data))
					for(let singleButton of response.data){
						dispatch(toggleButton(singleButton.id))
					}
				}
				else dispatch(fetchChildrenFail(response.data))
			})
	}
}

const VisibleButtonList = connect(
	mapStateToProps,
	mapDispatchToProps
)(ButtonList)

export default VisibleButtonList