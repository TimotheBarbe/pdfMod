import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {IStoreState} from "../../state/models";
import PdfPreview from "./PdfPreview";
import {pdfSelector} from "../redux/selectors";

const mapStateToProps = (state: IStoreState) => ({
    pdf: pdfSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    // select: () => dispatch(testAction("action")),
});

export default connect(mapStateToProps, mapDispatchToProps)(PdfPreview);