const UserCard = ({ name, email }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
        <div className="font-bold text-xl mb-2 text-gray-800">{name}</div>
        <p className="text-gray-600 text-base">
          <span className="font-semibold">Email:</span> {email}
        </p>
      </div>
    );
  };
  
  export default UserCard;