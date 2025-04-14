
const Button = ({ children, onClick }) => {
    const handleClick = () => {
      console.log('Button clicked!');
      if (onClick) onClick();
    };
  
    return (
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
      >
        {children}
      </button>
    );
  };
  
  export default Button;