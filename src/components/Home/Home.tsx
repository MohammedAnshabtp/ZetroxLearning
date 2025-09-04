import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { fetchUser } from "../../features/authSlice";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div>
      <h1>Welcome to EdTech!</h1>
    </div>
  );
}
