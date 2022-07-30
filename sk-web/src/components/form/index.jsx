const SkForm = ({ children, submit }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };
  return <form onSubmit={onSubmit}>{children}</form>;
};

export default SkForm;
