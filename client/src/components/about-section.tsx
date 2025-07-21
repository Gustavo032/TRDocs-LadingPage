import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-secondary mb-6">Sobre a TRDOCS</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Há mais de uma década no mercado de gestão documental, a TRDOCS se consolidou como referência em soluções inovadoras para armazenamento, digitalização e gerenciamento de documentos empresariais.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nossa missão é transformar a gestão documental das empresas brasileiras através de tecnologia avançada, processos otimizados e o mais alto padrão de segurança do mercado.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <p className="text-gray-600 text-sm">Anos de Experiência</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-gray-600 text-sm">Empresas Atendidas</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                <p className="text-gray-600 text-sm">Documentos Digitalizados</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-success bg-opacity-10 text-success p-2 rounded-lg">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">Certificação ISO 27001</h4>
                  <p className="text-gray-600 text-sm">Gestão de segurança da informação</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary bg-opacity-10 text-primary p-2 rounded-lg">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">Conformidade LGPD</h4>
                  <p className="text-gray-600 text-sm">Proteção de dados pessoais</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Equipe TRDOCS em ambiente profissional" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary from-0% to-transparent to-50% opacity-20 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
