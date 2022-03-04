// LIBRARY
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function useToast(state, toast) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (state) {
      setTimeout(() => {
        dispatch(toast(false));
      }, 1500);
    }
  }, [state, toast, dispatch]);
}

export default useToast;