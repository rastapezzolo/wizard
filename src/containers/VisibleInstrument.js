import { connect } from 'react-redux';
import InstrumentList from '../components/InstrumentList';
import { fetchInstrumentData, fetchInstrumentDataSuccess } from '../actions/wizard'

const mapStateToProps = (state) => {
	return{
		instruments: state.instrumentReducer.instruments
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onLoadInstrument: (instrument) => {

				dispatch(fetchInstrumentData(instrument)).payload
				.then( (response) => {
//					console.log(response)
					if( "undefined" === typeof response.error ){
						//console.log(response.data)
						dispatch(fetchInstrumentDataSuccess(response.data))
					}
					/*else{
						console.log(response.error)
						dispatch(fetchInstrumentDataFail(response.error))
					}*/
				})	
			
			
		}
	}
}

const VisibleInstrumentList = connect(
	mapStateToProps,
	mapDispatchToProps
)(InstrumentList)


export default VisibleInstrumentList