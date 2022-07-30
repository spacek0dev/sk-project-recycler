const SkForm = ({ children, submit, styles = {} }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };
  return (
    <form
      style={{ width: "100%", height: "auto", ...styles }}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default SkForm;
