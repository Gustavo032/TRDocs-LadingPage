import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Shield } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Nossa Localização</h2>
          <p className="text-xl text-gray-600">Visite-nos ou entre em contato para conhecer nossa infraestrutura</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-100 rounded-xl p-8 h-80 flex items-center justify-center mb-6">
              <div className="text-center text-gray-500">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg font-medium">Mapa Interativo</p>
                <p className="text-sm">Google Maps será carregado aqui</p>
              </div>
            </div>
            <Button className="w-full bg-primary text-white hover:bg-blue-700">
              <MapPin className="h-4 w-4 mr-2" />
              Como Chegar
            </Button>
          </div>

          <div className="space-y-6">
            <Card className="bg-gray-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary mb-6">Informações de Contato</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary text-white p-3 rounded-lg">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary">Endereço</h4>
                      <p className="text-gray-600">Estrada Caucaia do Alto, 5311 - Condomínio Empresarial</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-success text-white p-3 rounded-lg">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary">Telefone</h4>
                      <p className="text-gray-600">(11) 9999-9999</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-accent text-white p-3 rounded-lg">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary">E-mail</h4>
                      <p className="text-gray-600">contato@trdocs.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-secondary text-white p-3 rounded-lg">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary">Horário de Funcionamento</h4>
                      <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-gray-600">Sábado: 8h às 12h</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Features */}
            <Card className="bg-primary bg-opacity-5 border border-primary border-opacity-20">
              <CardContent className="p-6">
                <h4 className="font-bold text-primary mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Segurança 24 Horas
                </h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Monitoramento 24h com câmeras de alta resolução</li>
                  <li>• Controle de acesso biométrico e por cartão</li>
                  <li>• Sistema anti-incêndio e controle ambiental</li>
                  <li>• Vigilância patrimonial especializada</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
