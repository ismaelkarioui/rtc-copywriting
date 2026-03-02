import logoRtc from "@/assets/logo-rtc.png";

const FooterSection = () => {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <img src={logoRtc} alt="RTC Copywriting" className="h-16 w-auto" />
          <p className="text-sm text-muted-foreground mt-2">
            Architecture de conversion pour entrepreneurs sérieux.
          </p>
        </div>
        
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} RTC Copywriting. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
