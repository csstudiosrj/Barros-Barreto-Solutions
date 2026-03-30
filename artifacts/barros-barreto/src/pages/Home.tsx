import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { 
  FaInstagram, 
  FaWhatsapp, 
  FaGoogle, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaEnvelope,
  FaClock,
  FaStar,
  FaCheckCircle,
  FaSnowflake,
  FaBoxOpen,
  FaCogs,
  FaThumbsUp
} from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import logoSrc from "@assets/image_1774894865494.png";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter no mínimo 2 caracteres." }),
  phone: z.string().min(10, { message: "Telefone inválido." }),
  email: z.string().email({ message: "E-mail inválido." }),
  service: z.string().min(1, { message: "Selecione um serviço." }),
  message: z.string().min(5, { message: "Mensagem muito curta." }),
});

export default function Home() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

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

  function onSubmit(_values: z.infer<typeof formSchema>) {
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve.",
    });
    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 6000);
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18 } }
  };

  const services = [
    {
      icon: <FaCogs className="w-10 h-10 text-blue-500" />,
      title: "Borrachas de Geladeira",
      desc: "Fabricação especializada de gaxetas e borrachas para geladeiras, freezers e câmaras frias de todas as marcas. Vedação perfeita que garante economia de energia.",
      items: ["Alta durabilidade", "Sob medida", "Para todas as marcas"],
    },
    {
      icon: <FaSnowflake className="w-10 h-10 text-blue-500" />,
      title: "Balcões Refrigerados",
      desc: "Peças, manutenção e serviços especializados para balcões refrigerados comerciais. Atendemos padarias, açougues, lanchonetes e supermercados.",
      items: ["Peças de reposição", "Consertos ágeis", "Atendimento comercial"],
    },
    {
      icon: <FaBoxOpen className="w-10 h-10 text-blue-500" />,
      title: "Expositores",
      desc: "Serviços e peças para expositores refrigerados. Diagnóstico preciso e componentes de qualidade para manter seus produtos sempre na temperatura certa.",
      items: ["Diagnóstico preciso", "Componentes originais", "Suporte técnico"],
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5521922095754"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="btn-whatsapp-float"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Contato via WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>

      {/* Navigation */}
      <header className="bg-[#0B1F3A] text-white py-3 sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
          {/* Logo — cropped from the Instagram print */}
          <div className="flex items-center gap-3">
            <div
              className="w-[140px] h-[52px] overflow-hidden rounded"
              style={{ position: "relative" }}
            >
              <img
                src={logoSrc}
                alt="Barros Barreto Refrigeração"
                className="absolute"
                style={{
                  width: "390px",
                  height: "auto",
                  top: "-38px",
                  left: "-12px",
                  objectFit: "none",
                }}
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicos" className="hover:text-blue-400 font-medium transition-colors text-sm uppercase tracking-wide">Serviços</a>
            <a href="#avaliacoes" className="hover:text-blue-400 font-medium transition-colors text-sm uppercase tracking-wide">Avaliações</a>
            <a href="#contato" className="hover:text-blue-400 font-medium transition-colors text-sm uppercase tracking-wide">Contato</a>
            <a href="https://wa.me/5521922095754" target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2 text-sm">
                Solicitar Orçamento
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#0B1F3A] overflow-hidden">
        {/* Background: Instagram post image as atmospheric background */}
        <div className="absolute inset-0">
          <img
            src={logoSrc}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center opacity-20"
            style={{ filter: "blur(2px) saturate(0.5)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/95 to-[#0B1F3A]/60" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24 lg:py-36">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <FaStar className="text-yellow-400" />
              <span>4.813 Avaliações no Google</span>
            </motion.div>

            <motion.h2 variants={fadeIn} className="text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.05]">
              A Referência em{" "}
              <span className="text-blue-400">Refrigeração</span>{" "}
              no Rio de Janeiro.
            </motion.h2>

            <motion.p variants={fadeIn} className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Especialistas em fabricação de borrachas para geladeiras, balcões refrigerados e expositores. Tradição e qualidade que o comércio de Bonsucesso e região confiam.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/5521922095754" target="_blank" rel="noopener noreferrer" data-testid="btn-orcamento-hero">
                <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 px-8 text-base gap-2">
                  <FaWhatsapp className="w-5 h-5" /> Solicitar Orçamento via WhatsApp
                </Button>
              </a>
              <a href="tel:+552122095754" data-testid="link-phone-hero">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-500 text-white hover:bg-slate-800 hover:text-white h-14 px-8 text-base gap-2">
                  <FaPhoneAlt className="w-4 h-4" /> (21) 2209-5754
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-blue-600 text-white py-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-blue-500">
            <div className="flex flex-col items-center pt-4 md:pt-0">
              <FaCogs className="w-8 h-8 mb-3 opacity-80" />
              <h3 className="text-lg font-bold mb-1">Fabricação Própria</h3>
              <p className="text-blue-100 text-sm">Borrachas sob medida para qualquer modelo</p>
            </div>
            <div className="flex flex-col items-center pt-6 md:pt-0">
              <FaGoogle className="w-8 h-8 mb-3 opacity-80" />
              <h3 className="text-lg font-bold mb-1">+4.800 Avaliações</h3>
              <p className="text-blue-100 text-sm">Confiança comprovada pelos nossos clientes</p>
            </div>
            <div className="flex flex-col items-center pt-6 md:pt-0">
              <FaThumbsUp className="w-8 h-8 mb-3 opacity-80" />
              <h3 className="text-lg font-bold mb-1">Comercial e Residencial</h3>
              <p className="text-blue-100 text-sm">Atendemos desde residências a supermercados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0B1F3A] mb-4">Nossos Serviços</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-6 rounded-full" />
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Soluções completas em refrigeração para manter seu negócio funcionando com máxima eficiência.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((s) => (
              <motion.div key={s.title} variants={fadeIn}>
                <Card className="h-full border border-slate-200 shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 hover:border-blue-200 bg-white">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                      {s.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">{s.title}</h3>
                    <p className="text-slate-600 mb-5 text-sm leading-relaxed flex-1">{s.desc}</p>
                    <ul className="space-y-2">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-center text-sm text-slate-700 font-medium">
                          <FaCheckCircle className="text-blue-500 mr-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#0B1F3A] py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Precisa trocar a borracha da sua geladeira?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Solicite seu orçamento agora. Atendemos toda a região metropolitana do Rio de Janeiro.
            </p>
            <a href="https://wa.me/5521922095754" target="_blank" rel="noopener noreferrer" data-testid="btn-orcamento-cta">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 px-10 text-base gap-2">
                <FaWhatsapp className="w-5 h-5" /> Falar no WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="avaliacoes" className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-black text-[#0B1F3A] mb-4">O Que Dizem Nossos Clientes</h2>
              <div className="w-20 h-1.5 bg-blue-600 mb-6 rounded-full" />
              <p className="text-lg text-slate-600 max-w-xl">
                Mais de 4.800 clientes satisfeitos. Confira o que dizem sobre nosso atendimento e qualidade.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center gap-4 shrink-0">
              <div className="text-5xl font-black text-[#0B1F3A]">4.8</div>
              <div>
                <div className="flex text-yellow-400 mb-1 text-lg">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
                <div className="text-sm font-semibold text-slate-500">4.813 avaliações no Google</div>
              </div>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              { initial: "E", name: "Edmais Machado", text: "Loja pequena mais tem de tudo" },
              { initial: "L", name: "Luiz Roberto Vasconcellos", text: "Recomendo atendimento ótimo" },
            ].map((r) => (
              <motion.div key={r.name} variants={fadeIn}>
                <Card className="bg-slate-50 border border-slate-100 shadow-md">
                  <CardContent className="p-8">
                    <div className="flex text-yellow-400 mb-4 text-lg">
                      {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                    </div>
                    <p className="text-xl text-slate-800 italic mb-6 leading-relaxed">
                      "{r.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {r.initial}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{r.name}</h4>
                        <div className="flex items-center gap-1 text-sm text-slate-400">
                          <FaGoogle className="text-blue-500" />
                          <span>Avaliação no Google</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact & Location */}
      <section id="contato" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-[#0B1F3A] mb-4">Fale Conosco</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-4 rounded-full" />
            <p className="text-slate-600 text-lg">Preencha o formulário ou entre em contato diretamente.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <Card className="border border-slate-200 shadow-xl bg-white">
              <CardContent className="p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                    <FaCheckCircle className="text-blue-500 w-16 h-16" />
                    <h3 className="text-2xl font-bold text-[#0B1F3A]">Mensagem enviada!</h3>
                    <p className="text-slate-600">Entraremos em contato em breve.</p>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-bold text-slate-700">Nome</FormLabel>
                              <FormControl>
                                <Input placeholder="Seu nome" data-testid="input-name" {...field} />
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
                              <FormLabel className="font-bold text-slate-700">Telefone / WhatsApp</FormLabel>
                              <FormControl>
                                <Input placeholder="(21) 90000-0000" data-testid="input-phone" {...field} />
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
                            <FormLabel className="font-bold text-slate-700">E-mail</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="seu@email.com" data-testid="input-email" {...field} />
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
                            <FormLabel className="font-bold text-slate-700">Serviço de Interesse</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-service">
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
                            <FormLabel className="font-bold text-slate-700">Mensagem</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Como podemos ajudar?"
                                className="min-h-[120px] resize-none"
                                data-testid="textarea-message"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        data-testid="btn-submit-form"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 text-base"
                      >
                        Enviar Mensagem
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>

            {/* Info Card */}
            <div className="flex flex-col gap-6">
              <div className="bg-[#0B1F3A] text-white p-8 rounded-2xl shadow-xl flex-1">
                <h3 className="text-xl font-black mb-7 pb-5 border-b border-slate-700">Informações de Contato</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: <FaMapMarkerAlt className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />,
                      title: "Endereço",
                      content: "R. Barros Barreto, 107 - Loja AeB\nBonsucesso, Rio de Janeiro - RJ\nCEP: 21032-140",
                    },
                    {
                      icon: <FaPhoneAlt className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />,
                      title: "Telefones",
                      content: "(21) 2209-5754\n(21) 2280-7349",
                    },
                    {
                      icon: <FaEnvelope className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />,
                      title: "E-mail",
                      content: "barrosbarretorefrigeracao@gmail.com",
                    },
                    {
                      icon: <FaClock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />,
                      title: "Horário de Funcionamento",
                      content: "Segunda a Sábado\nFecha às 18:00",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      {item.icon}
                      <div>
                        <h4 className="font-bold mb-1">{item.title}</h4>
                        <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-700 flex gap-3">
                  <a
                    href="https://instagram.com/barrosbarretorefrigeracao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-slate-700 flex items-center justify-center hover:bg-blue-600 transition-colors"
                    aria-label="Instagram"
                    data-testid="link-instagram"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://wa.me/5521922095754"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-slate-700 flex items-center justify-center hover:bg-green-500 transition-colors"
                    aria-label="WhatsApp"
                    data-testid="link-whatsapp-info"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=R.+Barros+Barreto,+107,+Bonsucesso,+Rio+de+Janeiro"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-maps"
                className="block bg-blue-600 hover:bg-blue-700 text-white text-center font-bold py-4 px-6 rounded-xl transition-colors text-sm"
              >
                <FaMapMarkerAlt className="inline mr-2" />
                Ver no Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#060F1C] text-slate-400 py-10 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="mb-6">
            <div className="inline-flex items-center gap-1 mb-2">
              <span className="text-xl font-black text-white tracking-tight">BARROS BARRETO</span>
              <span className="text-xl font-black text-blue-400 tracking-tight ml-1">REFRIGERAÇÃO</span>
            </div>
            <p className="text-sm text-slate-500">A sua parceira de confiança em refrigeração comercial e residencial no Rio de Janeiro.</p>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-center items-center gap-2 text-xs">
            <span>&copy; {new Date().getFullYear()} Barros Barreto Refrigeração. Todos os direitos reservados.</span>
            <span className="hidden md:inline text-slate-700">|</span>
            <a
              href="mailto:cscomrj02@gmail.com"
              data-testid="link-cs-studios"
              className="hover:text-white transition-colors"
            >
              Desenvolvido por <span className="text-blue-400 font-semibold hover:text-blue-300">CS Studios</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
