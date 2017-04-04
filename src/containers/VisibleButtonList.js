import { connect } from 'react-redux';
import ButtonList  from '../components/ButtonList';
import { fetchChildren, fetchChildrenSuccess, fetchChildrenFail, toggleButton } from '../actions/wizard'

const mapStateToProps = (state) => {
	return{
		buttons: state.buttonReducer.buttons
	}
}
 

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonClick: (id) => {
			dispatch(fetchChildren(id)).payload
					.then((response) => {

						if( "undefined" == typeof response.error ){
							dispatch(fetchChildrenSuccess(response.data.buttons))
							for(let singleButton of response.data.buttons){
								if ( singleButton.id === id ){
									if(singleButton.children.length === 0){
										if(singleButton.instruments.length !== 0)
											console.log(singleButton.instruments)
											dispatch(toggleButton(singleButton.instruments, response.data.buttons))
									}
									else
										dispatch(toggleButton(singleButton.children, response.data.buttons))
								}
							}
						}
						else {
							console.log(response.error)
							dispatch(fetchChildrenFail(response.data))
						}
					})
		}
	}
}

const VisibleButtonList = connect(
	mapStateToProps,
	mapDispatchToProps
)(ButtonList)

export default VisibleButtonList