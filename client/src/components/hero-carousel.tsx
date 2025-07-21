import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Shield } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Guarda de Documentos",
    subtitle: "Alta capacidade de armazenamento e segurança em condomínio fechado",
    description: "Proteja seus documentos mais importantes com nossa infraestrutura de última geração, sistema de segurança 24h e controle rigoroso de acesso.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
  },
  {
    title: "Digitalização de Documentos",
    subtitle: "Tenha acesso remoto, seguro e rápido aos seus arquivos",
    description: "Transforme seus documentos físicos em arquivos digitais de alta qualidade, com indexação inteligente e acesso instantâneo de qualquer lugar.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
  },
  {
    title: "Gestão Documental",
    subtitle: "Controle de temporalidade, digitalização, classificação e guarda",
    description: "Otimize seus processos documentais com soluções integradas que abrangem todo o ciclo de vida dos documentos empresariais.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
  },
  {
    title: "TRDOCS System (GED)",
    subtitle: "O melhor software para Gerenciamento Eletrônico de Documentos",
    description: "Nossa plataforma proprietária oferece funcionalidades avançadas para organização, busca e controle de documentos digitais com segurança empresarial.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-primary to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="relative min-h-[600px] flex items-center">
		{slides.map((slide, index) => (
			<div
				key={index}
				className={`absolute inset-0 flex items-center transition-opacity duration-500 ${
				index === currentSlide ? 'opacity-100' : 'opacity-0'
				}`}
			>
				{/* <- Imagem de fundo agora com pointer-events-none para não bloquear cliques */}
				<div 
				className="absolute inset-0 bg-cover bg-center pointer-events-none"
				style={{
					backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(30, 64, 175, 0.8)), url('${slide.image}')`
				}}
				/>
				{/* <- Conteúdo com z-10 */}
				{/* <div className="container mx-auto px-4 pb-24 relative z-10"> */}
				<div className="container mx-auto px-4 sm:px-20 relative z-10">
				<div className="max-w-2xl">
					<h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
					<h3 className="text-xl mb-6 text-blue-100">{slide.subtitle}</h3>
					<p className="text-lg mb-8 leading-relaxed">{slide.description}</p>
					<div className="flex flex-col sm:flex-row gap-4">
					<Button 
						size="lg"
						className="bg-accent text-white hover:bg-yellow-600"
					>
						Mais Detalhes
					</Button>
					<Button 
						size="lg"
						variant="outline" 
						className="border-2 border-white text-black hover:bg-white hover:text-primary"
						onClick={scrollToContact}
					>
						Solicitar Orçamento
					</Button>
					</div>
				</div>
				</div>
			</div>
		))}


        {/* Navigation */}
        <button 
			onClick={prevSlide}
			className="absolute z-20 left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
		>
		<ChevronLeft className="h-6 w-6" />
		</button>

		<button 
		onClick={nextSlide}
		className="absolute z-20 right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
		>
			<ChevronRight className="h-6 w-6" />
		</button>

        {/* Dots */}
       <div className="absolute z-20 bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
			{slides.map((_, index) => (
				<button
				key={index}
				onClick={() => goToSlide(index)}
				className={`w-3 h-3 bg-white rounded-full transition-opacity ${
					index === currentSlide ? 'opacity-100' : 'opacity-50'
				}`}
				/>
			))}
		</div>
      </div>

      {/* Trust Badge */}
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-white font-medium">
            <Shield className="inline h-5 w-5 mr-2" />
            Protegendo seu passado, digitalizando seu presente, organizando seu futuro.
          </p>
        </div>
      </div>
    </section>
  );
}
