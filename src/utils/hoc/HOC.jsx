import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function HOC(WrappedComponent) {
  return function(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    return (
      <WrappedComponent
        {...props}
        navigate={navigate}
        dispatch={dispatch}
        state={state}
      />
    );
  };
}
export default HOC;
