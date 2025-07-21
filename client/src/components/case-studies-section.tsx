import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building2, 
  Gavel, 
  Stethoscope, 
  Factory, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Users,
  CheckCircle,
  Target
} from "lucide-react";

const caseStudies = [
  {
    id: "tech-company",
    title: "TechCorp - Transformação Digital",
    sector: "Tecnologia",
    icon: Building2,
    color: "bg-blue-500",
    challenge: "Empresa de tecnologia com 200 funcionários enfrentava dificuldades para gerenciar contratos, documentos fiscais e conformidade regulatória.",
    solution: "Implementação completa do sistema GED TRDOCS com digitalização de 80.000 documentos e integração com ERP existente.",
    results: {
      timeReduction: 75,
      costSaving: 60,
      spaceReduction: 85,
      efficiency: 90
    },
    metrics: [
      { label: "Documentos digitalizados", value: "80.000", icon: "📄" },
      { label: "Tempo de busca reduzido", value: "75%", icon: "⏱️" },
      { label: "Economia anual", value: "R$ 180k", icon: "💰" },
      { label: "ROI no primeiro ano", value: "320%", icon: "📈" }
    ],
    testimonial: "A TRDOCS transformou completamente nossa gestão documental. Agora encontramos qualquer documento em segundos.",
    author: "Carlos Silva, CTO"
  },
  {
    id: "law-firm",
    title: "Advocacia Premium - Compliance Legal",
    sector: "Jurídico",
    icon: Gavel,
    color: "bg-amber-500",
    challenge: "Escritório de advocacia com necessidade de alta segurança, controle de versões e auditoria completa de todos os documentos.",
    solution: "Sistema GED personalizado com assinatura digital, controle de acesso granular e backup triplo com certificação ISO.",
    results: {
      timeReduction: 80,
      costSaving: 45,
      spaceReduction: 90,
      efficiency: 95
    },
    metrics: [
      { label: "Processos organizados", value: "12.000", icon: "⚖️" },
      { label: "Compliance atingido", value: "100%", icon: "✅" },
      { label: "Auditores satisfeitos", value: "15/15", icon: "👥" },
      { label: "Tempo p/ relatórios", value: "-85%", icon: "📊" }
    ],
    testimonial: "Nunca mais perdemos um prazo. O controle de versões e a rastreabilidade são perfeitos.",
    author: "Dra. Maria Santos, Sócia"
  },
  {
    id: "healthcare",
    title: "Clínica Saúde+ - Prontuários Digitais",
    sector: "Saúde",
    icon: Stethoscope,
    color: "bg-green-500",
    challenge: "Clínica médica precisava digitalizar prontuários respeitando sigilo médico e regulamentações do CFM.",
    solution: "Digitalização certificada com criptografia end-to-end, backup em nuvem segura e acesso controlado por biometria.",
    results: {
      timeReduction: 70,
      costSaving: 55,
      spaceReduction: 95,
      efficiency: 85
    },
    metrics: [
      { label: "Prontuários digitalizados", value: "25.000", icon: "🏥" },
      { label: "Conformidade LGPD", value: "100%", icon: "🛡️" },
      { label: "Acesso instantâneo", value: "24/7", icon: "🕐" },
      { label: "Satisfação pacientes", value: "98%", icon: "😊" }
    ],
    testimonial: "Os médicos adoraram! Acesso instantâneo ao histórico completo do paciente em qualquer consultório.",
    author: "Dr. João Mendes, Diretor Clínico"
  },
  {
    id: "manufacturing",
    title: "Indústria Global - Gestão Técnica",
    sector: "Industrial",
    icon: Factory,
    color: "bg-orange-500",
    challenge: "Indústria multinacional com milhares de manuais técnicos, certificados e documentos regulatórios espalhados.",
    solution: "Sistema integrado multi-idioma com OCR avançado, classificação automática e distribuição global sincronizada.",
    results: {
      timeReduction: 85,
      costSaving: 70,
      spaceReduction: 80,
      efficiency: 92
    },
    metrics: [
      { label: "Manuais digitalizados", value: "150.000", icon: "📚" },
      { label: "Idiomas suportados", value: "12", icon: "🌍" },
      { label: "Filiais conectadas", value: "45", icon: "🏭" },
      { label: "Redução de erros", value: "95%", icon: "✨" }
    ],
    testimonial: "Revolucionou nossa operação global. Mesmo documento atualizado simultaneamente em 45 países.",
    author: "Roberto Costa, Gerente Global"
  }
];

export default function CaseStudiesSection() {
  return (
    <section id="casos-de-sucesso" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Casos de Sucesso</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça como empresas de diferentes setores transformaram sua gestão documental
          </p>
        </div>

        <Tabs defaultValue="tech-company" className="max-w-6xl mx-auto">
          <TabsList className="grid grid-cols-4 w-full">
            {caseStudies.map((study) => {
              const IconComponent = study.icon;
              return (
                <TabsTrigger 
                  key={study.id} 
                  value={study.id}
                  className="flex flex-col items-center gap-2 h-20"
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="text-xs">{study.sector}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {caseStudies.map((study) => (
            <TabsContent key={study.id} value={study.id} className="mt-8">
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary to-blue-600 text-white">
                  <div className="flex items-center gap-4">
                    <div className={`${study.color} p-3 rounded-full`}>
                      <study.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{study.title}</CardTitle>
                      <Badge className="bg-white/20 text-white mt-2">
                        Setor {study.sector}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-bold text-secondary mb-3 flex items-center gap-2">
                        <Target className="h-5 w-5" />
                        Desafio
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {study.challenge}
                      </p>

                      <h4 className="text-lg font-bold text-secondary mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        Solução
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-secondary mb-4">Resultados Alcançados</h4>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">Redução de Tempo</span>
                            <span className="text-sm font-semibold">{study.results.timeReduction}%</span>
                          </div>
                          <Progress value={study.results.timeReduction} className="h-2" />
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">Economia de Custos</span>
                            <span className="text-sm font-semibold">{study.results.costSaving}%</span>
                          </div>
                          <Progress value={study.results.costSaving} className="h-2" />
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">Redução de Espaço</span>
                            <span className="text-sm font-semibold">{study.results.spaceReduction}%</span>
                          </div>
                          <Progress value={study.results.spaceReduction} className="h-2" />
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">Eficiência Geral</span>
                            <span className="text-sm font-semibold">{study.results.efficiency}%</span>
                          </div>
                          <Progress value={study.results.efficiency} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid md:grid-cols-4 gap-6 mb-8">
                    {study.metrics.map((metric, index) => (
                      <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl mb-2">{metric.icon}</div>
                        <div className="text-2xl font-bold text-primary mb-1">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-primary">
                    <CardContent className="p-6">
                      <blockquote className="text-lg italic text-gray-700 mb-4">
                        "{study.testimonial}"
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <div className="bg-primary text-white p-2 rounded-full">
                          <Users className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-secondary">{study.author}</div>
                          <div className="text-sm text-gray-600">{study.title.split(' - ')[0]}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-primary to-blue-600 text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Pronto para Transformar Sua Empresa?</h3>
              <p className="mb-6">
                Junte-se a centenas de empresas que já revolucionaram sua gestão documental
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Solicitar Demonstração Gratuita
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}