export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/20 border-t border-border py-12 px-4">
      {/* Bottom Bar */}
      <div className="md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-muted-foreground text-sm text-center">
          © {currentYear} Irsyad. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
