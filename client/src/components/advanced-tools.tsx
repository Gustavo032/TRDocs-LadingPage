
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
  CheckCircle,
  Upload,
  Download,
  Plus,
  Trash2,
  Edit,
  Play,
  Pause,
  Settings,
  Users,
  Building,
  Mail
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

// Compliance Checker Component
const ComplianceChecker = () => {
  const [documents, setDocuments] = useState<any[]>([]);
  const [complianceResult, setComplianceResult] = useState<any>(null);
  const [selectedSector, setSelectedSector] = useState("");

  const complianceRules = {
    "financeiro": [
      { rule: "Assinatura digital obrigatória", weight: 30 },
      { rule: "Backup em nuvem certificada", weight: 25 },
      { rule: "Criptografia AES-256", weight: 20 },
      { rule: "Log de auditoria", weight: 15 },
      { rule: "Controle de versão", weight: 10 }
    ],
    "juridico": [
      { rule: "Certificação ICP-Brasil", weight: 35 },
      { rule: "Timestamp qualificado", weight: 25 },
      { rule: "Integridade verificável", weight: 20 },
      { rule: "Não repúdio", weight: 20 }
    ],
    "rh": [
      { rule: "Conformidade LGPD", weight: 40 },
      { rule: "Consentimento documentado", weight: 25 },
      { rule: "Anonimização de dados", weight: 20 },
      { rule: "Direito ao esquecimento", weight: 15 }
    ]
  };

  const addDocument = () => {
    const newDoc = {
      id: Date.now(),
      name: `Documento ${documents.length + 1}`,
      hasDigitalSignature: false,
      hasBackup: false,
      hasEncryption: false,
      hasAuditLog: false,
      hasVersionControl: false,
      hasLGPDCompliance: false
    };
    setDocuments([...documents, newDoc]);
  };

  const updateDocument = (id: number, field: string, value: boolean) => {
    setDocuments(docs => docs.map(doc => 
      doc.id === id ? { ...doc, [field]: value } : doc
    ));
  };

  const checkCompliance = () => {
    if (!selectedSector || documents.length === 0) return;

    const rules = complianceRules[selectedSector as keyof typeof complianceRules];
    let totalScore = 0;
    let maxScore = 0;
    const results: any[] = [];

    documents.forEach(doc => {
      let docScore = 0;
      let docMaxScore = 0;

      rules.forEach(rule => {
        docMaxScore += rule.weight;
        let ruleCompliant = false;

        switch (rule.rule) {
          case "Assinatura digital obrigatória":
          case "Certificação ICP-Brasil":
            ruleCompliant = doc.hasDigitalSignature;
            break;
          case "Backup em nuvem certificada":
            ruleCompliant = doc.hasBackup;
            break;
          case "Criptografia AES-256":
            ruleCompliant = doc.hasEncryption;
            break;
          case "Log de auditoria":
            ruleCompliant = doc.hasAuditLog;
            break;
          case "Controle de versão":
            ruleCompliant = doc.hasVersionControl;
            break;
          case "Conformidade LGPD":
            ruleCompliant = doc.hasLGPDCompliance;
            break;
          default:
            ruleCompliant = Math.random() > 0.3; // Simulação
        }

        if (ruleCompliant) {
          docScore += rule.weight;
        }
      });

      const percentage = Math.round((docScore / docMaxScore) * 100);
      results.push({
        document: doc.name,
        score: docScore,
        maxScore: docMaxScore,
        percentage,
        status: percentage >= 80 ? 'Conforme' : percentage >= 60 ? 'Parcial' : 'Não Conforme'
      });

      totalScore += docScore;
      maxScore += docMaxScore;
    });

    const overallPercentage = Math.round((totalScore / maxScore) * 100);
    setComplianceResult({
      overall: overallPercentage,
      documents: results,
      status: overallPercentage >= 80 ? 'Conforme' : overallPercentage >= 60 ? 'Parcialmente Conforme' : 'Não Conforme'
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <Label>Setor para Verificação</Label>
        <Select onValueChange={setSelectedSector}>
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

      <div className="flex justify-between items-center">
        <h4 className="font-semibold">Documentos para Verificação</h4>
        <Button onClick={addDocument} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Documento
        </Button>
      </div>

      {documents.map(doc => (
        <Card key={doc.id} className="p-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Input 
                value={doc.name}
                onChange={(e) => updateDocument(doc.id, 'name', e.target.value)}
                className="font-medium"
              />
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setDocuments(docs => docs.filter(d => d.id !== doc.id))}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              <label className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  checked={doc.hasDigitalSignature}
                  onChange={(e) => updateDocument(doc.id, 'hasDigitalSignature', e.target.checked)}
                />
                <span>Assinatura Digital</span>
              </label>
              <label className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  checked={doc.hasBackup}
                  onChange={(e) => updateDocument(doc.id, 'hasBackup', e.target.checked)}
                />
                <span>Backup Seguro</span>
              </label>
              <label className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  checked={doc.hasEncryption}
                  onChange={(e) => updateDocument(doc.id, 'hasEncryption', e.target.checked)}
                />
                <span>Criptografia</span>
              </label>
              <label className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  checked={doc.hasLGPDCompliance}
                  onChange={(e) => updateDocument(doc.id, 'hasLGPDCompliance', e.target.checked)}
                />
                <span>Conformidade LGPD</span>
              </label>
            </div>
          </div>
        </Card>
      ))}

      <Button onClick={checkCompliance} className="w-full" disabled={!selectedSector || documents.length === 0}>
        Verificar Conformidade
      </Button>

      {complianceResult && (
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-6">
            <h4 className="font-bold text-red-700 mb-4">Resultado da Verificação</h4>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">{complianceResult.overall}%</div>
                <Badge className={`${complianceResult.overall >= 80 ? 'bg-green-600' : complianceResult.overall >= 60 ? 'bg-yellow-600' : 'bg-red-600'}`}>
                  {complianceResult.status}
                </Badge>
              </div>
              <div className="space-y-2">
                {complianceResult.documents.map((doc: any, index: number) => (
                  <div key={index} className="flex justify-between items-center p-2 bg-white rounded">
                    <span className="text-sm">{doc.document}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">{doc.percentage}%</span>
                      <Badge 
                        variant={doc.status === 'Conforme' ? 'default' : 'destructive'}
                        className="text-xs"
                      >
                        {doc.status}
                      </Badge>
                    </div>
                  </div>
                ))}
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

// Backup Planner Component
const BackupPlanner = () => {
  const [backupStrategy, setBackupStrategy] = useState({
    frequency: "",
    retention: "",
    location: "",
    encryption: false,
    compression: false,
    incremental: false
  });
  const [plan, setPlan] = useState<any>(null);

  const generatePlan = () => {
    const strategies = {
      daily: { cost: 500, reliability: 95, complexity: "Baixa" },
      weekly: { cost: 200, reliability: 85, complexity: "Baixa" },
      monthly: { cost: 100, reliability: 70, complexity: "Muito Baixa" }
    };

    const locations = {
      cloud: { cost: 1.5, security: 90, accessibility: 95 },
      onpremise: { cost: 1.0, security: 70, accessibility: 80 },
      hybrid: { cost: 1.3, security: 95, accessibility: 90 }
    };

    const freqData = strategies[backupStrategy.frequency as keyof typeof strategies];
    const locData = locations[backupStrategy.location as keyof typeof locations];

    if (freqData && locData) {
      const baseCost = freqData.cost * locData.cost;
      const finalCost = baseCost * (backupStrategy.encryption ? 1.2 : 1) * (backupStrategy.compression ? 0.8 : 1);
      
      setPlan({
        monthlyCost: finalCost.toFixed(2),
        reliability: Math.min(95, (freqData.reliability + locData.security) / 2),
        complexity: freqData.complexity,
        recommendations: [
          backupStrategy.encryption ? "✅ Criptografia habilitada" : "⚠️ Considere habilitar criptografia",
          backupStrategy.compression ? "✅ Compressão habilitada" : "💡 Compressão pode reduzir custos",
          backupStrategy.incremental ? "✅ Backup incremental" : "💡 Backup incremental otimiza tempo",
          "🔄 Teste de restauração mensal recomendado",
          "📊 Monitoramento de integridade automático"
        ]
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label>Frequência de Backup</Label>
          <Select onValueChange={(value) => setBackupStrategy({...backupStrategy, frequency: value})}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione a frequência" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Diário</SelectItem>
              <SelectItem value="weekly">Semanal</SelectItem>
              <SelectItem value="monthly">Mensal</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Período de Retenção</Label>
          <Select onValueChange={(value) => setBackupStrategy({...backupStrategy, retention: value})}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30days">30 dias</SelectItem>
              <SelectItem value="90days">90 dias</SelectItem>
              <SelectItem value="1year">1 ano</SelectItem>
              <SelectItem value="3years">3 anos</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Local de Armazenamento</Label>
          <Select onValueChange={(value) => setBackupStrategy({...backupStrategy, location: value})}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o local" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cloud">Nuvem</SelectItem>
              <SelectItem value="onpremise">Local (On-premise)</SelectItem>
              <SelectItem value="hybrid">Híbrido</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="font-semibold">Opções Avançadas</h4>
        <div className="grid md:grid-cols-3 gap-4">
          <label className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              checked={backupStrategy.encryption}
              onChange={(e) => setBackupStrategy({...backupStrategy, encryption: e.target.checked})}
            />
            <span>Criptografia</span>
          </label>
          <label className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              checked={backupStrategy.compression}
              onChange={(e) => setBackupStrategy({...backupStrategy, compression: e.target.checked})}
            />
            <span>Compressão</span>
          </label>
          <label className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              checked={backupStrategy.incremental}
              onChange={(e) => setBackupStrategy({...backupStrategy, incremental: e.target.checked})}
            />
            <span>Backup Incremental</span>
          </label>
        </div>
      </div>

      <Button onClick={generatePlan} className="w-full">
        Gerar Plano de Backup
      </Button>

      {plan && (
        <Card className="bg-indigo-50 border-indigo-200">
          <CardContent className="p-6">
            <h4 className="font-bold text-indigo-700 mb-4">Plano de Backup Recomendado</h4>
            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-indigo-600">R$ {plan.monthlyCost}</div>
                  <div className="text-sm text-gray-600">Custo Mensal</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-600">{plan.reliability}%</div>
                  <div className="text-sm text-gray-600">Confiabilidade</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-600">{plan.complexity}</div>
                  <div className="text-sm text-gray-600">Complexidade</div>
                </div>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Recomendações:</h5>
                <div className="space-y-1">
                  {plan.recommendations.map((rec: string, index: number) => (
                    <div key={index} className="text-sm p-2 bg-white rounded">{rec}</div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

// Search Optimizer Component
const SearchOptimizer = () => {
  const [indexSettings, setIndexSettings] = useState({
    enableFullText: false,
    enableOCR: false,
    enableMetadata: false,
    enableTags: false,
    compressionLevel: "medium"
  });
  const [optimization, setOptimization] = useState<any>(null);

  const optimizeSearch = () => {
    let score = 0;
    let features: string[] = [];
    let recommendations: string[] = [];

    if (indexSettings.enableFullText) {
      score += 30;
      features.push("✅ Indexação de texto completo");
    } else {
      recommendations.push("🔍 Habilite indexação de texto completo");
    }

    if (indexSettings.enableOCR) {
      score += 25;
      features.push("✅ OCR para documentos digitalizados");
    } else {
      recommendations.push("📄 Configure OCR para documentos escaneados");
    }

    if (indexSettings.enableMetadata) {
      score += 20;
      features.push("✅ Indexação de metadados");
    } else {
      recommendations.push("📋 Adicione indexação de metadados");
    }

    if (indexSettings.enableTags) {
      score += 15;
      features.push("✅ Sistema de tags");
    } else {
      recommendations.push("🏷️ Implemente sistema de tags");
    }

    const compressionBenefits = {
      low: { speed: 95, storage: 80 },
      medium: { speed: 85, storage: 60 },
      high: { speed: 70, storage: 40 }
    };

    const comp = compressionBenefits[indexSettings.compressionLevel as keyof typeof compressionBenefits];

    setOptimization({
      score,
      performance: score + 10,
      searchSpeed: comp.speed,
      storageEfficiency: comp.storage,
      features,
      recommendations
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h4 className="font-semibold">Configurações de Indexação</h4>
        <div className="space-y-3">
          <label className="flex items-center justify-between p-3 border rounded">
            <div>
              <div className="font-medium">Indexação de Texto Completo</div>
              <div className="text-sm text-gray-600">Busca dentro do conteúdo dos documentos</div>
            </div>
            <input 
              type="checkbox" 
              checked={indexSettings.enableFullText}
              onChange={(e) => setIndexSettings({...indexSettings, enableFullText: e.target.checked})}
            />
          </label>
          
          <label className="flex items-center justify-between p-3 border rounded">
            <div>
              <div className="font-medium">OCR Automático</div>
              <div className="text-sm text-gray-600">Reconhecimento de texto em imagens</div>
            </div>
            <input 
              type="checkbox" 
              checked={indexSettings.enableOCR}
              onChange={(e) => setIndexSettings({...indexSettings, enableOCR: e.target.checked})}
            />
          </label>
          
          <label className="flex items-center justify-between p-3 border rounded">
            <div>
              <div className="font-medium">Indexação de Metadados</div>
              <div className="text-sm text-gray-600">Data, autor, tipo de documento</div>
            </div>
            <input 
              type="checkbox" 
              checked={indexSettings.enableMetadata}
              onChange={(e) => setIndexSettings({...indexSettings, enableMetadata: e.target.checked})}
            />
          </label>
          
          <label className="flex items-center justify-between p-3 border rounded">
            <div>
              <div className="font-medium">Sistema de Tags</div>
              <div className="text-sm text-gray-600">Classificação por palavras-chave</div>
            </div>
            <input 
              type="checkbox" 
              checked={indexSettings.enableTags}
              onChange={(e) => setIndexSettings({...indexSettings, enableTags: e.target.checked})}
            />
          </label>
        </div>
      </div>

      <div>
        <Label>Nível de Compressão</Label>
        <Select onValueChange={(value) => setIndexSettings({...indexSettings, compressionLevel: value})}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione o nível" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">Baixa (Melhor velocidade)</SelectItem>
            <SelectItem value="medium">Média (Balanceado)</SelectItem>
            <SelectItem value="high">Alta (Menor espaço)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button onClick={optimizeSearch} className="w-full">
        Analisar Configurações
      </Button>

      {optimization && (
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="p-6">
            <h4 className="font-bold text-yellow-700 mb-4">Análise de Otimização</h4>
            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-yellow-600">{optimization.score}%</div>
                  <div className="text-sm text-gray-600">Índice Geral</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">{optimization.searchSpeed}%</div>
                  <div className="text-sm text-gray-600">Velocidade</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">{optimization.storageEfficiency}%</div>
                  <div className="text-sm text-gray-600">Eficiência</div>
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">Recursos Ativos:</h5>
                <div className="space-y-1">
                  {optimization.features.map((feature: string, index: number) => (
                    <div key={index} className="text-sm p-2 bg-white rounded">{feature}</div>
                  ))}
                </div>
              </div>
              
              {optimization.recommendations.length > 0 && (
                <div>
                  <h5 className="font-semibold mb-2">Recomendações:</h5>
                  <div className="space-y-1">
                    {optimization.recommendations.map((rec: string, index: number) => (
                      <div key={index} className="text-sm p-2 bg-white rounded">{rec}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

// Workflow Designer Component
const WorkflowDesigner = () => {
  const [workflow, setWorkflow] = useState({
    name: "",
    description: "",
    steps: [] as any[]
  });
  const [workflows, setWorkflows] = useState<any[]>([]);

  const addStep = () => {
    const newStep = {
      id: Date.now(),
      name: `Etapa ${workflow.steps.length + 1}`,
      assignee: "",
      deadline: 1,
      required: true,
      type: "approval"
    };
    setWorkflow({
      ...workflow,
      steps: [...workflow.steps, newStep]
    });
  };

  const updateStep = (id: number, field: string, value: any) => {
    setWorkflow({
      ...workflow,
      steps: workflow.steps.map(step => 
        step.id === id ? { ...step, [field]: value } : step
      )
    });
  };

  const removeStep = (id: number) => {
    setWorkflow({
      ...workflow,
      steps: workflow.steps.filter(step => step.id !== id)
    });
  };

  const saveWorkflow = () => {
    if (workflow.name && workflow.steps.length > 0) {
      const newWorkflow = {
        ...workflow,
        id: Date.now(),
        created: new Date().toLocaleDateString()
      };
      setWorkflows([...workflows, newWorkflow]);
      setWorkflow({ name: "", description: "", steps: [] });
    }
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="designer" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="designer">Designer</TabsTrigger>
          <TabsTrigger value="workflows">Meus Fluxos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="designer" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label>Nome do Fluxo</Label>
              <Input 
                value={workflow.name}
                onChange={(e) => setWorkflow({...workflow, name: e.target.value})}
                placeholder="Ex: Aprovação de Contratos"
              />
            </div>
            <div>
              <Label>Descrição</Label>
              <Input 
                value={workflow.description}
                onChange={(e) => setWorkflow({...workflow, description: e.target.value})}
                placeholder="Descrição do processo"
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <h4 className="font-semibold">Etapas do Fluxo</h4>
            <Button onClick={addStep} size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Nova Etapa
            </Button>
          </div>

          {workflow.steps.map((step, index) => (
            <Card key={step.id} className="p-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                      {index + 1}
                    </div>
                    <Input 
                      value={step.name}
                      onChange={(e) => updateStep(step.id, 'name', e.target.value)}
                      className="font-medium"
                    />
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => removeStep(step.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-3 gap-3">
                  <div>
                    <Label className="text-sm">Responsável</Label>
                    <Select onValueChange={(value) => updateStep(step.id, 'assignee', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manager">Gerente</SelectItem>
                        <SelectItem value="analyst">Analista</SelectItem>
                        <SelectItem value="director">Diretor</SelectItem>
                        <SelectItem value="legal">Jurídico</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label className="text-sm">Prazo (dias)</Label>
                    <Input 
                      type="number"
                      value={step.deadline}
                      onChange={(e) => updateStep(step.id, 'deadline', parseInt(e.target.value))}
                    />
                  </div>
                  
                  <div>
                    <Label className="text-sm">Tipo</Label>
                    <Select onValueChange={(value) => updateStep(step.id, 'type', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="approval">Aprovação</SelectItem>
                        <SelectItem value="review">Revisão</SelectItem>
                        <SelectItem value="signature">Assinatura</SelectItem>
                        <SelectItem value="notification">Notificação</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </Card>
          ))}

          <Button onClick={saveWorkflow} className="w-full" disabled={!workflow.name || workflow.steps.length === 0}>
            Salvar Fluxo de Trabalho
          </Button>
        </TabsContent>
        
        <TabsContent value="workflows" className="space-y-4">
          {workflows.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Zap className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Nenhum fluxo criado ainda</p>
            </div>
          ) : (
            workflows.map(wf => (
              <Card key={wf.id} className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{wf.name}</h4>
                    <p className="text-sm text-gray-600">{wf.description}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {wf.steps.length} etapas • Criado em {wf.created}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Audit Scheduler Component
const AuditScheduler = () => {
  const [audits, setAudits] = useState<any[]>([]);
  const [newAudit, setNewAudit] = useState({
    name: "",
    frequency: "",
    department: "",
    documents: "",
    responsible: "",
    nextDate: ""
  });

  const addAudit = () => {
    if (newAudit.name && newAudit.frequency && newAudit.department) {
      const audit = {
        ...newAudit,
        id: Date.now(),
        status: "Agendada",
        lastAudit: null,
        nextDate: calculateNextDate(newAudit.frequency)
      };
      setAudits([...audits, audit]);
      setNewAudit({
        name: "",
        frequency: "",
        department: "",
        documents: "",
        responsible: "",
        nextDate: ""
      });
    }
  };

  const calculateNextDate = (frequency: string) => {
    const now = new Date();
    switch (frequency) {
      case "monthly":
        now.setMonth(now.getMonth() + 1);
        break;
      case "quarterly":
        now.setMonth(now.getMonth() + 3);
        break;
      case "semiannual":
        now.setMonth(now.getMonth() + 6);
        break;
      case "annual":
        now.setFullYear(now.getFullYear() + 1);
        break;
    }
    return now.toLocaleDateString();
  };

  const executeAudit = (id: number) => {
    setAudits(audits.map(audit => 
      audit.id === id 
        ? { 
            ...audit, 
            status: "Concluída", 
            lastAudit: new Date().toLocaleDateString(),
            nextDate: calculateNextDate(audit.frequency)
          }
        : audit
    ));
  };

  return (
    <div className="space-y-6">
      <Card className="p-4">
        <h4 className="font-semibold mb-4">Nova Auditoria</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label>Nome da Auditoria</Label>
            <Input 
              value={newAudit.name}
              onChange={(e) => setNewAudit({...newAudit, name: e.target.value})}
              placeholder="Ex: Auditoria Fiscal Q1"
            />
          </div>
          <div>
            <Label>Frequência</Label>
            <Select onValueChange={(value) => setNewAudit({...newAudit, frequency: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="monthly">Mensal</SelectItem>
                <SelectItem value="quarterly">Trimestral</SelectItem>
                <SelectItem value="semiannual">Semestral</SelectItem>
                <SelectItem value="annual">Anual</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Departamento</Label>
            <Select onValueChange={(value) => setNewAudit({...newAudit, department: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="financeiro">Financeiro</SelectItem>
                <SelectItem value="juridico">Jurídico</SelectItem>
                <SelectItem value="rh">Recursos Humanos</SelectItem>
                <SelectItem value="ti">Tecnologia</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Responsável</Label>
            <Input 
              value={newAudit.responsible}
              onChange={(e) => setNewAudit({...newAudit, responsible: e.target.value})}
              placeholder="Nome do responsável"
            />
          </div>
        </div>
        <div className="mt-4">
          <Label>Tipos de Documentos</Label>
          <Textarea 
            value={newAudit.documents}
            onChange={(e) => setNewAudit({...newAudit, documents: e.target.value})}
            placeholder="Contratos, notas fiscais, relatórios..."
          />
        </div>
        <Button onClick={addAudit} className="w-full mt-4">
          Agendar Auditoria
        </Button>
      </Card>

      <div>
        <h4 className="font-semibold mb-4">Auditorias Agendadas</h4>
        {audits.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Nenhuma auditoria agendada</p>
          </div>
        ) : (
          <div className="space-y-3">
            {audits.map(audit => (
              <Card key={audit.id} className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <h5 className="font-semibold">{audit.name}</h5>
                      <Badge 
                        className={audit.status === "Concluída" ? "bg-green-600" : "bg-blue-600"}
                      >
                        {audit.status}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      <p><Building className="h-4 w-4 inline mr-1" />{audit.department}</p>
                      <p><Users className="h-4 w-4 inline mr-1" />{audit.responsible}</p>
                      <p><Calendar className="h-4 w-4 inline mr-1" />Próxima: {audit.nextDate}</p>
                      {audit.lastAudit && (
                        <p><CheckCircle className="h-4 w-4 inline mr-1" />Última: {audit.lastAudit}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {audit.status === "Agendada" && (
                      <Button 
                        size="sm" 
                        onClick={() => executeAudit(audit.id)}
                      >
                        <Play className="h-4 w-4 mr-1" />
                        Executar
                      </Button>
                    )}
                    <Button size="sm" variant="outline">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Quick Actions Component
const QuickActions = () => {
  const [actionResults, setActionResults] = useState<any>({});

  const executeQuickAudit = () => {
    // Simular auditoria rápida
    setTimeout(() => {
      setActionResults({
        ...actionResults,
        quickAudit: {
          documentsChecked: 1247,
          issues: 3,
          warnings: 12,
          status: "Concluída"
        }
      });
    }, 2000);
  };

  const checkExpirations = () => {
    // Simular verificação de vencimentos
    setTimeout(() => {
      setActionResults({
        ...actionResults,
        expirations: {
          expiring30Days: 15,
          expiring7Days: 3,
          expired: 1,
          status: "Concluída"
        }
      });
    }, 1500);
  };

  const generateUsageReport = () => {
    // Simular relatório de uso
    setTimeout(() => {
      setActionResults({
        ...actionResults,
        usageReport: {
          totalAccess: 2847,
          topDocuments: ["Contrato_2024.pdf", "Manual_Processos.docx", "Política_Qualidade.pdf"],
          busyHours: "14:00-16:00",
          status: "Concluída"
        }
      });
    }, 1800);
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="text-center space-y-3">
            <CheckCircle className="h-8 w-8 mx-auto text-green-600" />
            <h4 className="font-semibold">Auditoria Rápida</h4>
            <p className="text-sm text-gray-600">Verificação geral dos documentos</p>
            <Button onClick={executeQuickAudit} className="w-full">
              Executar Auditoria
            </Button>
            {actionResults.quickAudit && (
              <div className="mt-3 p-3 bg-green-50 rounded text-sm">
                <p><strong>✅ {actionResults.quickAudit.documentsChecked}</strong> documentos verificados</p>
                <p><strong>⚠️ {actionResults.quickAudit.issues}</strong> problemas encontrados</p>
                <p><strong>💡 {actionResults.quickAudit.warnings}</strong> alertas</p>
              </div>
            )}
          </div>
        </Card>

        <Card className="p-4">
          <div className="text-center space-y-3">
            <AlertTriangle className="h-8 w-8 mx-auto text-yellow-600" />
            <h4 className="font-semibold">Verificar Vencimentos</h4>
            <p className="text-sm text-gray-600">Documentos próximos do vencimento</p>
            <Button onClick={checkExpirations} className="w-full">
              Verificar Prazos
            </Button>
            {actionResults.expirations && (
              <div className="mt-3 p-3 bg-yellow-50 rounded text-sm">
                <p><strong>📅 {actionResults.expirations.expiring30Days}</strong> em 30 dias</p>
                <p><strong>⏰ {actionResults.expirations.expiring7Days}</strong> em 7 dias</p>
                <p><strong>🚨 {actionResults.expirations.expired}</strong> vencido</p>
              </div>
            )}
          </div>
        </Card>

        <Card className="p-4">
          <div className="text-center space-y-3">
            <TrendingUp className="h-8 w-8 mx-auto text-blue-600" />
            <h4 className="font-semibold">Relatório de Uso</h4>
            <p className="text-sm text-gray-600">Estatísticas de acesso e uso</p>
            <Button onClick={generateUsageReport} className="w-full">
              Gerar Relatório
            </Button>
            {actionResults.usageReport && (
              <div className="mt-3 p-3 bg-blue-50 rounded text-sm">
                <p><strong>📊 {actionResults.usageReport.totalAccess}</strong> acessos hoje</p>
                <p><strong>⏰</strong> Pico: {actionResults.usageReport.busyHours}</p>
                <p><strong>📄</strong> Mais acessado: {actionResults.usageReport.topDocuments[0]}</p>
              </div>
            )}
          </div>
        </Card>
      </div>

      <Card className="p-4">
        <h4 className="font-semibold mb-4">Dashboard de Atividades</h4>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div className="p-3 bg-gray-50 rounded">
            <div className="text-2xl font-bold text-gray-700">2,847</div>
            <div className="text-sm text-gray-600">Documentos Ativos</div>
          </div>
          <div className="p-3 bg-gray-50 rounded">
            <div className="text-2xl font-bold text-blue-600">156</div>
            <div className="text-sm text-gray-600">Acessos Hoje</div>
          </div>
          <div className="p-3 bg-gray-50 rounded">
            <div className="text-2xl font-bold text-green-600">12</div>
            <div className="text-sm text-gray-600">Aprovações Pendentes</div>
          </div>
          <div className="p-3 bg-gray-50 rounded">
            <div className="text-2xl font-bold text-yellow-600">3</div>
            <div className="text-sm text-gray-600">Alertas</div>
          </div>
        </div>
      </Card>
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
      case "compliance-checker":
        return <ComplianceChecker />;
      case "roi-calculator":
        return <ROICalculator />;
      case "backup-planner":
        return <BackupPlanner />;
      case "search-optimizer":
        return <SearchOptimizer />;
      case "workflow-designer":
        return <WorkflowDesigner />;
      case "audit-scheduler":
        return <AuditScheduler />;
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
            <QuickActions />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
