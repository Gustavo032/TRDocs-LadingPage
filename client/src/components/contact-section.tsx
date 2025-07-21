import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(1, "Assunto é obrigatório"),
  message: z.string().min(1, "Mensagem é obrigatória"),
  consent: z.boolean().refine(val => val === true, "Você deve aceitar os termos"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      consent: false
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em até 2 horas úteis.",
      });
      reset();
    },
    onError: () => {
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
        variant: "destructive",
      });
    },
  });

  const leadMutation = useMutation({
    mutationFn: async (data: { email: string; company?: string; type: string }) => {
      return await apiRequest("POST", "/api/leads", data);
    },
    onSuccess: () => {
      toast({
        title: "Solicitação enviada!",
        description: "Entraremos em contato para preparar seu orçamento personalizado.",
      });
    },
    onError: () => {
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao processar sua solicitação. Tente novamente.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const requestQuote = () => {
    const email = watch('email');
    const company = watch('company');
    
    if (!email) {
      toast({
        title: "E-mail obrigatório",
        description: "Por favor, preencha seu e-mail para solicitar orçamento.",
        variant: "destructive",
      });
      return;
    }

    leadMutation.mutate({
      email,
      company,
      type: 'quote'
    });
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-600">Solicite um orçamento personalizado ou tire suas dúvidas</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-1/3 bg-gradient-to-br from-primary to-blue-700 p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5" />
                    <div>
                      <p className="font-medium">Telefone</p>
                      <p className="text-blue-100">(11) 9999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5" />
                    <div>
                      <p className="font-medium">E-mail</p>
                      <p className="text-blue-100">contato@trdocs.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-5 w-5 rounded bg-green-500 flex items-center justify-center">
                      <span className="text-xs">W</span>
                    </div>
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-blue-100">(11) 99999-9999</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-blue-400">
                  <h4 className="font-bold mb-3">Tempo de Resposta</h4>
                  <p className="text-blue-100 text-sm">Respondemos todos os contatos em até 2 horas úteis</p>
                </div>
              </div>

              <CardContent className="lg:w-2/3 p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input 
                        id="name"
                        placeholder="Seu nome completo" 
                        {...register('name')}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="company">Empresa</Label>
                      <Input 
                        id="company"
                        placeholder="Nome da empresa" 
                        {...register('company')}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input 
                        id="email"
                        type="email" 
                        placeholder="seu@email.com" 
                        {...register('email')}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input 
                        id="phone"
                        type="tel" 
                        placeholder="(11) 99999-9999" 
                        {...register('phone')}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Assunto</Label>
                    <Select onValueChange={(value) => setValue('subject', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um assunto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="guarda">Guarda de Documentos</SelectItem>
                        <SelectItem value="digitalizacao">Digitalização</SelectItem>
                        <SelectItem value="gestao">Gestão Documental</SelectItem>
                        <SelectItem value="bpo">BPO</SelectItem>
                        <SelectItem value="ged">Sistema GED</SelectItem>
                        <SelectItem value="orcamento">Solicitar Orçamento</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea 
                      id="message"
                      placeholder="Descreva suas necessidades ou dúvidas..." 
                      rows={4}
                      {...register('message')}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      onCheckedChange={(checked) => setValue('consent', !!checked)}
                    />
                    <label className="text-sm text-gray-600">
                      Concordo em receber comunicações da TRDOCS e aceito a{' '}
                      <a href="#" className="text-primary hover:underline">Política de Privacidade</a>
                    </label>
                  </div>
                  {errors.consent && (
                    <p className="text-red-500 text-sm">{errors.consent.message}</p>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      disabled={contactMutation.isPending}
                      className="flex-1 bg-primary text-white hover:bg-blue-700"
                    >
                      {contactMutation.isPending ? "Enviando..." : "Enviar Mensagem"}
                    </Button>
                    <Button 
                      type="button"
                      onClick={requestQuote}
                      disabled={leadMutation.isPending}
                      className="flex-1 bg-accent text-white hover:bg-yellow-600"
                    >
                      {leadMutation.isPending ? "Processando..." : "Solicitar Orçamento"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
