type Props = {
  UserName: string;
  email: string;
};

const ViteHeader = ({ UserName, email }: Props) => {
  return (
    <header>
      <p className="text-lg font-semibold">{UserName}</p>
      <p className="text-gray-400 text-sm">{email}</p>
    </header>
  );
};

export default ViteHeader;
