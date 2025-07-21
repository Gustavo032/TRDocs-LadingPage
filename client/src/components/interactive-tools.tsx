import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, FileCheck, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const faqItems = [
  {
    question: "O que é GED (Gerenciamento Eletrônico de Documentos)?",
    answer: "GED é um sistema que permite armazenar, gerenciar, controlar e acessar documentos digitais de forma organizada e segura, facilitando a localização e o compartilhamento de informações."
  },
  {
    question: "Como funciona o processo de digitalização?",
    answer: "O processo inclui preparação dos documentos, digitalização em alta resolução, indexação automática, controle de qualidade e disponibilização no sistema GED com backup seguro."
  },
  {
    question: "Quais são os benefícios da guarda terceirizada?",
    answer: "Redução de custos, otimização de espaço, maior segurança, controle de acesso, rastreabilidade completa e foco no core business da empresa."
  },
  {
    question: "A digitalização tem validade jurídica?",
    answer: "Sim, quando feita seguindo as normas técnicas e legais vigentes, incluindo certificação digital e procedimentos de autenticidade conforme a legislação brasileira."
  }
];

export default function InteractiveTools() {
  const [boxCount, setBoxCount] = useState("");
  const [folderCount, setFolderCount] = useState("");
  const [calculatedSpace, setCalculatedSpace] = useState("");
  const [showResult, setShowResult] = useState(false);
  
  const [leadEmail, setLeadEmail] = useState("");
  const [leadCompany, setLeadCompany] = useState("");
  
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  
  const { toast } = useToast();

  const leadMutation = useMutation({
    mutationFn: async (data: { email: string; company?: string; type: string }) => {
      return await apiRequest("POST", "/api/leads", data);
    },
    onSuccess: () => {
      toast({
        title: "Sucesso!",
        description: "Checklist enviado para seu e-mail. Verifique também a caixa de spam.",
      });
      setLeadEmail("");
      setLeadCompany("");
    },
    onError: () => {
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao processar sua solicitação. Tente novamente.",
        variant: "destructive",
      });
    },
  });

  const calculateSpace = () => {
    const boxes = parseInt(boxCount) || 0;
    const folders = parseInt(folderCount) || 0;
    
    // Simple calculation: 1 box = 0.2m², 1 folder = 0.01m²
    const estimatedSpace = (boxes * 0.2) + (folders * 0.01);
    
    if (estimatedSpace > 0) {
      setCalculatedSpace(estimatedSpace.toFixed(1));
      setShowResult(true);
    }
  };

  const downloadChecklist = () => {
    if (!leadEmail) {
      toast({
        title: "E-mail obrigatório",
        description: "Por favor, informe seu e-mail para receber o checklist.",
        variant: "destructive",
      });
      return;
    }

    leadMutation.mutate({
      email: leadEmail,
      company: leadCompany || undefined,
      type: 'checklist'
    });
  };

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <section id="ferramentas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Ferramentas Úteis</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recursos gratuitos para auxiliar na gestão documental da sua empresa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Space Calculator */}
          <Card className="bg-gradient-to-br from-primary to-blue-700 text-white">
            <CardContent className="p-8">
              <div className="mb-6">
                <Calculator className="h-8 w-8 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Calculadora de Espaço</h3>
                <p className="mb-6 opacity-90">
                  Estime o espaço físico necessário baseado na quantidade de documentos
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label className="text-white font-medium mb-2">Número de Caixas Arquivo</Label>
                  <Input 
                    type="number" 
                    placeholder="Ex: 100"
                    value={boxCount}
                    onChange={(e) => setBoxCount(e.target.value)}
                    className="bg-white text-secondary"
                  />
                </div>
                <div>
                  <Label className="text-white font-medium mb-2">Número de Pastas</Label>
                  <Input 
                    type="number" 
                    placeholder="Ex: 500"
                    value={folderCount}
                    onChange={(e) => setFolderCount(e.target.value)}
                    className="bg-white text-secondary"
                  />
                </div>
                <Button 
                  onClick={calculateSpace}
                  className="w-full bg-accent text-white hover:bg-yellow-600"
                >
                  Calcular Espaço Necessário
                </Button>
                
                {showResult && (
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <p className="font-medium">Espaço estimado: {calculatedSpace} m²</p>
                    <p className="text-sm opacity-80 mt-2">*Cálculo aproximado baseado em padrões de arquivo</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Document Checklist */}
          <Card className="bg-gradient-to-br from-success to-green-700 text-white">
            <CardContent className="p-8">
              <div className="mb-6">
                <FileCheck className="h-8 w-8 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Checklist de Gestão Documental</h3>
                <p className="mb-6 opacity-90">
                  Guia completo com as melhores práticas para organização de documentos
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h4 className="font-medium mb-2">O que você receberá:</h4>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>✓ Checklist de documentos obrigatórios</li>
                    <li>✓ Cronograma de retenção</li>
                    <li>✓ Políticas de descarte</li>
                    <li>✓ Guia de digitalização</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <Input 
                    type="email" 
                    placeholder="Seu e-mail para download"
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    className="bg-white text-secondary"
                  />
                  <Input 
                    type="text" 
                    placeholder="Nome da empresa"
                    value={leadCompany}
                    onChange={(e) => setLeadCompany(e.target.value)}
                    className="bg-white text-secondary"
                  />
                </div>
                
                <Button 
                  onClick={downloadChecklist}
                  disabled={leadMutation.isPending}
                  className="w-full bg-white text-success hover:bg-gray-100"
                >
                  {leadMutation.isPending ? "Enviando..." : "Baixar Checklist Gratuito"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mini FAQ */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-secondary mb-8 text-center">Perguntas Frequentes</h3>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-secondary">{item.question}</span>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-400 transition-transform ${
                      expandedFAQ === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
