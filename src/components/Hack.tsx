const Hack = () => {
  const onHack = async () => {
    console.log('null');
  };
  return (
    <div className="w-full max-w-xs">
      <p>HACK</p>
      <button onClick={onHack}>OK?</button>
      <p className="text-center text-gray-500 text-xs">
        &copy;2022 Ynov. All rights reserved.
      </p>
    </div>
  );
};

export default Hack;
