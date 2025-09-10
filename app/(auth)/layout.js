const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background/70 to-background py-12">
      <div className="w-full max-w-md px-4 sm:px-0">{children}</div>
    </div>
  );
};

export default AuthLayout;
