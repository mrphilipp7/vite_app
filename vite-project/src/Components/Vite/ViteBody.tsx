type Props = {
  body: string;
};

const ViteBody = ({ body }: Props) => {
  return (
    <article className="py-2">
      <p>{body}</p>
    </article>
  );
};

export default ViteBody;
