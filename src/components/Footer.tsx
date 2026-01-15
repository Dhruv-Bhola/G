const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border bg-muted/20">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          Be +ve always and be HAPPY!!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
