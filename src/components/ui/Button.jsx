function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "px-6 py-3 rounded-2xl font-semibold transition-all duration-300 active:scale-95";

  const variants = {
    primary:
      "bg-violet-500 text-white hover:bg-violet-600 hover:shadow-[0_0_25px_rgba(139,92,246,0.45)]",

    secondary:
      "bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20",

    outline:
      "border border-violet-500 text-violet-300 hover:bg-violet-500 hover:text-white",
  };

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;