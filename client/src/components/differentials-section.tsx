import { Card, CardContent } from "@/components/ui/card";
import { Building, Shield, Search, Users, DollarSign, MapPin } from "lucide-react";

const differentials = [
  {
    icon: Building,
    title: "Condições Especiais para Empresas",
    description: "Planos personalizados e condições diferenciadas para atender às necessidades específicas do seu negócio.",
    color: "bg-primary"
  },
  {
    icon: Shield,
    title: "Condomínio Fechado 24h",
    description: "Máxima segurança com monitoramento constante, controle de acesso e sistema de vigilância profissional.",
    color: "bg-primary"
  },
  {
    icon: Search,
    title: "Rastreabilidade Completa",
    description: "Acompanhamento detalhado de todos os documentos com histórico de movimentações e localização precisa.",
    color: "bg-primary"
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Profissionais qualificados com experiência em gestão documental e conhecimento das melhores práticas do setor.",
    color: "bg-primary"
  },
  {
    icon: DollarSign,
    title: "Custo-Benefício Comprovado",
    description: "Redução significativa de custos operacionais com aumento da eficiência e produtividade empresarial.",
    color: "bg-success"
  },
  {
    icon: MapPin,
    title: "Atuação Nacional",
    description: "Presença em todo território nacional com logística especializada e atendimento personalizado.",
    color: "bg-accent"
  }
];

export default function DifferentialsSection() {
  return (
    <section id="diferenciais" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Diferenciais TRDOCS</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Por que somos a melhor escolha para gestão documental da sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((differential) => {
            const IconComponent = differential.icon;
            
            return (
              <Card key={differential.title} className="bg-white text-center shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className={`${differential.color} bg-opacity-10 p-4 rounded-full inline-block mb-6`}>
                    <IconComponent className={`h-6 w-6 ${
                      differential.color === 'bg-primary' ? 'text-primary' :
                      differential.color === 'bg-success' ? 'text-success' :
                      'text-accent'
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4">
                    {differential.title}
                  </h3>
                  <p className="text-gray-600">
                    {differential.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
