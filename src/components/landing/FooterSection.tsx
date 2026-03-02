import logoRtc from "@/assets/logo-rtc.png";

const FooterSection = () => {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <img src={logoRtc} alt="RTC Copywriting" className="h-16 w-auto" />
          <p className="text-sm text-muted-foreground mt-2">On assure la rentabilité de vos actifs de conversion en 3 étapes : Rétention, Tension, Conversion.

          </p>
        </div>
        
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} RTC Copywriting, Ismaël Karioui, tous droits réservés.
        </div>
      </div>
    </footer>);

};

export default FooterSection;
