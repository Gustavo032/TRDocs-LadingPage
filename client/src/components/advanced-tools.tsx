import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calculator, 
  Clock, 
  FileCheck, 
  Shield, 
  TrendingUp, 
  Database, 
  Search, 
  Zap,
  Calendar,
  FileText,
  AlertTriangle,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

const tools = [
  {
    id: "space-calculator",
    title: "Calculadora de Espaço Avançada",
    description: "Calcule com precisão o espaço necessário para armazenamento físico",
    icon: Calculator,
    color: "bg-blue-500"
  },
  {
    id: "retention-schedule",
    title: "Cronograma de Retenção",
    description: "Gere tabelas de temporalidade personalizadas por setor",
    icon: Clock,
    color: "bg-green-500"
  },
  {
    id: "compliance-checker",
    title: "Verificador de Conformidade",
    description: "Verifique se seus documentos atendem às normas legais",
    icon: Shield,
    color: "bg-red-500"
  },
  {
    id: "roi-calculator",
    title: "Calculadora de ROI",
    description: "Calcule o retorno do investimento em digitalização",
    icon: TrendingUp,
    color: "bg-purple-500"
  },
  {
    id: "backup-planner",
    title: "Planejador de Backup",
    description: "Crie estratégias de backup para documentos digitais",
    icon: Database,
    color: "bg-indigo-500"
  },
  {
    id: "search-optimizer",
    title: "Otimizador de Busca",
    description: "Melhore a indexação e busca de documentos",
    icon: Search,
    color: "bg-yellow-500"
  },
  {
    id: "workflow-designer",
    title: "Designer de Fluxo",
    description: "Crie fluxos de trabalho para aprovação de documentos",
    icon: Zap,
    color: "bg-orange-500"
  },
  {
    id: "audit-scheduler",
    title: "Agendador de Auditoria",
    description: "Programe auditorias periódicas de documentos",
    icon: Calendar,
    color: "bg-teal-500"
  }
];

// Space Calculator Component
const SpaceCalculator = () => {
  const [formData, setFormData] = useState({
    boxes: "",
    folders: "",
    drawers: "",
    binders: "",
    books: "",
    special: ""
  });
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const boxes = parseInt(formData.boxes) || 0;
    const folders = parseInt(formData.folders) || 0;
    const drawers = parseInt(formData.drawers) || 0;
    const binders = parseInt(formData.binders) || 0;
    const books = parseInt(formData.books) || 0;
    const special = parseInt(formData.special) || 0;

    // Cálculos mais precisos baseados em medidas reais
    const boxSpace = boxes * 0.036; // 36x25x30cm
    const folderSpace = folders * 0.002; // Pasta suspensa
    const drawerSpace = drawers * 0.045; // Gaveta arquivo
    const binderSpace = binders * 0.006; // Pasta AZ
    const bookSpace = books * 0.003; // Livros médios
    const specialSpace = special * 0.1; // Documentos especiais

    const totalM3 = boxSpace + folderSpace + drawerSpace + binderSpace + bookSpace + specialSpace;
    const totalM2 = totalM3 * 3.5; // Considerando altura e acessibilidade
    
    const shelfUnits = Math.ceil(totalM3 / 2.1); // Estante padrão
    const monthlyCost = totalM2 * 12.50; // Custo por m² mensal
    const annualCost = monthlyCost * 12;

    setResult({
      totalM3: totalM3.toFixed(2),
      totalM2: totalM2.toFixed(2),
      shelfUnits,
      monthlyCost: monthlyCost.toFixed(2),
      annualCost: annualCost.toFixed(2),
      items: boxes + folders + drawers + binders + books + special
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label>Caixas Arquivo</Label>
          <Input 
            type="number" 
            placeholder="0"
            value={formData.boxes}
            onChange={(e) => setFormData({...formData, boxes: e.target.value})}
          />
        </div>
        <div>
          <Label>Pastas Suspensas</Label>
          <Input 
            type="number" 
            placeholder="0"
            value={formData.folders}
            onChange={(e) => setFormData({...formData, folders: e.target.value})}
          />
        </div>
        <div>
          <Label>Gavetas de Arquivo</Label>
          <Input 
            type="number" 
            placeholder="0"
            value={formData.drawers}
            onChange={(e) => setFormData({...formData, drawers: e.target.value})}
          />
        </div>
        <div>
          <Label>Pastas AZ</Label>
          <Input 
            type="number" 
            placeholder="0"
            value={formData.binders}
            onChange={(e) => setFormData({...formData, binders: e.target.value})}
          />
        </div>
        <div>
          <Label>Livros/Manuais</Label>
          <Input 
            type="number" 
            placeholder="0"
            value={formData.books}
            onChange={(e) => setFormData({...formData, books: e.target.value})}
          />
        </div>
        <div>
          <Label>Documentos Especiais</Label>
          <Input 
            type="number" 
            placeholder="0"
            value={formData.special}
            onChange={(e) => setFormData({...formData, special: e.target.value})}
          />
        </div>
      </div>

      <Button onClick={calculate} className="w-full">
        Calcular Espaço Necessário
      </Button>

      {result && (
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <h4 className="font-bold text-primary mb-4">Resultado do Cálculo</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><strong>Total de itens:</strong> {result.items}</p>
                <p><strong>Volume (m³):</strong> {result.totalM3}</p>
                <p><strong>Área (m²):</strong> {result.totalM2}</p>
              </div>
              <div>
                <p><strong>Estantes necessárias:</strong> {result.shelfUnits}</p>
                <p><strong>Custo mensal:</strong> R$ {result.monthlyCost}</p>
                <p><strong>Custo anual:</strong> R$ {result.annualCost}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

// Retention Schedule Component
const RetentionSchedule = () => {
  const [sector, setSector] = useState("");
  const [docType, setDocType] = useState("");
  const [schedule, setSchedule] = useState<any>(null);

  const schedules = {
    "financeiro": {
      "notas-fiscais": { active: 5, inactive: 25, action: "Guardar permanentemente" },
      "contratos": { active: 10, inactive: 90, action: "Guardar permanentemente" },
      "folha-pagamento": { active: 5, inactive: 95, action: "Guardar permanentemente" },
      "contas-pagar": { active: 5, inactive: 5, action: "Eliminar" },
    },
    "juridico": {
      "atas": { active: 10, inactive: 90, action: "Guardar permanentemente" },
      "procurações": { active: 5, inactive: 10, action: "Eliminar após validade" },
      "contratos": { active: 10, inactive: 90, action: "Guardar permanentemente" },
    },
    "rh": {
      "admissao": { active: 5, inactive: 45, action: "Guardar permanentemente" },
      "ferias": { active: 5, inactive: 5, action: "Eliminar" },
      "treinamentos": { active: 5, inactive: 15, action: "Eliminar" },
    }
  };

  const generateSchedule = () => {
    if (sector && docType) {
      const data = schedules[sector as keyof typeof schedules]?.[docType as keyof typeof schedules[keyof typeof schedules]];
      if (data) {
        setSchedule(data);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label>Setor</Label>
          <Select onValueChange={setSector}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o setor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="financeiro">Financeiro</SelectItem>
              <SelectItem value="juridico">Jurídico</SelectItem>
              <SelectItem value="rh">Recursos Humanos</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Tipo de Documento</Label>
          <Select onValueChange={setDocType}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o documento" />
            </SelectTrigger>
            <SelectContent>
              {sector && Object.keys(schedules[sector as keyof typeof schedules] || {}).map(doc => (
                <SelectItem key={doc} value={doc}>{doc.replace('-', ' ').toUpperCase()}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button onClick={generateSchedule} className="w-full">
        Gerar Cronograma
      </Button>

      {schedule && (
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-6">
            <h4 className="font-bold text-green-700 mb-4">Cronograma de Retenção</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Arquivo Corrente:</span>
                <Badge variant="secondary">{schedule.active} anos</Badge>
              </div>
              <div className="flex justify-between">
                <span>Arquivo Intermediário:</span>
                <Badge variant="secondary">{schedule.inactive} anos</Badge>
              </div>
              <div className="flex justify-between">
                <span>Destinação Final:</span>
                <Badge className="bg-green-600">{schedule.action}</Badge>
              </div>
              <div className="mt-4 p-3 bg-green-100 rounded">
                <p className="text-sm text-green-800">
                  <strong>Total:</strong> {schedule.active + schedule.inactive} anos de guarda
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

// ROI Calculator Component  
const ROICalculator = () => {
  const [formData, setFormData] = useState({
    currentCost: "",
    digitalCost: "",
    timeReduction: "",
    employees: ""
  });
  const [roi, setROI] = useState<any>(null);

  const calculateROI = () => {
    const currentMonthly = parseFloat(formData.currentCost) || 0;
    const digitalMonthly = parseFloat(formData.digitalCost) || 0;
    const timeReduced = parseFloat(formData.timeReduction) || 0;
    const employeeCount = parseFloat(formData.employees) || 0;

    const currentAnnual = currentMonthly * 12;
    const digitalAnnual = digitalMonthly * 12;
    const costSavings = currentAnnual - digitalAnnual;

    // Economia de tempo convertida em valor
    const avgSalary = 4500; // Salário médio mensal
    const hoursPerMonth = 168; // Horas de trabalho
    const valuePerHour = avgSalary / hoursPerMonth;
    const timeSavings = (timeReduced * employeeCount * valuePerHour * 12);

    const totalSavings = costSavings + timeSavings;
    const roiPercentage = ((totalSavings / digitalAnnual) * 100);
    const paybackMonths = digitalAnnual / (totalSavings / 12);

    setROI({
      costSavings: costSavings.toFixed(2),
      timeSavings: timeSavings.toFixed(2),
      totalSavings: totalSavings.toFixed(2),
      roiPercentage: roiPercentage.toFixed(1),
      paybackMonths: paybackMonths.toFixed(1)
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label>Custo Atual Mensal (R$)</Label>
          <Input 
            type="number" 
            placeholder="5000"
            value={formData.currentCost}
            onChange={(e) => setFormData({...formData, currentCost: e.target.value})}
          />
        </div>
        <div>
          <Label>Custo Digital Mensal (R$)</Label>
          <Input 
            type="number" 
            placeholder="2000"
            value={formData.digitalCost}
            onChange={(e) => setFormData({...formData, digitalCost: e.target.value})}
          />
        </div>
        <div>
          <Label>Horas Economizadas/Mês</Label>
          <Input 
            type="number" 
            placeholder="40"
            value={formData.timeReduction}
            onChange={(e) => setFormData({...formData, timeReduction: e.target.value})}
          />
        </div>
        <div>
          <Label>Funcionários Envolvidos</Label>
          <Input 
            type="number" 
            placeholder="5"
            value={formData.employees}
            onChange={(e) => setFormData({...formData, employees: e.target.value})}
          />
        </div>
      </div>

      <Button onClick={calculateROI} className="w-full">
        Calcular ROI
      </Button>

      {roi && (
        <Card className="bg-purple-50 border-purple-200">
          <CardContent className="p-6">
            <h4 className="font-bold text-purple-700 mb-4">Análise de ROI</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Economia de Custos:</span>
                <span className="font-semibold text-green-600">R$ {roi.costSavings}/ano</span>
              </div>
              <div className="flex justify-between">
                <span>Economia de Tempo:</span>
                <span className="font-semibold text-green-600">R$ {roi.timeSavings}/ano</span>
              </div>
              <div className="flex justify-between">
                <span>Economia Total:</span>
                <span className="font-semibold text-green-600">R$ {roi.totalSavings}/ano</span>
              </div>
              <div className="flex justify-between">
                <span>ROI:</span>
                <Badge className="bg-purple-600">{roi.roiPercentage}%</Badge>
              </div>
              <div className="flex justify-between">
                <span>Payback:</span>
                <Badge variant="outline">{roi.paybackMonths} meses</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default function AdvancedTools() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const renderTool = (toolId: string) => {
    switch (toolId) {
      case "space-calculator":
        return <SpaceCalculator />;
      case "retention-schedule":
        return <RetentionSchedule />;
      case "roi-calculator":
        return <ROICalculator />;
      default:
        return (
          <div className="text-center py-8">
            <FileText className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-600">Esta ferramenta estará disponível em breve!</p>
            <p className="text-sm text-gray-500 mt-2">
              Estamos trabalhando para trazer mais funcionalidades úteis.
            </p>
          </div>
        );
    }
  };

  return (
    <section id="ferramentas-avancadas" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Ferramentas Profissionais</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Suite completa de ferramentas para otimizar sua gestão documental
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <Dialog key={tool.id}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-lg transition-all group">
                    <CardHeader className="text-center pb-4">
                      <div className={`${tool.color} text-white p-4 rounded-full inline-block mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg font-bold text-secondary">
                        {tool.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm text-center">
                        {tool.description}
                      </p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3">
                      <div className={`${tool.color} text-white p-2 rounded-lg`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      {tool.title}
                    </DialogTitle>
                    <DialogDescription>
                      {tool.description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-6">
                    {renderTool(tool.id)}
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>

        {/* Quick Actions */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-center">Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <CheckCircle className="h-6 w-6" />
                <span>Auditoria Rápida</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <AlertTriangle className="h-6 w-6" />
                <span>Verificar Vencimentos</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <TrendingUp className="h-6 w-6" />
                <span>Relatório de Uso</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}