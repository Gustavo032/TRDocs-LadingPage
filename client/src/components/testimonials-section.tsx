import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Gerente Financeiro",
    company: "TechCorp Brasil",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    rating: 5,
    text: "A TRDOCS revolucionou nossa gestão documental. Reduzimos 70% do tempo gasto procurando documentos e aumentamos muito nossa produtividade.",
    highlight: "70% menos tempo"
  },
  {
    name: "Carlos Mendes",
    role: "Diretor Jurídico",
    company: "Advocacia & Associados",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    rating: 5,
    text: "Segurança excepcional e conformidade total com a LGPD. O sistema GED deles é o melhor que já utilizamos. Recomendo sem hesitação.",
    highlight: "100% seguro"
  },
  {
    name: "Ana Costa",
    role: "Coordenadora de RH",
    company: "Indústria Moderna",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    rating: 5,
    text: "Digitalizaram mais de 50.000 documentos em apenas 3 meses. Qualidade impecável e atendimento personalizado. Superou nossas expectativas.",
    highlight: "50k documentos"
  },
  {
    name: "Roberto Santos",
    role: "CEO",
    company: "StartUp Inovadora",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    rating: 5,
    text: "Como startup, precisávamos de uma solução econômica e escalável. A TRDOCS entregou exatamente isso com ROI de 200% no primeiro ano.",
    highlight: "ROI 200%"
  },
  {
    name: "Fernanda Lima",
    role: "Gerente de Operações",
    company: "Logística Express",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    rating: 5,
    text: "O suporte técnico é excepcional. Qualquer dúvida é resolvida em minutos. A digitalização liberou 300m² de espaço no nosso escritório.",
    highlight: "300m² liberados"
  },
  {
    name: "João Oliveira",
    role: "Contador",
    company: "Contabilidade Precisa",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    rating: 5,
    text: "Facilita muito o trabalho contábil. Acesso instantâneo aos documentos, backup automático e integração perfeita com nossos sistemas.",
    highlight: "Integração perfeita"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">O que Nossos Clientes Dizem</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 500 empresas confiam na TRDOCS para sua gestão documental
          </p>
          <div className="flex justify-center items-center gap-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-700">4.9/5</span>
            <span className="text-gray-500">(312 avaliações)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-secondary">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-700">
                    {testimonial.highlight}
                  </Badge>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-gray-600">Empresas Atendidas</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">2M+</div>
            <p className="text-gray-600">Documentos Digitalizados</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
            <p className="text-gray-600">Uptime do Sistema</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
            <p className="text-gray-600">Satisfação dos Clientes</p>
          </div>
        </div>
      </div>
    </section>
  );
}