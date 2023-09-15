import { useNavigate, useRouteError } from "react-router-dom";
import ButtonSm from "./ButtonSm";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="my-52 flex flex-col items-center gap-y-5">
      <h1 className="text-lg font-semibold">Something went wrong 😢</h1>
      <p className="text-lg font-semibold">{error.data || error.message}</p>
      <ButtonSm onClick={() => navigate(-1)}>&larr; برگشت</ButtonSm>
    </div>
  );
}

export default Error;
