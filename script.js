
document.addEventListener('DOMContentLoaded', function() {
  // Animação de contagem dos números
  function animateNumbers() {
      const counters = document.querySelectorAll('.proof-number');
      const speed = 200;
      
      counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;
          const increment = target / speed;
          
          if (count < target) {
              counter.innerText = Math.ceil(count + increment);
              setTimeout(() => animateNumbers(), 1);
          } else {
              counter.innerText = target + '+';
          }
      });
  }
  
  // Observador de interseção
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              setTimeout(animateNumbers, 500);
          }
      });
  });
  
  observer.observe(document.querySelector('.social-proof-section'));
  
  // Animações de entrada suave
  function animateOnScroll() {
      const elements = document.querySelectorAll('.proof-card, .testimonial-card');
      
      elements.forEach((element, index) => {
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;
          
          if (elementTop < window.innerHeight - elementVisible) {
              element.style.animation = `countUp 0.6s ease forwards ${index * 0.1}s`;
          }
      });
  }
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();
  });
  







const text = "Robilson Vasco aka Mano Kappa aka Kappa Rappa, Agente musical e empresário, nascido a 17 de Outubro de 1986. Robilson Vasco sempre foi um homem dedicado ao entretenimento, desde a música, teatro e a organização de Eventos. Nascido na Província do Namibe onde deu os primeiros passos no entretenimento como rapper, fez parte da AMK subgrupo pertencente a Família Genuína, mais tarde a fim de dar continuidade aos estudos deslocou-se para a Namibia onde instalou-se propriamente em Windhoek, onde começou a amadurecer a sua veia do entretenimento, mantendo conexão com alguns artistas renomados da nossa praça, desde JD a Nicol Ananás em meados de 2009,quando começou também a dar passos significativos na organização de eventos com a Chiche Entertainment. Ainda em 2009 Propriamente no dia 05 de Dezembro em Angola na Província do Namibe Organizou a Renomada Festa da Playboy que foi um verdadeiro marco para o entretenimento local, com adereços que na altura eram desconhecidos naquela Província, oque deu mostras da visão inovadora de Robilson Vasco. Nessa ida e volta entre Angola e Namibia Robilson sempre esteve envolvido não so na sua carreira como também na gestão de outros artistas. A partir de 2010 Robilson era membro/Agente/Empresario do lendário Grupo da Província do Namibe Block Business, oque resultou no lançamento do Álbum Eu sou da Block em 2013, álbum produzido entre Namibe/Windhoek e Africa do Sul. Atualmente fruto da experiência acumulada em mais de 1 década no Entretenimento, Robilson Vasco surge com a K Label, sediada  na Província de Luanda. Robilson Vasco atualmente tem trabalhado, fazendo parcerias e apoiado diversas figuras do Entretenimento como é o caso dos Gladiadores da RRPL Valdemar e Máfia. A K Label apresenta-se como uma nova alternativa ao agenciamento de artistas e produção de Eventos, com uma visão inovadora e para o futuro do nosso mercado,a K Label é uma casa para artistas renomados e novos talentos da nossa praça. Mais experiente, com mais capacidade e mais recursos para lhe dar com o nosso mercado, Robilson Vasco com a K Label é um nome a ter em conta para o mercado Nacional.";
  let i = 0;
  function typing() {
    if (i < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 100);
    }
  }
  typing();


