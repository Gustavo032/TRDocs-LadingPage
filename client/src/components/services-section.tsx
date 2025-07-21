import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Warehouse, FileScan, ClipboardCheck, Handshake, Cloud, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Warehouse,
    title: "Guarda de Documentos",
    description: "Armazenamento seguro em condomínio fechado com monitoramento 24h, controle de temperatura e umidade, e sistema anti-incêndio.",
    features: ["Segurança 24 horas", "Controle ambiental", "Rastreabilidade completa"],
    color: "bg-primary"
  },
  {
    icon: FileScan,
    title: "Digitalização de Documentos",
    description: "Conversão de documentos físicos para formato digital com alta qualidade, indexação automática e backup seguro.",
    features: ["Alta resolução", "Indexação inteligente", "Acesso remoto"],
    color: "bg-primary"
  },
  {
    icon: ClipboardCheck,
    title: "Gestão Documental",
    description: "Controle completo do ciclo de vida dos documentos, com classificação, temporalidade e políticas de retenção.",
    features: ["Controle de temporalidade", "Classificação automática", "Políticas de retenção"],
    color: "bg-primary"
  },
  {
    icon: Handshake,
    title: "BPO (Terceirização)",
    description: "Terceirização de processos documentais com equipe especializada para reduzir custos e aumentar eficiência.",
    features: ["Equipe especializada", "Redução de custos", "Maior eficiência"],
    color: "bg-primary"
  },
  {
    icon: Cloud,
    title: "Sistema GED (TRDOCS SYSTEM)",
    description: "Plataforma proprietária para gerenciamento eletrônico com funcionalidades avançadas e interface intuitiva.",
    features: ["Software proprietário", "Interface intuitiva", "Funcionalidades avançadas"],
    color: "bg-accent",
    isHighlight: true
  }
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas para gestão documental com tecnologia avançada e segurança máxima
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isFullWidth = index === services.length - 1 && services.length % 3 !== 0;
            
            return (
              <Card 
                key={service.title}
                className={`hover:shadow-xl transition-shadow border border-gray-100 ${
                  isFullWidth ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <CardHeader>
                  <div className={`${service.color} text-white p-4 rounded-lg inline-block mb-6 w-fit`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-secondary">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-success mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      service.isHighlight 
                        ? 'bg-accent text-white hover:bg-yellow-600' 
                        : 'bg-primary text-white hover:bg-blue-700'
                    }`}
                  >
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
