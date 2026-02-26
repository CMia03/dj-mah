"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function BlogSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "Comment choisir le DJ parfait pour son événement ?",
      answer: "Le DJ parfait doit comprendre votre vision musicale, avoir une expérience solide dans le type d'événement que vous organisez, et posséder une grande variété musicale. N'hésitez pas à demander des références et à consulter ses avis clients."
    },
    {
      question: "Quel type de musique convient le mieux à un mariage ?",
      answer: "Pour un mariage, il faut un mélange équilibré : musique douce pendant le cocktail, titres romantiques pour l'entrée des mariés, puis des hits qui font danser pour la soirée. Le DJ doit savoir lire l'ambiance et s'adapter à chaque moment."
    },
    {
      question: "Quand faut-il réserver son DJ ?",
      answer: "Idéalement 6 à 12 mois à l'avance pour les mariages, 3 à 6 mois pour les événements d'entreprise. Les bons DJ sont très demandés, surtout en haute saison (mai-septembre)."
    },
    {
      question: "Quel matériel professionnel un DJ doit-il avoir ?",
      answer: "Un DJ professionnel doit avoir des enceintes de qualité, une table de mixage professionnelle, des microphones sans fil, et un système de secours. Le son doit être clair et puissant sans être agressif."
    },
    {
      question: "Comment savoir si un DJ est professionnel ?",
      answer: "Un DJ professionnel a une assurance, un contrat clair, arrive en avance, teste son matériel, communique bien avant l'événement, et possède des avis clients vérifiables. Il ne se improvise pas !"
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="blog" className="scroll-mt-24">
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
        
        .chevron-transition {
          transition: transform 0.3s ease-out;
        }
        
        .chevron-rotate {
          transform: rotate(180deg);
        }
      `}</style>
      
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
          Blog DJ - Conseils & Astuces
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            
            return (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition-all hover:bg-white/10"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors rounded-t-2xl"
                >
                  <h3 className="text-lg font-semibold text-[#F5D5E0] pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <div className={`chevron-transition ${isOpen ? 'chevron-rotate' : ''}`}>
                      {isOpen ? (
                        <ChevronUp size={20} className="text-[#F5D5E0]" />
                      ) : (
                        <ChevronDown size={20} className="text-white/60" />
                      )}
                    </div>
                  </div>
                </button>
                
                {isOpen && (
                  <div 
                    className="px-6 pb-4 overflow-hidden"
                    style={{
                      animation: 'slideDown 0.3s ease-out'
                    }}
                  >
                    <p className="text-white/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
