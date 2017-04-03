import { connect } from 'react-redux';
import ButtonList from '../components/ButtonList';
import { fetchChildren, fetchChildrenSuccess, fetchChildrenFail } from '../actions/wizard'

const mapStateToProps = (state) => {
	buttons: state.buttons,
	active: state.active, 
	url: state.url, 
	title: state.title, 
	description: state.description
}

const mapDispatchToProps = (dispatch) => 
   	
	return {
	}
}

export const VisibleInstrumentList = connect(
	mapStateToProps,
	mapDispatchToProps
)(InstrumentList)