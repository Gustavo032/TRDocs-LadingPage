import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Download, 
  FileText, 
  Shield, 
  Zap, 
  TrendingUp, 
  Calendar,
  User,
  Clock,
  ArrowRight
} from "lucide-react";

const resources = [
  {
    id: 1,
    type: "Guia",
    title: "Guia Completo de LGPD para Empresas",
    description: "Tudo que sua empresa precisa saber sobre a Lei Geral de Proteção de Dados e como implementar as melhores práticas.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    downloadLink: "#",
    category: "Compliance",
    readTime: "15 min",
    date: "2024-01-15",
    author: "Dra. Maria Silva",
    downloads: 2847
  },
  {
    id: 2,
    type: "E-book",
    title: "ROI da Digitalização: Como Calcular o Retorno",
    description: "Metodologia completa para medir e demonstrar o retorno do investimento em projetos de digitalização documental.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    downloadLink: "#",
    category: "Financeiro",
    readTime: "25 min",
    date: "2024-01-10",
    author: "Carlos Mendes",
    downloads: 1923
  },
  {
    id: 3,
    type: "Template",
    title: "Checklist de Auditoria Documental",
    description: "Template pronto para usar em auditorias de conformidade documental com checklist detalhado por setor.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    downloadLink: "#",
    category: "Auditoria",
    readTime: "10 min",
    date: "2024-01-05",
    author: "Ana Costa",
    downloads: 3156
  },
  {
    id: 4,
    type: "Whitepaper",
    title: "Futuro da Gestão Documental com IA",
    description: "Como a inteligência artificial está revolucionando a classificação, busca e análise de documentos corporativos.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    downloadLink: "#",
    category: "Tecnologia",
    readTime: "20 min",
    date: "2023-12-28",
    author: "Roberto Santos",
    downloads: 1674
  },
  {
    id: 5,
    type: "Infográfico",
    title: "Cronograma de Retenção por Setor",
    description: "Infográfico visual com os principais prazos de retenção documental para diferentes setores empresariais.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    downloadLink: "#",
    category: "Compliance",
    readTime: "5 min",
    date: "2023-12-20",
    author: "Fernanda Lima",
    downloads: 4231
  },
  {
    id: 6,
    type: "Planilha",
    title: "Calculadora de Custos de Armazenamento",
    description: "Planilha Excel com fórmulas prontas para calcular custos de armazenamento físico vs. digital.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    downloadLink: "#",
    category: "Financeiro",
    readTime: "12 min",
    date: "2023-12-15",
    author: "João Oliveira",
    downloads: 2789
  }
];

const categories = ["Todos", "Compliance", "Financeiro", "Auditoria", "Tecnologia"];

export default function ResourcesSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="recursos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Recursos Gratuitos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Materiais exclusivos para aprimorar sua gestão documental
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Todos" ? "default" : "outline"}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource) => (
            <Card key={resource.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative">
                <img 
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-white">
                    {resource.type}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-white/90">
                    {resource.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-secondary line-clamp-2">
                  {resource.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {resource.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {resource.readTime}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Download className="h-4 w-4" />
                    {resource.downloads.toLocaleString()} downloads
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(resource.date).toLocaleDateString('pt-BR')}
                  </div>
                </div>
                
                <Button className="w-full group" onClick={scrollToContact}>
                  <Download className="h-4 w-4 mr-2" />
                  Baixar Gratuito
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-gradient-to-r from-primary to-blue-600 text-white max-w-4xl mx-auto">
          <CardContent className="p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Receba Novos Recursos por E-mail
              </h3>
              <p className="text-blue-100 mb-8 text-lg">
                Seja o primeiro a receber nossos guias, templates e estudos exclusivos sobre gestão documental
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                />
                <Button 
                  size="lg"
                  className="bg-accent text-white hover:bg-yellow-600 whitespace-nowrap"
                  onClick={scrollToContact}
                >
                  Quero Receber
                </Button>
              </div>
              
              <p className="text-blue-200 text-sm mt-4">
                Sem spam. Cancele quando quiser. Seus dados estão seguros conosco.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Resource Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <p className="text-gray-600">Recursos Disponíveis</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">25k+</div>
            <p className="text-gray-600">Downloads Realizados</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">12</div>
            <p className="text-gray-600">Especialistas Contribuindo</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <p className="text-gray-600">Conteúdo Gratuito</p>
          </div>
        </div>
      </div>
    </section>
  );
}