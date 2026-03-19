export function generateWhatsAppLink(servico, tempo) {
  const phone = '5511944015835'; // From the PDF
  const message = `Olá! Gostaria de agendar o serviço ${servico} de ${tempo}.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
