
const useComponentWillMount = (React,func) => {
  const willMount = React.useRef(true);


  if (willMount.current) {
    func();
  }

  willMount.current = false;
};

export default useComponentWillMount;
