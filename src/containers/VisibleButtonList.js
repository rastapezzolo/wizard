import { connect } from 'react-redux';
import ButtonList  from '../components/ButtonList';
import { fetchChildren, toggleButton, fetchInstruments } from '../actions/wizard'

const mapStateToProps = (state) => {
	return{
		buttons: state.buttonReducer.buttons,
		instruments: state.buttonReducer.instruments
	}
}
 

const mapDispatchToProps = (dispatch) => {
	return {
		
		onLoadButtons: () => {
			dispatch(fetchButtons()).payload
			.then( (response) => {
				if( "undefined" == typeof response.error ){
					dispatch(fetchButtonsSuccess(response.data.buttons))
				}
				else{
					dispatch(fetchButtonsFail(response.error))
				}
			})
		},
		onButtonClick: (id, instruments) => {
			dispatch(toggleButton(id))
			dispatch(fetchChildren(id, instruments))
					/*.then((response) => {
												if( "undefined" == typeof response.error ){
							dispatch(fetchChildrenSuccess(response.data.buttons))
							for(let singleButton of response.data.buttons){
								if ( singleButton.id === id ){
									if(singleButton.children.length === 0){
										if(singleButton.instruments.length !== 0)
											console.log(singleButton.instruments)
											dispatch(toggleInstruments(singleButton.instruments))
									}
									else
										dispatch(toggleButton(singleButton.children))
								}
							}
						}
						else {
							console.log(response.error)
							dispatch(fetchChildrenFail(response.error))
						}
					})*/
		},
		fetchInstruments: (instruments) => {
			dispatch(fetchInstruments(instruments))
		}
	}
}

const VisibleButtonList = connect(
	mapStateToProps,
	mapDispatchToProps
)(ButtonList)

export default VisibleButtonList