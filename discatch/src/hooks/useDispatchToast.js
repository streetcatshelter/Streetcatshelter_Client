// LIBRARY
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function useDispatchToast(state, action) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (state) {
      setTimeout(() => {
        dispatch(action(false));
      }, 1500);
    }
  }, [state, action, dispatch]);
}

export default useDispatchToast;