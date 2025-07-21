import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Crown, Building } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    id: "starter",
    name: "Starter",
    icon: Zap,
    price: {
      monthly: 290,
      annual: 2900
    },
    description: "Ideal para pequenas empresas iniciando na digitalização",
    features: [
      "Até 5.000 documentos",
      "50 GB de armazenamento",
      "Digitalização básica",
      "Suporte por email",
      "Dashboard básico",
      "Backup diário"
    ],
    limits: {
      users: "Até 3 usuários",
      support: "Email (48h)",
      integration: "API básica"
    },
    color: "border-gray-200",
    popular: false
  },
  {
    id: "professional",
    name: "Professional",
    icon: Crown,
    price: {
      monthly: 590,
      annual: 5900
    },
    description: "Para empresas em crescimento com necessidades avançadas",
    features: [
      "Até 50.000 documentos",
      "500 GB de armazenamento",
      "Digitalização + OCR",
      "Sistema GED completo",
      "Workflows personalizados",
      "Relatórios avançados",
      "Backup triplo",
      "Conformidade LGPD"
    ],
    limits: {
      users: "Até 15 usuários",
      support: "Chat + Email (24h)",
      integration: "API completa + Webhooks"
    },
    color: "border-primary ring-2 ring-primary",
    popular: true
  },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: Building,
    price: {
      monthly: 1290,
      annual: 12900
    },
    description: "Solução completa para grandes corporações",
    features: [
      "Documentos ilimitados",
      "Armazenamento ilimitado",
      "IA para classificação",
      "Multi-filiais",
      "Auditoria completa",
      "SLA garantido",
      "Treinamento incluído",
      "Consultoria especializada",
      "Integração ERP/CRM",
      "White-label disponível"
    ],
    limits: {
      users: "Usuários ilimitados",
      support: "Suporte 24/7 + Gerente dedicado",
      integration: "Integrações personalizadas"
    },
    color: "border-accent",
    popular: false
  }
];

const addons = [
  {
    name: "Digitalização Premium",
    description: "Digitalização com qualidade superior e indexação automática",
    price: "R$ 0,15 por página"
  },
  {
    name: "Guarda Física",
    description: "Armazenamento seguro em condomínio fechado",
    price: "R$ 8,90 por caixa/mês"
  },
  {
    name: "Consultoria Especializada",
    description: "Horas de consultoria para otimização de processos",
    price: "R$ 180 por hora"
  },
  {
    name: "Treinamento Avançado",
    description: "Treinamento presencial para equipes",
    price: "R$ 2.500 por turma"
  }
];

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="precos" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Planos e Preços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Escolha o plano ideal para sua empresa. Todos incluem 30 dias de teste grátis
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-primary font-semibold' : 'text-gray-500'}`}>
              Mensal
            </span>
            <button 
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-14 h-7 bg-gray-200 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                billingCycle === 'annual' ? 'translate-x-7' : 'translate-x-0'
              }`} />
            </button>
            <span className={`text-sm ${billingCycle === 'annual' ? 'text-primary font-semibold' : 'text-gray-500'}`}>
              Anual
            </span>
            {billingCycle === 'annual' && (
              <Badge className="bg-green-100 text-green-700">
                Economize 20%
              </Badge>
            )}
          </div>
        </div>

        {/* Plans */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            const price = billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual;
            const displayPrice = billingCycle === 'monthly' ? price : Math.round(price / 12);
            
            return (
              <Card key={plan.id} className={`relative ${plan.color} ${plan.popular ? 'shadow-2xl scale-105' : 'hover:shadow-lg transition-shadow'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-1">
                      Mais Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gray-100 rounded-full w-fit">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-secondary">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">
                      R$ {displayPrice.toLocaleString()}
                    </span>
                    <span className="text-gray-600">
                      /{billingCycle === 'monthly' ? 'mês' : 'mês*'}
                    </span>
                    {billingCycle === 'annual' && (
                      <div className="text-sm text-gray-500 mt-1">
                        *Faturamento anual
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mt-3">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-secondary mb-3">Funcionalidades:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-secondary mb-3">Limites:</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div><strong>Usuários:</strong> {plan.limits.users}</div>
                      <div><strong>Suporte:</strong> {plan.limits.support}</div>
                      <div><strong>Integração:</strong> {plan.limits.integration}</div>
                    </div>
                  </div>

                  <Button 
                    className={`w-full ${plan.popular 
                      ? 'bg-primary text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={scrollToContact}
                  >
                    {plan.id === 'enterprise' ? 'Solicitar Cotação' : 'Começar Teste Grátis'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Add-ons */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Serviços Adicionais</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {addons.map((addon, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-secondary">{addon.name}</h4>
                      <p className="text-sm text-gray-600">{addon.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-primary">{addon.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-secondary mb-8">Perguntas Frequentes sobre Preços</h3>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Posso cancelar a qualquer momento?</h4>
                <p className="text-gray-600">Sim, sem fidelidade. Cancele quando quiser, seus dados ficam disponíveis por 90 dias.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Como funciona o teste grátis?</h4>
                <p className="text-gray-600">30 dias completos com todas as funcionalidades, sem cartão de crédito necessário.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Há desconto para ONGs ou educação?</h4>
                <p className="text-gray-600">Sim, oferecemos 30% de desconto para instituições educacionais e ONGs certificadas.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-primary text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Não encontrou o plano ideal?</h3>
              <p className="mb-6">
                Fale conosco! Criamos soluções personalizadas para sua empresa
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100" onClick={scrollToContact}>
                Falar com Especialista
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}