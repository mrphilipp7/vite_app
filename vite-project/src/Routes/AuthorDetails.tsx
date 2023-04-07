import { usePostID } from "../hooks/usePostID";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import ServerError from "../Components/ServerError";
import Card from "../Components/Card/Card";

const AuthorDetails = () => {
  const { postId } = useParams();
  const { isLoading, data, isError } = usePostID(postId);
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <ServerError />;
  }

  return (
    <div className="justify-center items-center flex h-screen space-x-4 ">
      <Card>
        <Card.Title title={data.data.author}>
          <p className="text-white/50 text-sm font-bold">ID: {data.data.id}</p>
        </Card.Title>
        <Card.Body>
          <p className="text-white tracking-wide font-sans py-2 h-44 overflow-y-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
            commodo viverra maecenas accumsan. Nullam vehicula ipsum a arcu
            cursus vitae. Nunc sed augue lacus viverra vitae congue eu. Vitae
            justo eget magna fermentum iaculis eu non diam phasellus.
            Sollicitudin nibh sit amet commodo nulla facilisi. Luctus venenatis
            lectus magna fringilla urna porttitor rhoncus dolor. Vulputate eu
            scelerisque felis imperdiet proin fermentum leo. Consequat id porta
            nibh venenatis cras. Sit amet est placerat in egestas.
          </p>
        </Card.Body>
        <Card.Footer likeAmount="30" />
      </Card>
    </div>
  );
};

export default AuthorDetails;
