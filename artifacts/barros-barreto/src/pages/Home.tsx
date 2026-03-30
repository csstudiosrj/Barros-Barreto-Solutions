import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { 
  FaInstagram, 
  FaWhatsapp, 
  FaGoogle, 
  FaTools, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaEnvelope,
  FaClock,
  FaStar,
  FaCheckCircle,
  FaSnowflake,
  FaBoxOpen,
  FaCogs
} from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Assuming we saved the images here from previous tools
import heroImg from "@/assets/images/hero.jpg";
import sealsImg from "@/assets/images/seals.jpg";
import counterImg from "@/assets/images/counter.jpg";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter no mínimo 2 caracteres." }),
  phone: z.string().min(10, { message: "Telefone inválido." }),
  email: z.string().email({ message: "E-mail inválido." }),
  service: z.string().min(1, { message: "Selecione um serviço." }),
  message: z.string().min(5, { message: "Mensagem muito curta." }),
});

export default function Home() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve.",
    });
    form.reset();
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5521922095754" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 hover:scale-110 transition-all duration-300"
        aria-label="Contato via WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>

      {/* Navigation */}
      <header className="bg-[#0A192F] text-white py-4 sticky top-0 z-40 shadow-md border-b border-slate-800">
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-2xl font-black tracking-tight leading-tight">
              BARROS BARRETO
            </h1>
            <span className="text-red-500 font-bold text-sm tracking-widest uppercase">REFRIGERAÇÃO</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#servicos" className="hover:text-red-400 font-medium transition-colors">Serviços</a>
            <a href="#avaliacoes" className="hover:text-red-400 font-medium transition-colors">Avaliações</a>
            <a href="#contato" className="hover:text-red-400 font-medium transition-colors">Contato</a>
            <a href="https://wa.me/5521922095754" target="_blank" rel="noopener noreferrer">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6">
                Fazer Orçamento
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-[#0A192F] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImg} alt="Equipamentos de refrigeração" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/90 to-transparent"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <Badge className="bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 border-blue-500/30">
                <FaStar className="text-yellow-400 mr-2" /> 4.813 Avaliações no Google
              </Badge>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
              A Referência em <span className="text-red-500">Refrigeração</span> no Rio de Janeiro.
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Especialistas em fabricação de borrachas para geladeiras, balcões refrigerados e expositores. Tradição e qualidade que o comércio de Bonsucesso e região confiam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/5521922095754" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold h-14 px-8 text-lg">
                  Solicitar Orçamento via WhatsApp
                </Button>
              </a>
              <a href="tel:+552122095754">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-600 text-white hover:bg-slate-800 h-14 px-8 text-lg">
                  Ligue: (21) 2209-5754
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-12 border-b border-slate-200 shadow-sm relative z-20 -mt-8 mx-4 lg:mx-auto max-w-6xl rounded-xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="flex flex-col items-center p-4">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <FaCogs className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fabricação Própria</h3>
              <p className="text-slate-600">Borrachas de alta durabilidade, sob medida para sua necessidade.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <FaGoogle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Mais de 4.800 Avaliações</h3>
              <p className="text-slate-600">Confiança comprovada pelos nossos clientes no Google.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <FaSnowflake className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Comercial & Residencial</h3>
              <p className="text-slate-600">Atendemos de residências a grandes comércios e supermercados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0A192F] mb-4">Nossos Serviços</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Soluções completas em refrigeração para manter seu negócio funcionando com máxima eficiência.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Service 1 */}
            <motion.div variants={fadeIn}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#0A192F]/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={sealsImg} alt="Borrachas de Geladeira" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#0A192F] mb-3">Borrachas de Geladeira</h3>
                  <p className="text-slate-600 mb-4">
                    Fabricação especializada de borrachas para geladeiras, freezers e câmaras frias. Vedação perfeita que garante economia de energia.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700 font-medium">
                    <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Alta durabilidade</li>
                    <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Sob medida</li>
                    <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Para todas as marcas</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={fadeIn}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#0A192F]/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={counterImg} alt="Balcões Refrigerados" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#0A192F] mb-3">Balcões Refrigerados</h3>
                  <p className="text-slate-600 mb-4">
                    Manutenção, peças e serviços para balcões refrigerados comerciais. Essencial para padarias, açougues e lanchonetes.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700 font-medium">
                    <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Peças de reposição</li>
                    <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Consertos ágeis</li>
                    <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Atendimento comercial</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Service 3 */}
            <motion.div variants={fadeIn}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="h-48 bg-slate-200 flex items-center justify-center relative">
                  <FaBoxOpen className="w-20 h-20 text-slate-400" />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#0A192F] mb-3">Expositores</h3>
                  <p className="text-slate-600 mb-4">
                    Tudo o que você precisa para manter seus expositores refrigerados funcionando 100%, garantindo a qualidade dos seus produtos.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700 font-medium">
                    <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Diagnóstico preciso</li>
                    <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Componentes originais</li>
                    <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Suporte técnico</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="avaliacoes" className="py-24 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-black text-[#0A192F] mb-4">O Que Dizem Nossos Clientes</h2>
              <div className="w-24 h-1 bg-red-500 mb-6"></div>
              <p className="text-lg text-slate-600 max-w-2xl">
                Temos orgulho de construir relacionamentos duradouros com base na transparência e excelência técnica.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex items-center gap-4">
              <div className="text-4xl font-black text-slate-900">4.8</div>
              <div>
                <div className="flex text-yellow-400 mb-1">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <div className="text-sm font-medium text-slate-600">4.813 avaliações no Google</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-slate-50 border-none shadow-md">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="text-lg text-slate-800 italic mb-6">
                  "Loja pequena mais tem de tudo"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    E
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">edmais machado</h4>
                    <span className="text-sm text-slate-500">Local Guide</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 border-none shadow-md">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="text-lg text-slate-800 italic mb-6">
                  "Recomendo atendimento ótimo"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    L
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Luiz Roberto Vasconcellos</h4>
                    <span className="text-sm text-slate-500">Cliente Google</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section id="contato" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-black text-[#0A192F] mb-2">Fale Conosco</h2>
              <p className="text-slate-600 mb-8">
                Preencha o formulário abaixo ou entre em contato diretamente pelo WhatsApp para um atendimento mais rápido.
              </p>

              <Card className="border-none shadow-xl bg-white">
                <CardContent className="p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-slate-700 font-bold">Nome</FormLabel>
                              <FormControl>
                                <Input placeholder="Seu nome" className="bg-slate-50 border-slate-200 focus-visible:ring-blue-500" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-slate-700 font-bold">Telefone / WhatsApp</FormLabel>
                              <FormControl>
                                <Input placeholder="(21) 90000-0000" className="bg-slate-50 border-slate-200 focus-visible:ring-blue-500" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 font-bold">E-mail</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="seu@email.com" className="bg-slate-50 border-slate-200 focus-visible:ring-blue-500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 font-bold">Serviço de Interesse</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-slate-50 border-slate-200 focus-visible:ring-blue-500">
                                  <SelectValue placeholder="Selecione o serviço" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="borrachas">Fabricação de borrachas</SelectItem>
                                <SelectItem value="balcao">Balcão refrigerado</SelectItem>
                                <SelectItem value="expositores">Expositores</SelectItem>
                                <SelectItem value="outros">Outros / Peças</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 font-bold">Mensagem</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Como podemos ajudar?" 
                                className="min-h-[120px] bg-slate-50 border-slate-200 focus-visible:ring-blue-500 resize-none" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full bg-[#0A192F] hover:bg-blue-900 text-white font-bold h-12 text-lg">
                        Enviar Mensagem
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Info & Location */}
            <div className="flex flex-col justify-center">
              <div className="bg-[#0A192F] text-white p-10 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-black mb-8 border-b border-slate-700 pb-4">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="w-6 h-6 text-red-500 mr-4 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Endereço</h4>
                      <p className="text-slate-300 leading-relaxed">
                        R. Barros Barreto, 107 - Loja AeB<br />
                        Bonsucesso, Rio de Janeiro - RJ<br />
                        CEP: 21032-140
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaPhoneAlt className="w-6 h-6 text-red-500 mr-4 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Telefones</h4>
                      <p className="text-slate-300">
                        (21) 2209-5754<br />
                        (21) 2280-7349
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaEnvelope className="w-6 h-6 text-red-500 mr-4 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">E-mail</h4>
                      <p className="text-slate-300 break-all">
                        barrosbarretorefrigeracao@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaClock className="w-6 h-6 text-red-500 mr-4 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Horário de Funcionamento</h4>
                      <p className="text-slate-300">
                        Segunda a Sábado<br />
                        Fechamento às 18:00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-slate-700 flex gap-4">
                  <a href="https://instagram.com/barrosbarretorefrigeracao" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-500 transition-colors">
                    <FaInstagram className="w-6 h-6" />
                  </a>
                  <a href="https://wa.me/5521922095754" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-500 transition-colors">
                    <FaWhatsapp className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050C17] text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-white tracking-tight">BARROS BARRETO <span className="text-red-500">REFRIGERAÇÃO</span></h2>
            <p className="mt-2 text-sm">A sua parceira de confiança em refrigeração comercial e residencial.</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm mb-8">
            <span>&copy; {new Date().getFullYear()} Barros Barreto Refrigeração. Todos os direitos reservados.</span>
            <span className="hidden md:inline text-slate-600">|</span>
            <a href="mailto:cscomrj02@gmail.com" className="hover:text-white transition-colors flex items-center group">
              Desenvolvido por <span className="text-white font-bold ml-1 group-hover:text-red-400 transition-colors">CS Studios</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
