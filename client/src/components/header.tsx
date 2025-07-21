import { Button } from "@/components/ui/button";
import { FileText, Phone } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-primary text-white p-2 rounded-lg">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">TRDOCS</h1>
              <p className="text-xs text-gray-600">Gestão Documental</p>
            </div>
          </div>
          
          <nav className="hidden lg:flex space-x-6">
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-secondary hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('ferramentas-avancadas')}
              className="text-secondary hover:text-primary transition-colors"
            >
              Ferramentas
            </button>
            <button 
              onClick={() => scrollToSection('casos-de-sucesso')}
              className="text-secondary hover:text-primary transition-colors"
            >
              Casos
            </button>
            <button 
              onClick={() => scrollToSection('precos')}
              className="text-secondary hover:text-primary transition-colors"
            >
              Preços
            </button>
            <button 
              onClick={() => scrollToSection('recursos')}
              className="text-secondary hover:text-primary transition-colors"
            >
              Recursos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-secondary hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+5511999999999" 
              className="hidden md:flex items-center text-secondary hover:text-primary"
            >
              <Phone className="h-4 w-4 mr-2" />
              (11) 9999-9999
            </a>
            <Button 
              className="bg-accent text-white hover:bg-yellow-600"
              onClick={() => scrollToSection('contato')}
            >
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
