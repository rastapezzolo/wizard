import { connect } from 'react-redux';
import ButtonList from '../components/ButtonList';
import { fetchChildren, fetchChildrenSuccess, fetchChildrenFail } from '../actions/wizard'

const mapStateToProps = (state) => {
	buttons: state.buttons
}

const mapDispatchToProps = (dispatch) => 
   	
	return {
		onButtonClick: (id) => dispatch(fetchChildren(id)).payload
			.then((response) => {
				!response.error 
				? dispatch(fetchChildrenFail(response.data))
				: dispatch(fetchChildrenSuccess(response.data))
			})
		toggleButton: (id) => dispatch(toggleButton(id)) 
	}
}

export const VisibleButtonList = connect(
	mapStateToProps,
	mapDispatchToProps
)(ButtonList)