type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <img
        src={picture}
        className="w-16 h-16 rounded-full object-cover mr-4"
        alt={name}
      />
      <div className="font-medium text-slate-700 dark:text-slate-300">
        {name}
      </div>
    </div>
  );
};

export default Avatar;
